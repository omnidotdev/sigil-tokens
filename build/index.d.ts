import { Tokens, SemanticTokens } from '@pandacss/dev';
import * as _pandacss_types from '@pandacss/types';
import { Recursive, Token, Theme, Preset } from '@pandacss/types';

/**
 * Animation tokens.
 */
declare const animations$1: Tokens["animations"];

/**
 * Aspect ratio tokens.
 */
declare const aspectRatios$1: Tokens["aspectRatios"];

/**
 * Asset tokens.
 */
declare const assets$1: Tokens["assets"];

/**
 * Blur tokens.
 */
declare const blurs$1: Tokens["blurs"];

/**
 * Border tokens.
 */
declare const borders$1: Tokens["borders"];

/**
 * Border width tokens.
 */
declare const borderWidths$1: Tokens["borderWidths"];

/**
 * Generate alpha (transparent) colors from base colors.
 */
declare const generateAlphaColors: (colors: Tokens["colors"]) => Recursive<Token<string>>;
/**
 * Omni colors, represented by 6 gemstones.
 */
declare const omniColors: Tokens["colors"];
/**
 * Brand colors.
 */
declare const brandColors: Tokens["colors"];
/**
 * Utility colors.
 */
declare const utilityColors: Tokens["colors"];
/**
 * Base colors.
 */
declare const baseColors: Tokens["colors"];
/**
 * Neutral colors.
 */
declare const neutralColors: Tokens["colors"];
declare const neutrals: Recursive<Token<string>>;
/**
 * Color tokens. Default Panda colors: https://panda-css.com/docs/customization/theme#colors
 */
declare const colors$1: Tokens["colors"];

/**
 * Container name tokens.
 */
declare const containerNames$1: Tokens["containerNames"];

/**
 * Cursor tokens.
 */
declare const cursor$1: Tokens["cursor"];

/**
 * Duration tokens.
 */
declare const durations$1: Tokens["durations"];

/**
 * Easing function tokens.
 */
declare const easings$1: Tokens["easings"];

/**
 * Font tokens.
 */
declare const fonts$1: Tokens["fonts"];

/**
 * Font size tokens.
 */
declare const fontSizes$1: Tokens["fontSizes"];

/**
 * Font weight tokens.
 */
declare const fontWeights$1: Tokens["fontWeights"];

/**
 * Gradient tokens.
 */
declare const gradients$1: Tokens["gradients"];

/**
 * Letter spacing tokens.
 */
declare const letterSpacings$1: Tokens["letterSpacings"];

/**
 * Line height tokens.
 */
declare const lineHeights$1: Tokens["lineHeights"];

/**
 * Opacity tokens.
 */
declare const opacity$1: Tokens["opacity"];

/**
 * Radii tokens.
 */
declare const radii$1: Tokens["radii"];

/**
 * Shadow tokens.
 */
declare const shadows$1: Tokens["shadows"];

/**
 * Size tokens.
 */
declare const sizes$1: Tokens["sizes"];

/**
 * Spacing tokens.
 */
declare const spacing$1: Tokens["spacing"];

/**
 * Z-index tokens.
 */
declare const zIndex$1: Tokens["zIndex"];

declare const index$2_baseColors: typeof baseColors;
declare const index$2_brandColors: typeof brandColors;
declare const index$2_generateAlphaColors: typeof generateAlphaColors;
declare const index$2_neutralColors: typeof neutralColors;
declare const index$2_neutrals: typeof neutrals;
declare const index$2_omniColors: typeof omniColors;
declare const index$2_utilityColors: typeof utilityColors;
declare namespace index$2 {
  export { animations$1 as animations, aspectRatios$1 as aspectRatios, assets$1 as assets, index$2_baseColors as baseColors, blurs$1 as blurs, borderWidths$1 as borderWidths, borders$1 as borders, index$2_brandColors as brandColors, colors$1 as colors, containerNames$1 as containerNames, cursor$1 as cursor, durations$1 as durations, easings$1 as easings, fontSizes$1 as fontSizes, fontWeights$1 as fontWeights, fonts$1 as fonts, index$2_generateAlphaColors as generateAlphaColors, gradients$1 as gradients, letterSpacings$1 as letterSpacings, lineHeights$1 as lineHeights, index$2_neutralColors as neutralColors, index$2_neutrals as neutrals, index$2_omniColors as omniColors, opacity$1 as opacity, radii$1 as radii, shadows$1 as shadows, sizes$1 as sizes, spacing$1 as spacing, index$2_utilityColors as utilityColors, zIndex$1 as zIndex };
}

/**
 * Animation semantic tokens.
 */
declare const animations: SemanticTokens["animations"];

/**
 * Aspect ratio semantic tokens.
 */
declare const aspectRatios: SemanticTokens["aspectRatios"];

/**
 * Asset semantic tokens.
 */
declare const assets: SemanticTokens["assets"];

/**
 * Blur semantic tokens.
 */
declare const blurs: SemanticTokens["blurs"];

/**
 * Border semantic tokens.
 */
declare const borders: SemanticTokens["borders"];

/**
 * Border width semantic tokens.
 */
declare const borderWidths: SemanticTokens["borderWidths"];

/**
 * Color semantic tokens.
 */
declare const colors: SemanticTokens["colors"];

