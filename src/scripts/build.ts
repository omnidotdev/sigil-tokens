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
  console.log("📦 Bundling...");
  await Bun.build({
    entrypoints: ["src/index.ts", "src/panda/index.ts"],
    outdir: "build",
    external: [
      "@pandacss/dev",
      "@pandacss/types",
      "radash",
    ],
  });
  console.log("📦 Bundling complete.\n");
};

/**
 * Operations after bundling.
 */
const postflight = async () => {
  console.log("📘 Generating type declarations...");
  await $`bun tsup src/index.ts src/panda/index.ts --dts-only --tsconfig tsconfig.build.json --format esm --out-dir build`;
  console.log("📘 Type declarations generated.\n");

  console.log("🧶 Publishing local package...");
  await $`bun knit push`;
  console.log("🧶 Publishing local package complete.");
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
