/**
 * Emit the `sigil-tokens-rs` crate's generated color data from the DTCG source
 * of truth. This is the native-renderer emitter counterpart to the Panda
 * (web) transform: both consume the same `src/dtcg/*.tokens.json`.
 *
 * It resolves Panda-flavored DTCG (alias strings `{colors.x}`, DEFAULT group
 * refs, and base/`_dark` modes carried in `$extensions["omni.mode"]`) to
 * concrete sRGB colors per theme, then writes `sigil-tokens-rs/src/generated.rs`.
 */
import { assign } from "radash";

import primitivesDoc from "../dtcg/primitives.tokens.json";
import semanticDoc from "../dtcg/semantic.tokens.json";

type Mode = "base" | "dark";

type Rgba = { r: number; g: number; b: number; a: number };

// Panda resolves `{colors.x}` across both primitive and semantic colors in one
// namespace (semantic "virtual colors" merge onto primitive ramps), so merge
// them into a single lookup tree.
const colors = assign(
  structuredClone(primitivesDoc.colors) as Record<string, unknown>,
  structuredClone(semanticDoc.colors) as Record<string, unknown>,
);

const isLeaf = (node: unknown): node is Record<string, unknown> =>
  !!node && typeof node === "object" && "$value" in (node as object);

const isAlias = (value: unknown): value is string =>
  typeof value === "string" && /^\{[^}]+\}$/.test(value);

/** Pick a leaf's value for a mode, honoring the `omni.mode` conditional. */
const leafValue = (leaf: Record<string, unknown>, mode: Mode): unknown => {
  const modes = (
    leaf["$extensions"] as Record<string, Record<string, unknown>> | undefined
  )?.["omni.mode"];
  if (modes) {
    if (mode === "dark" && "_dark" in modes) return modes["_dark"];
    return modes["base"] ?? leaf["$value"];
  }
  return leaf["$value"];
};

/** Walk a dotted path into the merged color tree. */
const walk = (path: string): unknown =>
  path
    .split(".")
    .reduce<unknown>(
      (node, key) =>
        node && typeof node === "object"
          ? (node as Record<string, unknown>)[key]
          : undefined,
      colors,
    );

/** Resolve a color path (or alias) to a concrete CSS color string for a mode. */
const resolve = (path: string, mode: Mode, depth = 0): string => {
  if (depth > 20) throw new Error(`alias cycle at ${path}`);

  let node = walk(path);
  // A group ref (e.g. `colors.brand.primary`) resolves via its DEFAULT child.
  if (node && typeof node === "object" && !isLeaf(node)) {
    node = (node as Record<string, unknown>)["DEFAULT"];
    if (!node) throw new Error(`no DEFAULT for group ${path}`);
  }
  if (!isLeaf(node)) throw new Error(`unresolved color path: ${path}`);

  const value = leafValue(node, mode);
  if (isAlias(value)) {
    const inner = value.slice(1, -1).replace(/^colors\./, "");
    return resolve(inner, mode, depth + 1);
  }
  if (typeof value !== "string") throw new Error(`non-string color at ${path}`);
  return value;
};

/** Parse a concrete CSS color string to sRGB components. */
const toRgba = (css: string): Rgba => {
  const s = css.trim();

  if (s === "transparent") return { r: 0, g: 0, b: 0, a: 0 };

  const hex = s.match(/^#([0-9a-fA-F]{6})$/);
  if (hex) {
    const n = parseInt(hex[1], 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a: 255 };
  }

  const rgba = s.match(
    /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/,
  );
  if (rgba) {
    return {
      r: +rgba[1],
      g: +rgba[2],
      b: +rgba[3],
      a: Math.round((rgba[4] === undefined ? 1 : +rgba[4]) * 255),
    };
  }

  throw new Error(`cannot parse color: ${css}`);
};

const rustColor = (css: string): string => {
  const { r, g, b, a } = toRgba(css);
  return `Rgba::new(${r}, ${g}, ${b}, ${a})`;
};

// Curated semantic roles useful for theming a native UI (egui and others).
const PALETTE_ROLES: Record<string, string> = {
  bg_canvas: "background.canvas",
  bg_default: "background.default",
  bg_subtle: "background.subtle",
  bg_muted: "background.muted",
  bg_emphasized: "background.emphasized",
  bg_disabled: "background.disabled",
  fg_default: "foreground.default",
  fg_muted: "foreground.muted",
  fg_subtle: "foreground.subtle",
  accent: "accent.default",
  accent_emphasized: "accent.emphasized",
  accent_fg: "accent.foreground",
  border_default: "border.default",
  border_muted: "border.muted",
  border_subtle: "border.subtle",
};

// Omni brand gemstones as concrete consts (mode-independent DEFAULT shade).
const OMNI = [
  "amethyst",
  "citrine",
  "emerald",
  "labradorite",
  "ruby",
  "sapphire",
];

const palette = (mode: Mode) =>
  Object.entries(PALETTE_ROLES)
    .map(
      ([field, path]) => `        ${field}: ${rustColor(resolve(path, mode))},`,
    )
    .join("\n");

const omniConsts = OMNI.map(
  (gem) =>
    `    /// Omni ${gem}.\n    pub const ${gem.toUpperCase()}: Rgba = ${rustColor(
      resolve(`omni.${gem}`, "base"),
    )};`,
).join("\n");

const paletteFields = Object.keys(PALETTE_ROLES)
  .map(
    (field) =>
      `    /// \`${PALETTE_ROLES[field]}\` semantic color.\n    pub ${field}: Rgba,`,
  )
  .join("\n");

const out = `//! Generated by \`bun emit-rust\` from the DTCG token source of
//! truth (\`src/dtcg/*.tokens.json\`). DO NOT EDIT.
//!
//! Colors are resolved sRGB; light and dark are the two \`omni.mode\`
//! permutations of the semantic tokens.

use crate::Rgba;

/// Resolved semantic color palette for one theme.
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Palette {
${paletteFields}
}

/// Light theme palette.
pub const LIGHT: Palette = Palette {
${palette("base")}
};

/// Dark theme palette.
pub const DARK: Palette = Palette {
${palette("dark")}
};

/// Omni brand gemstone colors (DEFAULT shade, theme-independent).
pub mod omni {
    use crate::Rgba;

${omniConsts}
}
`;

const emit = async () => {
  // Sanity-check a couple of known chains before writing, so a resolver
  // regression fails loudly rather than emitting silently-wrong colors.
  const checks: [string, Mode, string][] = [
    ["accent.default", "dark", "#02cac5"], // brand.primary.500 = labradorite.500
    ["accent.default", "base", "#00a3a2"], // brand.primary.DEFAULT = labradorite.600
    ["background.canvas", "dark", "#0a0a0a"], // neutral.950 -> silver.950
    ["background.default", "base", "#ffffff"], // white
  ];
  for (const [path, mode, want] of checks) {
    const got = resolve(path, mode);
    if (got !== want) {
      throw new Error(`resolve(${path}, ${mode}) = ${got}, expected ${want}`);
    }
  }

  const path = `${process.cwd()}/sigil-tokens-rs/src/generated.rs`;
  await Bun.write(path, out);
  console.info(`✅ wrote ${path}`);
};

emit().catch((err) => {
  console.error(err);
  process.exit(1);
});
