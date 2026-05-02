import type { KnipConfig } from "knip";

/**
 * Knip configuration.
 * @see https://knip.dev/overview/configuration
 */
const knipConfig: KnipConfig = {
  entry: ["src/index.ts", "src/panda/index.ts"],
  project: ["src/**/*.ts"],
};

export default knipConfig;
