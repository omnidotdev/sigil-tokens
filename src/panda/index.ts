import {
  definePreset,
  defineSemanticTokens,
  defineTokens,
} from "@pandacss/dev";

import conditions from "../conditions.theme";
import globalCss from "../globalCss.theme";
import * as baseExtensions from "../extensions";
import * as _semanticTokens from "../semanticTokens";
import * as _tokens from "../tokens";

const tokens = defineTokens({
  animations: _tokens.animations,
  aspectRatios: _tokens.aspectRatios,
  assets: _tokens.assets,
  blurs: _tokens.blurs,
  borders: _tokens.borders,
  borderWidths: _tokens.borderWidths,
  colors: _tokens.colors,
  containerNames: _tokens.containerNames,
  cursor: _tokens.cursor,
  durations: _tokens.durations,
  easings: _tokens.easings,
  fonts: _tokens.fonts,
  fontSizes: _tokens.fontSizes,
  fontWeights: _tokens.fontWeights,
  gradients: _tokens.gradients,
  letterSpacings: _tokens.letterSpacings,
  lineHeights: _tokens.lineHeights,
  opacity: _tokens.opacity,
  radii: _tokens.radii,
  shadows: _tokens.shadows,
  sizes: _tokens.sizes,
  spacing: _tokens.spacing,
  zIndex: _tokens.zIndex,
});

const semanticTokens = defineSemanticTokens({
  animations: _semanticTokens.animations,
  aspectRatios: _semanticTokens.aspectRatios,
  assets: _semanticTokens.assets,
  blurs: _semanticTokens.blurs,
  borders: _semanticTokens.borders,
  borderWidths: _semanticTokens.borderWidths,
  colors: _semanticTokens.colors,
  containerNames: _semanticTokens.containerNames,
  cursor: _semanticTokens.cursor,
  durations: _semanticTokens.durations,
  easings: _semanticTokens.easings,
  fonts: _semanticTokens.fonts,
  fontSizes: _semanticTokens.fontSizes,
  fontWeights: _semanticTokens.fontWeights,
  gradients: _semanticTokens.gradients,
  letterSpacings: _semanticTokens.letterSpacings,
  lineHeights: _semanticTokens.lineHeights,
  opacity: _semanticTokens.opacity,
  radii: _semanticTokens.radii,
  shadows: _semanticTokens.shadows,
  sizes: _semanticTokens.sizes,
  spacing: _semanticTokens.spacing,
  zIndex: _semanticTokens.zIndex,
});

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
