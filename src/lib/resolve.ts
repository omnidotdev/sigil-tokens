/**
 * Panda-aware color resolver over the DTCG source of truth, shared by the
 * native emitters (Rust, Tailwind). Resolves alias strings (`{colors.x}`),
 * DEFAULT group refs, and base/`_dark` modes (carried in
 * `$extensions["omni.mode"]`) to concrete CSS color strings per theme.
 */
import { assign } from "radash";

import primitivesDoc from "../dtcg/primitives.tokens.json";
import semanticDoc from "../dtcg/semantic.tokens.json";

export type Mode = "base" | "dark";

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
export const resolve = (path: string, mode: Mode, depth = 0): string => {
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
export const toRgba = (css: string): Rgba => {
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
