import { describe, expect, test } from "bun:test";

import sigilPreset from "../panda";

/**
 * Canonical JSON with recursively sorted keys, so equality reflects values and
 * not key order.
 */
const canonical = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value as Record<string, unknown>)
        .sort()
        .map((k) => [k, canonical((value as Record<string, unknown>)[k])]),
    );
  }
  return value;
};

describe("DTCG token pipeline", () => {
  test("preset built from DTCG is byte-identical to the golden snapshot", async () => {
    const actual = JSON.stringify(
      canonical({
        conditions: sigilPreset.conditions,
        globalCss: sigilPreset.globalCss,
        theme: sigilPreset.theme,
      }),
      null,
      2,
    ).trimEnd();

    const golden = (
      await Bun.file(`${process.cwd()}/src/__golden__/panda-preset.json`).text()
    ).trimEnd();

    expect(actual).toBe(golden);
  });

  test("every token scale is present in the generated preset", () => {
    const scales = Object.keys(
      (sigilPreset.theme?.extend?.tokens ?? {}) as Record<string, unknown>,
    );
    // 23 primitive scales come from the DTCG source.
    expect(scales.length).toBe(23);
    expect(scales).toContain("colors");
    expect(scales).toContain("radii");
  });
});
