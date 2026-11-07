import { $ } from "bun";

/**
 * Operations before bundling.
 */
const preflight = async () => {
  await $`rm -rf build`;
};

/**
 * Bundle the package.
 */
const bundle = async () => {
  console.info("📦 Bundling...");
  await Bun.build({
    entrypoints: ["src/index.ts", "src/panda/index.ts"],
    outdir: "build",
    external: ["@pandacss/dev", "@pandacss/types", "radash"],
  });
  console.info("📦 Bundling complete.\n");
};

/**
 * Operations after bundling.
 */
const postflight = async () => {
  console.info("📘 Generating type declarations...");
  await $`bun tsup src/index.ts src/panda/index.ts --dts-only --tsconfig tsconfig.build.json --format esm --out-dir build`;
  console.info("📘 Type declarations generated.\n");

  // Local package linking via knit is a dev convenience; it has no local store
  // in CI (release/publish), so treat its absence as non-fatal rather than
  // failing the build.
  try {
    console.info("🧶 Publishing local package...");
    await $`bun knit push`;
    console.info("🧶 Publishing local package complete.");
  } catch {
    console.warn("🧶 knit push skipped (no local store); continuing");
  }
};

/**
 * Build the library.
 */
const build = async () => {
  await preflight();
  await bundle();
  await postflight();
};

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
