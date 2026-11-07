/**
 * Convert DTCG (W3C Design Tokens 2025.10) token documents into the Panda token
 * shape Panda consumes. This is the transform that makes the DTCG source in
 * `src/dtcg/*.tokens.json` the single source of truth for the Sigil preset: the
 * preset is built from DTCG at import time rather than from hand-authored token
 * objects.
 *
 * Encoding (mirrors the migration extractor):
 * - `{ $value: X }` becomes `{ value: X }`, X verbatim (strings incl. Panda
 *   alias refs `{colors.x}`, numbers, arrays).
 * - A Panda conditional value carried in `$extensions["omni.mode"]` is restored
 *   verbatim as `{ value: { base, _dark, ... } }`.
 * - Extra DTCG-prefixed leaf keys (e.g. `$description`) are restored unprefixed.
 */

type Dtcg = { $value: unknown; $extensions?: Record<string, unknown> } & Record<
  string,
  unknown
>;

const isDtcgLeaf = (node: unknown): node is Dtcg =>
  !!node && typeof node === "object" && "$value" in (node as object);

/** Reconstruct a Panda leaf `{ value, ...rest }` from a DTCG leaf. */
const toPandaLeaf = (leaf: Dtcg): Record<string, unknown> => {
  const conditional = (
    leaf.$extensions as Record<string, Record<string, unknown>> | undefined
  )?.["omni.mode"];

  // Restore extra leaf keys carried as `$description` etc. (everything except
  // `$value` and the internal `$extensions` mode carrier).
  const extra = Object.fromEntries(
    Object.entries(leaf)
      .filter(([k]) => k !== "$value" && k !== "$extensions")
      .map(([k, v]) => [k.replace(/^\$/, ""), v]),
  );

  // Rebuild Panda's conditional value object verbatim when present, else plain.
  return conditional
    ? { value: conditional, ...extra }
    : { value: leaf.$value, ...extra };
};

/** Recursively convert a DTCG tree into a Panda token tree. */
const toPanda = (node: unknown): unknown => {
  if (isDtcgLeaf(node)) return toPandaLeaf(node);

  if (node && typeof node === "object") {
    return Object.fromEntries(
      Object.entries(node as Record<string, unknown>).map(([k, v]) => [
        k,
        toPanda(v),
      ]),
    );
  }

  return node;
};

/** Convert a whole DTCG document (scales at top level) to a Panda token map. */
export const documentToPanda = (doc: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(doc).map(([scale, node]) => [scale, toPanda(node)]),
  ) as Record<string, unknown>;
