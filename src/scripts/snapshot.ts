import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

import sigilPreset from "../panda";

/**
 * Serialize a value to canonical JSON with recursively sorted object keys, so a
 * snapshot diff reflects real value changes and not key-order churn.
 */
const canonical = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(canonical);

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value as Record<string, unknown>)
        .sort()
        .map((key) => [
          key,
          canonical((value as Record<string, unknown>)[key]),
        ]),
    );
  }

  return value;
};

/**
 * Golden snapshot of the resolved Panda preset theme. This is the regression
 * oracle for the DTCG migration: the preset built from DTCG must reproduce this
 * byte-for-byte, otherwise web regresses. Regenerate only when a token value is
 * intentionally changed.
 */
const snapshot = async () => {
  const data = {
    conditions: sigilPreset.conditions,
    globalCss: sigilPreset.globalCss,
    theme: sigilPreset.theme,
  };

  const out = `${process.cwd()}/src/__golden__/panda-preset.json`;
  mkdirSync(dirname(out), { recursive: true });
  await Bun.write(out, `${JSON.stringify(canonical(data), null, 2)}\n`);
  console.info(`✅ wrote golden snapshot -> ${out}`);
};

snapshot().catch((err) => {
  console.error(err);
  process.exit(1);
});
