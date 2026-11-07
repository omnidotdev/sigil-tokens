/**
 * Regression gate for the DTCG migration. The Panda preset now builds from the
 * DTCG source of truth (`src/dtcg/*.tokens.json`); this diffs its canonicalized
 * form against the golden snapshot of the original hand-authored preset. Exit
 * non-zero on any difference: the migration must not change web output.
 *
 * Regenerate the golden intentionally with `bun snapshot` when a token value is
 * deliberately changed.
 */
import sigilPreset from "../panda";

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

const verify = async () => {
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

  if (actual === golden) {
    console.info(
      "✅ DTCG-built preset is byte-identical to the golden. No web regression.",
    );
    return;
  }

  const a = actual.split("\n");
  const g = golden.split("\n");
  for (let i = 0; i < Math.max(a.length, g.length); i++) {
    if (a[i] !== g[i]) {
      console.error(`❌ diverges at line ${i + 1}:`);
      console.error(`  golden:    ${g[i] ?? "(none)"}`);
      console.error(`  generated: ${a[i] ?? "(none)"}`);
      break;
    }
  }
  console.error(`lines: generated=${a.length} golden=${g.length}`);
  process.exit(1);
};

verify().catch((err) => {
  console.error(err);
  process.exit(1);
});
