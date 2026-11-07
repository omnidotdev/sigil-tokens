import { definePreset } from "@pandacss/dev";

import conditions from "../conditions.theme";
import primitivesDoc from "../dtcg/primitives.tokens.json";
import semanticDoc from "../dtcg/semantic.tokens.json";
import * as baseExtensions from "../extensions";
import globalCss from "../globalCss.theme";
import { documentToPanda } from "../lib/dtcg";

import type { Theme } from "@pandacss/types";

/**
 * Tokens and semantic tokens are built from the DTCG source of truth in
 * `src/dtcg/*.tokens.json`. The DTCG files are authoritative; `bun verify`
 * gates that the generated preset stays byte-identical to the golden snapshot.
 */
const tokens = documentToPanda(
  primitivesDoc as Record<string, unknown>,
) as Theme["tokens"];
const semanticTokens = documentToPanda(
  semanticDoc as Record<string, unknown>,
) as Theme["semanticTokens"];

/**
 * Sigil Panda CSS preset (tokens only, no component recipes)
 */
const sigilPreset = definePreset({
  name: "sigil",
  conditions,
  globalCss,
  theme: {
    extend: {
      ...baseExtensions,
      semanticTokens,
      tokens,
    },
  },
});

export default sigilPreset;
