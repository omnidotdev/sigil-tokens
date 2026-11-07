/**
 * One-time migration tool: read the current assembled Panda token objects and
 * emit DTCG (W3C Design Tokens 2025.10) source files. Run once to author the
 * DTCG source from the existing tokens; after cutover the DTCG files are the
 * source and this script is deleted.
 *
 * Encoding rules (chosen so the round-trip back to Panda is byte-exact):
 * - A leaf `{ value: X }` becomes `{ $value: X }`, X preserved verbatim
 *   (strings incl. Panda alias refs `{colors.x}`, numbers, and arrays).
 * - A Panda conditional value `{ value: { base, _dark } }` becomes
 *   `{ $value: <base>, $extensions: { "omni.mode": { dark: <_dark> } } }`.
 *   `$extensions` is the official DTCG escape hatch; the Panda emitter reads it
 *   back into `{ base, _dark }`, and the mode axis maps to the DTCG resolver.
 * - Group nesting is preserved. `$type` is intentionally omitted: values are
 *   carried verbatim so neither emitter depends on structural typing (the Rust
 *   emitter parses hex/units itself). Typing can tighten later (P3).
 */
import { mkdirSync } from "node:fs";

import * as semanticTokens from "../../semanticTokens";
import * as tokens from "../../tokens";

/**
 * Canonical scales fed into Panda's `defineTokens`/`defineSemanticTokens` (see
 * `src/panda/index.ts`). The index modules also re-export helpers (e.g.
 * `generateAlphaColors`, `omniColors`), which must not be treated as scales.
 */
const SCALES = [
  "animations",
  "aspectRatios",
  "assets",
  "blurs",
  "borders",
  "borderWidths",
  "colors",
  "containerNames",
  "cursor",
  "durations",
  "easings",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "opacity",
  "radii",
  "shadows",
  "sizes",
  "spacing",
  "zIndex",
] as const;

const pick = (ns: Record<string, unknown>) =>
  Object.fromEntries(SCALES.map((s) => [s, ns[s]]));

type Leaf = { value: unknown } & Record<string, unknown>;

const isLeaf = (node: unknown): node is Leaf =>
  !!node && typeof node === "object" && "value" in (node as object);

const isConditional = (
  value: unknown,
): value is { base: unknown } & Record<string, unknown> =>
  !!value &&
  typeof value === "object" &&
  !Array.isArray(value) &&
  "base" in (value as object);

/** Convert one leaf `{ value, ...rest }` into a DTCG `{ $value, ... }`. */
const convertLeaf = (leaf: Leaf): Record<string, unknown> => {
  const { value, ...rest } = leaf;

  // Carry any extra Panda leaf keys (e.g. `description`) as their DTCG-prefixed
  // equivalent (`$description`), preserving them through the round-trip.
  const extra = Object.fromEntries(
    Object.entries(rest).map(([k, v]) => [`$${k}`, v]),
  );

  if (isConditional(value)) {
    // Preserve the whole Panda conditional object verbatim (base plus any
    // `_dark`/`_light`/... conditions, even when only `base` is present, since
    // Panda keeps a single-key conditional as an object). `$value` carries the
    // base so the token is a valid DTCG default and resolves for the Rust path.
    return {
      $value: value.base,
      $extensions: { "omni.mode": value },
      ...extra,
    };
  }

  return { $value: value, ...extra };
};

/** Recursively convert a Panda token tree into a DTCG token tree. */
const convert = (node: unknown): unknown => {
  if (isLeaf(node)) return convertLeaf(node);

  if (node && typeof node === "object") {
    return Object.fromEntries(
      Object.entries(node as Record<string, unknown>).map(([k, v]) => [
        k,
        convert(v),
      ]),
    );
  }

  return node;
};

const OUT_DIR = `${process.cwd()}/src/dtcg`;

const write = async (name: string, tree: Record<string, unknown>) => {
  const dtcg = Object.fromEntries(
    Object.entries(tree).map(([scale, node]) => [scale, convert(node)]),
  );
  const path = `${OUT_DIR}/${name}.tokens.json`;
  await Bun.write(path, `${JSON.stringify(dtcg, null, 2)}\n`);
  console.info(`  ${name}: ${Object.keys(tree).length} scales -> ${path}`);
};

const extract = async () => {
  mkdirSync(OUT_DIR, { recursive: true });
  console.info("extracting DTCG from current tokens...");
  await write("primitives", pick(tokens as unknown as Record<string, unknown>));
  await write(
    "semantic",
    pick(semanticTokens as unknown as Record<string, unknown>),
  );
  console.info("done.");
};

extract().catch((err) => {
  console.error(err);
  process.exit(1);
});