/**
 * Container name semantic tokens.
 */
declare const containerNames: Tokens["containerNames"];

/**
 * Cursor semantic tokens.
 */
declare const cursor: Tokens["cursor"];

/**
 * Duration semantic tokens.
 */
declare const durations: SemanticTokens["durations"];

/**
 * Easing semantic tokens.
 */
declare const easings: SemanticTokens["easings"];

/**
 * Font semantic tokens.
 */
declare const fonts: SemanticTokens["fonts"];

/**
 * Font size semantic tokens.
 */
declare const fontSizes: SemanticTokens["fontSizes"];

/**
 * Font weight semantic tokens.
 */
declare const fontWeights: SemanticTokens["fontWeights"];

/**
 * Gradient semantic tokens.
 */
declare const gradients: SemanticTokens["gradients"];

/**
 * Letter spacing semantic tokens.
 */
declare const letterSpacings: SemanticTokens["letterSpacings"];

/**
 * Line height semantic tokens.
 */
declare const lineHeights: SemanticTokens["lineHeights"];

/**
 * Opacity semantic tokens.
 */
declare const opacity: SemanticTokens["opacity"];

/**
 * Radii semantic tokens.
 */
declare const radii: SemanticTokens["radii"];

/**
 * Shadow semantic tokens.
 */
declare const shadows: SemanticTokens["shadows"];

/**
 * Size semantic tokens.
 */
declare const sizes: SemanticTokens["sizes"];

/**
 * Spacing semantic tokens.
 */
declare const spacing: SemanticTokens["spacing"];

/**
 * Z-index semantic tokens.
 */
declare const zIndex: SemanticTokens["zIndex"];

declare const index$1_animations: typeof animations;
declare const index$1_aspectRatios: typeof aspectRatios;
declare const index$1_assets: typeof assets;
declare const index$1_blurs: typeof blurs;
declare const index$1_borderWidths: typeof borderWidths;
declare const index$1_borders: typeof borders;
declare const index$1_colors: typeof colors;
declare const index$1_containerNames: typeof containerNames;
declare const index$1_cursor: typeof cursor;
declare const index$1_durations: typeof durations;
declare const index$1_easings: typeof easings;
declare const index$1_fontSizes: typeof fontSizes;
declare const index$1_fontWeights: typeof fontWeights;
declare const index$1_fonts: typeof fonts;
declare const index$1_gradients: typeof gradients;
declare const index$1_letterSpacings: typeof letterSpacings;
declare const index$1_lineHeights: typeof lineHeights;
declare const index$1_opacity: typeof opacity;
declare const index$1_radii: typeof radii;
declare const index$1_shadows: typeof shadows;
declare const index$1_sizes: typeof sizes;
declare const index$1_spacing: typeof spacing;
declare const index$1_zIndex: typeof zIndex;
declare namespace index$1 {
  export { index$1_animations as animations, index$1_aspectRatios as aspectRatios, index$1_assets as assets, index$1_blurs as blurs, index$1_borderWidths as borderWidths, index$1_borders as borders, index$1_colors as colors, index$1_containerNames as containerNames, index$1_cursor as cursor, index$1_durations as durations, index$1_easings as easings, index$1_fontSizes as fontSizes, index$1_fontWeights as fontWeights, index$1_fonts as fonts, index$1_gradients as gradients, index$1_letterSpacings as letterSpacings, index$1_lineHeights as lineHeights, index$1_opacity as opacity, index$1_radii as radii, index$1_shadows as shadows, index$1_sizes as sizes, index$1_spacing as spacing, index$1_zIndex as zIndex };
}

/**
 * Device breakpoints for responsive design.
 */
declare const breakpoints: Theme["breakpoints"];

/**
 * Animation keyframes.
 */
declare const keyframes: _pandacss_types.CssKeyframes;

/**
 * Layer styles.
 */
declare const layerStyles: _pandacss_types.LayerStyles;

/**
 * Text styles.
 */
declare const textStyles: _pandacss_types.TextStyles;

declare const index_breakpoints: typeof breakpoints;
declare const index_keyframes: typeof keyframes;
declare const index_layerStyles: typeof layerStyles;
declare const index_textStyles: typeof textStyles;
declare namespace index {
  export { index_breakpoints as breakpoints, index_keyframes as keyframes, index_layerStyles as layerStyles, index_textStyles as textStyles };
}

/**
 * Conditions.
 * @see https://panda-css.com/docs/concepts/conditional-styles#reference for all available condition keys.
 */
declare const conditions: Preset["conditions"];

/**
 * Global CSS.
 */
declare const globalCss: _pandacss_types.GlobalStyleObject;

interface Params {
    /** Input hexadecimal string. */
    hex: `#${string}`;
    /** Alpha (transparency) value (clamp to 0-1). Defaults to 1. */
    alpha?: number;
    /** Optional function to apply to each component (r, g, b). */
    componentFactory?: (component: number) => number;
}
/**
 * Convert a hexadecimal value (e.g. color code) to its `rgba` equivalent.
 * Note that shorthand hex values are unsupported; input hex must be 6 characters long.
 */
declare const hexToRgba: ({ hex, alpha, componentFactory, }: Params) => string;

export { conditions, index as extensions, globalCss, hexToRgba, index$1 as semanticTokens, index$2 as tokens };
