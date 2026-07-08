var __defProp = Object.defineProperty;
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};

// src/panda/index.ts
import {
  definePreset,
  defineSemanticTokens as defineSemanticTokens24,
  defineTokens as defineTokens24
} from "@pandacss/dev";

// src/conditions.theme.ts
var conditions = {
  extend: {
    current: "&:is([data-current])",
    hidden: "&:is([hidden])",
    hover: [
      "@media (hover: hover) and (pointer: fine)",
      "&:is(:hover, [data-hover])"
    ],
    indeterminate: "&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])",
    off: '&:is([data-state="off"])',
    on: '&:is([data-state="on"])',
    today: "&:is([data-today])",
    underValue: '&:is([data-state="under-value"])'
  }
};
var conditions_theme_default = conditions;

// src/globalCss.theme.ts
import { defineGlobalStyles } from "@pandacss/dev";

// src/semanticTokens/fonts.semantic.ts
import { defineSemanticTokens } from "@pandacss/dev";
var fonts = defineSemanticTokens.fonts({
  primary: {
    value: `var(--font-primary), "Helvetica Neue", Helvetica, Arial, sans-serif`,
    description: "Primary font"
  },
  code: {
    value: "var(--font-code), monospace",
    description: "Code font"
  }
});
var fonts_semantic_default = fonts;

// src/globalCss.theme.ts
var globalCss = defineGlobalStyles({
  "html, body": {
    fontFamily: fonts_semantic_default["primary"].value
  },
  html: {
    lineHeight: 1.5,
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    WebkitTextSizeAdjust: "100%",
    scrollPaddingTop: "6rem",
    minHeight: "100%",
    scrollBehavior: "smooth"
  },
  body: {
    color: "foreground.default",
    bgColor: "background.canvas",
    fontFamily: "var(--font-primary), sans-serif",
    _light: {
      colorScheme: "light"
    },
    _dark: {
      colorScheme: "dark"
    }
  },
  "*, *::before, *::after": {
    borderColor: "border.subtle",
    borderStyle: "solid",
    boxSizing: "border-box"
  },
  "*::placeholder": {
    opacity: 1,
    color: "foreground.subtle"
  },
  "*::selection": {
    color: "background.default",
    bgColor: "accent.default"
  }
});
var globalCss_theme_default = globalCss;

// src/extensions/index.ts
var exports_extensions = {};
__export(exports_extensions, {
  textStyles: () => textStyles_theme_default,
  layerStyles: () => layerStyles_theme_default,
  keyframes: () => keyframes_theme_default,
  breakpoints: () => breakpoints_theme_default
});

// src/extensions/breakpoints.theme.ts
var breakpoints = {
  base: "0em",
  sm: "40em",
  md: "48em",
  lg: "64em",
  xl: "80em",
  "2xl": "96em"
};
var breakpoints_theme_default = breakpoints;
// src/extensions/keyframes.theme.ts
import { defineKeyframes } from "@pandacss/dev";
var keyframes = defineKeyframes({
  spin: {
    to: {
      transform: "rotate(360deg)"
    }
  },
  ping: {
    "75%, 100%": {
      transform: "scale(2)",
      opacity: 0
    }
  },
  bounce: {
    "0%, 100%": {
      transform: "translateY(-25%)",
      animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
    },
    "50%": {
      transform: "none",
      animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
    }
  },
  "fade-in": {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  "fade-out": {
    from: { opacity: 1 },
    to: { opacity: 0 }
  },
  "slide-in": {
    "0%": { opacity: 0, transform: "translateY(64px)" },
    "100%": { opacity: 1, transform: "translateY(0)" }
  },
  "slide-out": {
    "0%": { opacity: 1, transform: "translateY(0)" },
    "100%": { opacity: 0, transform: "translateY(64px)" }
  },
  "slide-in-left": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0%)" }
  },
  "slide-out-left": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-100%)" }
  },
  "slide-in-right": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0%)" }
  },
  "slide-out-right": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(100%)" }
  },
  "collapse-in": {
    "0%": { height: "0" },
    "100%": { height: "var(--height)" }
  },
  "collapse-out": {
    "0%": { height: "var(--height)" },
    "100%": { height: "0" }
  },
  fadeIn: {
    "0%": { opacity: 0, transform: "translateY(-4px)" },
    "100%": { opacity: 1, transform: "translateY(0)" }
  },
  fadeOut: {
    "0%": { opacity: 1, transform: "translateY(0)" },
    "100%": { opacity: 0, transform: "translateY(-4px)" }
  },
  "skeleton-pulse": {
    "50%": {
      opacity: 0.5
    }
  }
});
var keyframes_theme_default = keyframes;
// src/extensions/layerStyles.theme.ts
import { defineLayerStyles } from "@pandacss/dev";
var layerStyles = defineLayerStyles({});
var layerStyles_theme_default = layerStyles;
// src/extensions/textStyles.theme.ts
import { defineTextStyles } from "@pandacss/dev";
var textStyles = defineTextStyles({
  "2xs": { value: { fontSize: "2xs", lineHeight: "0.75rem" } },
  xs: { value: { fontSize: "xs", lineHeight: "1.125rem" } },
  sm: { value: { fontSize: "sm", lineHeight: "1.25rem" } },
  md: { value: { fontSize: "md", lineHeight: "1.5rem" } },
  lg: { value: { fontSize: "lg", lineHeight: "1.75rem" } },
  xl: { value: { fontSize: "xl", lineHeight: "1.875rem" } },
  "2xl": { value: { fontSize: "2xl", lineHeight: "2rem" } },
  "3xl": { value: { fontSize: "3xl", lineHeight: "2.375rem" } },
  "4xl": {
    value: { fontSize: "4xl", lineHeight: "2.75rem", letterSpacing: "-0.02em" }
  },
  "5xl": {
    value: { fontSize: "5xl", lineHeight: "3.75rem", letterSpacing: "-0.02em" }
  },
  "6xl": {
    value: { fontSize: "6xl", lineHeight: "4.5rem", letterSpacing: "-0.02em" }
  },
  "7xl": {
    value: { fontSize: "7xl", lineHeight: "5.75rem", letterSpacing: "-0.02em" }
  },
  "8xl": {
    value: { fontSize: "8xl", lineHeight: "6.5rem", letterSpacing: "-0.02em" }
  },
  "9xl": {
    value: { fontSize: "9xl", lineHeight: "7.5rem", letterSpacing: "-0.02em" }
  }
});
var textStyles_theme_default = textStyles;
// src/semanticTokens/index.ts
var exports_semanticTokens = {};
__export(exports_semanticTokens, {
  zIndex: () => zIndex_semantic_default,
  spacing: () => spacing_semantic_default,
  sizes: () => sizes_semantic_default,
  shadows: () => shadows_semantic_default,
  radii: () => radii_semantic_default,
  opacity: () => opacity_semantic_default,
  lineHeights: () => lineHeights_semantic_default,
  letterSpacings: () => letterSpacings_semantic_default,
  gradients: () => gradients_semantic_default,
  fonts: () => fonts_semantic_default,
  fontWeights: () => fontWeights_semantic_default,
  fontSizes: () => fontSizes_semantic_default,
  easings: () => easings_semantic_default,
  durations: () => durations_semantic_default,
  cursor: () => cursor_semantic_default,
  containerNames: () => containerNames_semantic_default,
  colors: () => colors_semantic_default,
  borders: () => borders_semantic_default,
  borderWidths: () => borderWidths_semantic_default,
  blurs: () => blurs_semantic_default,
  assets: () => assets_semantic_default,
  aspectRatios: () => aspectRatios_semantic_default,
  animations: () => animations_semantic_default
});

// src/semanticTokens/animations.semantic.ts
import { defineSemanticTokens as defineSemanticTokens2 } from "@pandacss/dev";
var animations = defineSemanticTokens2.animations({});
var animations_semantic_default = animations;
// src/semanticTokens/aspectRatios.semantic.ts
import { defineSemanticTokens as defineSemanticTokens3 } from "@pandacss/dev";
var aspectRatios = defineSemanticTokens3.aspectRatios({
  square: { value: "1 / 1" },
  landscape: { value: "4 / 3" },
  portrait: { value: "3 / 4" },
  wide: { value: "16 / 9" },
  ultrawide: { value: "18 / 5" },
  golden: { value: "1.618 / 1" }
});
var aspectRatios_semantic_default = aspectRatios;
// src/semanticTokens/assets.semantic.ts
import { defineSemanticTokens as defineSemanticTokens4 } from "@pandacss/dev";
var assets = defineSemanticTokens4.assets({});
var assets_semantic_default = assets;
// src/semanticTokens/blurs.semantic.ts
import { defineSemanticTokens as defineSemanticTokens5 } from "@pandacss/dev";
var blurs = defineSemanticTokens5.blurs({});
var blurs_semantic_default = blurs;
// src/semanticTokens/borders.semantic.ts
import { defineSemanticTokens as defineSemanticTokens6 } from "@pandacss/dev";
var borders = defineSemanticTokens6.borders({});
var borders_semantic_default = borders;
// src/semanticTokens/borderWidths.semantic.ts
import { defineSemanticTokens as defineSemanticTokens7 } from "@pandacss/dev";
var borderWidths = defineSemanticTokens7.borderWidths({});
var borderWidths_semantic_default = borderWidths;
// src/semanticTokens/colors.semantic.ts
import { defineSemanticTokens as defineSemanticTokens8 } from "@pandacss/dev";

// src/tokens/colors.tokens.ts
import { defineTokens } from "@pandacss/dev";
import { assign } from "radash";

// src/util/hexToRgba.ts
var hexToRgba = ({
  hex,
  alpha = 1,
  componentFactory = (component) => component
}) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${componentFactory(r)}, ${componentFactory(g)}, ${componentFactory(b)}, ${alpha})`;
};
var hexToRgba_default = hexToRgba;
// src/tokens/colors.tokens.ts
var generateAlphaColors = (colors) => {
  const alphaColors = {};
  Object.entries(colors).forEach(([key, colorValue]) => {
    Object.entries(colorValue).forEach(([valueKey, { value }]) => {
      if (valueKey === "DEFAULT")
        return;
      const alphaValue = `${valueKey}a`;
      if (!alphaColors[key])
        alphaColors[key] = {};
      alphaColors[key][alphaValue] = {
        value: hexToRgba_default({ hex: value, alpha: +`0.${valueKey}` })
      };
    });
  });
  return alphaColors;
};
var omniColors = {
  amethyst: {
    DEFAULT: { value: "{colors.omni.amethyst.500}" },
    50: { value: "#fdf4ff" },
    100: { value: "#fae9fe" },
    200: { value: "#f5d1fd" },
    300: { value: "#f0adfa" },
    400: { value: "#e77cf6" },
    500: { value: "#d84aeb" },
    600: { value: "#bf2acf" },
    700: { value: "#a11fac" },
    800: { value: "#851c8c" },
    900: { value: "#6f1c73" },
    950: { value: "#49064c" }
  },
  citrine: {
    DEFAULT: { value: "{colors.omni.citrine.500}" },
    50: { value: "#fcf7ee" },
    100: { value: "#f7eaca" },
    200: { value: "#eed399" },
    300: { value: "#e6b763" },
    400: { value: "#dfa040" },
    500: { value: "#d78129" },
    600: { value: "#be6221" },
    700: { value: "#9e461f" },
    800: { value: "#81381f" },
    900: { value: "#6b2f1c" },
    950: { value: "#3d170b" }
  },
  emerald: {
    DEFAULT: { value: "{colors.omni.emerald.500}" },
    50: { value: "#effef7" },
    100: { value: "#dafeef" },
    200: { value: "#b8fadd" },
    300: { value: "#81f4c3" },
    400: { value: "#43e5a0" },
    500: { value: "#1acd81" },
    600: { value: "#0fa968" },
    700: { value: "#108554" },
    800: { value: "#126945" },
    900: { value: "#11563a" },
    950: { value: "#03301f" }
  },
  labradorite: {
    DEFAULT: { value: "{colors.omni.labradorite.600}" },
    50: { value: "#effefc" },
    100: { value: "#c7fff9" },
    200: { value: "#8ffff3" },
    300: { value: "#4ff9ed" },
    400: { value: "#1be6de" },
    500: { value: "#02cac5" },
    600: { value: "#00a3a2" },
    700: { value: "#047f81" },
    800: { value: "#096466" },
    900: { value: "#0d5254" },
    950: { value: "#003134" }
  },
  ruby: {
    DEFAULT: { value: "{colors.omni.ruby.500}" },
    50: { value: "#fff1f2" },
    100: { value: "#ffe0e3" },
    200: { value: "#ffc6cb" },
    300: { value: "#ff9fa8" },
    400: { value: "#ff6876" },
    500: { value: "#fb384a" },
    600: { value: "#e9192c" },
    700: { value: "#c41122" },
    800: { value: "#a2121f" },
    900: { value: "#861620" },
    950: { value: "#49060c" }
  },
  sapphire: {
    DEFAULT: { value: "{colors.omni.sapphire.500}" },
    50: { value: "#ebf7ff" },
    100: { value: "#d2ecff" },
    200: { value: "#afdfff" },
    300: { value: "#78cdff" },
    400: { value: "#39b0ff" },
    500: { value: "#0c89ff" },
    600: { value: "#0063ff" },
    700: { value: "#004bff" },
    800: { value: "#003dd3" },
    900: { value: "#0339a5" },
    950: { value: "#082567" }
  }
};
var brandColors = {
  primary: omniColors["labradorite"],
  secondary: omniColors["amethyst"],
  tertiary: omniColors["emerald"],
  quaternary: omniColors["citrine"],
  quinary: omniColors["ruby"],
  senary: omniColors["sapphire"]
};
var utilityColors = {
  current: { value: "currentColor" },
  transparent: { value: "rgb(0 0 0 / 0)" },
  black: {
    DEFAULT: { value: "#000000" },
    "50a": { value: "rgba(0, 0, 0, 0.05)" },
    "100a": { value: "rgba(0, 0, 0, 0.1)" },
    "150a": { value: "rgba(0, 0, 0, 0.15)" },
    "200a": { value: "rgba(0, 0, 0, 0.2)" },
    "300a": { value: "rgba(0, 0, 0, 0.3)" },
    "400a": { value: "rgba(0, 0, 0, 0.4)" },
    "500a": { value: "rgba(0, 0, 0, 0.5)" },
    "600a": { value: "rgba(0, 0, 0, 0.6)" },
    "700a": { value: "rgba(0, 0, 0, 0.7)" },
    "800a": { value: "rgba(0, 0, 0, 0.8)" },
    "900a": { value: "rgba(0, 0, 0, 0.9)" },
    "950a": { value: "rgba(0, 0, 0, 0.95)" }
  },
  white: {
    DEFAULT: { value: "#ffffff" },
    "50a": { value: "rgba(255, 255, 255, 0.05)" },
    "100a": { value: "rgba(255, 255, 255, 0.1)" },
    "150a": { value: "rgba(255, 255, 255, 0.15)" },
    "200a": { value: "rgba(255, 255, 255, 0.2)" },
    "300a": { value: "rgba(255, 255, 255, 0.3)" },
    "400a": { value: "rgba(255, 255, 255, 0.4)" },
    "500a": { value: "rgba(255, 255, 255, 0.5)" },
    "600a": { value: "rgba(255, 255, 255, 0.6)" },
    "700a": { value: "rgba(255, 255, 255, 0.7)" },
    "800a": { value: "rgba(255, 255, 255, 0.8)" },
    "900a": { value: "rgba(255, 255, 255, 0.9)" },
    "950a": { value: "rgba(255, 255, 255, 0.95)" }
  }
};
var baseColors = {
  rose: {
    DEFAULT: { value: "{colors.rose.500}" },
    50: { value: "#fff1f2" },
    100: { value: "#ffe4e6" },
    200: { value: "#fecdd3" },
    300: { value: "#fda4af" },
    400: { value: "#fb7185" },
    500: { value: "#f43f5e" },
    600: { value: "#e11d48" },
    700: { value: "#be123c" },
    800: { value: "#9f1239" },
    900: { value: "#881337" },
    950: { value: "#4c0519" }
  },
  "dusty-rose": {
    DEFAULT: { value: "{colors.dusty-rose.500}" },
    50: { value: "#faf5f8" },
    100: { value: "#f6edf2" },
    200: { value: "#eedce7" },
    300: { value: "#e1c0d3" },
    400: { value: "#cd99b6" },
    500: { value: "#ba7a9c" },
    600: { value: "#aa6787" },
    700: { value: "#8c4a67" },
    800: { value: "#753f57" },
    900: { value: "#63384a" },
    950: { value: "#3a1d2a" }
  },
  pink: {
    DEFAULT: { value: "{colors.pink.500}" },
    50: { value: "#fdf2f8" },
    100: { value: "#fce7f3" },
    200: { value: "#fbcfe8" },
    300: { value: "#f9a8d4" },
    400: { value: "#f472b6" },
    500: { value: "#ec4899" },
    600: { value: "#db2777" },
    700: { value: "#be185d" },
    800: { value: "#9d174d" },
    900: { value: "#831843" },
    950: { value: "#500724" }
  },
  fuchsia: {
    DEFAULT: { value: "{colors.fuchsia.500}" },
    50: { value: "#fdf4ff" },
    100: { value: "#fae8ff" },
    200: { value: "#f5d0fe" },
    300: { value: "#f0abfc" },
    400: { value: "#e879f9" },
    500: { value: "#d946ef" },
    600: { value: "#c026d3" },
    700: { value: "#a21caf" },
    800: { value: "#86198f" },
    900: { value: "#701a75" },
    950: { value: "#4a044e" }
  },
  purple: {
    DEFAULT: { value: "{colors.purple.500}" },
    50: { value: "#faf5ff" },
    100: { value: "#f3e8ff" },
    200: { value: "#e9d5ff" },
    300: { value: "#d8b4fe" },
    400: { value: "#c084fc" },
    500: { value: "#a855f7" },
    600: { value: "#9333ea" },
    700: { value: "#7e22ce" },
    800: { value: "#6b21a8" },
    900: { value: "#581c87" },
    950: { value: "#3b0764" }
  },
  violet: {
    DEFAULT: { value: "{colors.violet.500}" },
    50: { value: "#f5f3ff" },
    100: { value: "#ede9fe" },
    200: { value: "#ddd6fe" },
    300: { value: "#c4b5fd" },
    400: { value: "#a78bfa" },
    500: { value: "#8b5cf6" },
    600: { value: "#7c3aed" },
    700: { value: "#6d28d9" },
    800: { value: "#5b21b6" },
    900: { value: "#4c1d95" },
    950: { value: "#2e1065" }
  },
  indigo: {
    DEFAULT: { value: "{colors.indigo.500}" },
    50: { value: "#eef2ff" },
    100: { value: "#e0e7ff" },
    200: { value: "#c7d2fe" },
    300: { value: "#a5b4fc" },
    400: { value: "#818cf8" },
    500: { value: "#6366f1" },
    600: { value: "#4f46e5" },
    700: { value: "#4338ca" },
    800: { value: "#3730a3" },
    900: { value: "#312e81" },
    950: { value: "#1e1b4b" }
  },
  blue: {
    DEFAULT: { value: "{colors.blue.500}" },
    50: { value: "#eff6ff" },
    100: { value: "#dbeafe" },
    200: { value: "#bfdbfe" },
    300: { value: "#93c5fd" },
    400: { value: "#60a5fa" },
    500: { value: "#3b82f6" },
    600: { value: "#2563eb" },
    700: { value: "#1d4ed8" },
    800: { value: "#1e40af" },
    900: { value: "#1e3a8a" },
    950: { value: "#172554" }
  },
  sky: {
    DEFAULT: { value: "{colors.sky.500}" },
    50: { value: "#f0f9ff" },
    100: { value: "#e0f2fe" },
    200: { value: "#bae6fd" },
    300: { value: "#7dd3fc" },
    400: { value: "#38bdf8" },
    500: { value: "#0ea5e9" },
    600: { value: "#0284c7" },
    700: { value: "#0369a1" },
    800: { value: "#075985" },
    900: { value: "#0c4a6e" },
    950: { value: "#082f49" }
  },
  cyan: {
    DEFAULT: { value: "{colors.cyan.500}" },
    50: { value: "#ecfeff" },
    100: { value: "#cffafe" },
    200: { value: "#a5f3fc" },
    300: { value: "#67e8f9" },
    400: { value: "#22d3ee" },
    500: { value: "#06b6d4" },
    600: { value: "#0891b2" },
    700: { value: "#0e7490" },
    800: { value: "#155e75" },
    900: { value: "#164e63" },
    950: { value: "#083344" }
  },
  teal: {
    DEFAULT: { value: "{colors.teal.500}" },
    50: { value: "#f0fdfa" },
    100: { value: "#ccfbf1" },
    200: { value: "#99f6e4" },
    300: { value: "#5eead4" },
    400: { value: "#2dd4bf" },
    500: { value: "#14b8a6" },
    600: { value: "#0d9488" },
    700: { value: "#0f766e" },
    800: { value: "#115e59" },
    900: { value: "#134e4a" },
    950: { value: "#042f2e" }
  },
  emerald: {
    DEFAULT: { value: "{colors.emerald.500}" },
    50: { value: "#ecfdf5" },
    100: { value: "#d1fae5" },
    200: { value: "#a7f3d0" },
    300: { value: "#6ee7b7" },
    400: { value: "#34d399" },
    500: { value: "#10b981" },
    600: { value: "#059669" },
    700: { value: "#047857" },
    800: { value: "#065f46" },
    900: { value: "#064e3b" },
    950: { value: "#022c22" }
  },
  green: {
    DEFAULT: { value: "{colors.green.500}" },
    50: { value: "#f0fdf4" },
    100: { value: "#dcfce7" },
    200: { value: "#bbf7d0" },
    300: { value: "#86efac" },
    400: { value: "#4ade80" },
    500: { value: "#22c55e" },
    600: { value: "#16a34a" },
    700: { value: "#15803d" },
    800: { value: "#166534" },
    900: { value: "#14532d" },
    950: { value: "#052e16" }
  },
  lime: {
    DEFAULT: { value: "{colors.lime.500}" },
    50: { value: "#f7fee7" },
    100: { value: "#ecfccb" },
    200: { value: "#d9f99d" },
    300: { value: "#bef264" },
    400: { value: "#a3e635" },
    500: { value: "#84cc16" },
    600: { value: "#65a30d" },
    700: { value: "#4d7c0f" },
    800: { value: "#3f6212" },
    900: { value: "#365314" },
    950: { value: "#1a2e05" }
  },
  yellow: {
    DEFAULT: { value: "{colors.yellow.500}" },
    50: { value: "#fefce8" },
    100: { value: "#fef9c3" },
    200: { value: "#fef08a" },
    300: { value: "#fde047" },
    400: { value: "#facc15" },
    500: { value: "#eab308" },
    600: { value: "#ca8a04" },
    700: { value: "#a16207" },
    800: { value: "#854d0e" },
    900: { value: "#713f12" },
    950: { value: "#422006" }
  },
  amber: {
    DEFAULT: { value: "{colors.amber.500}" },
    50: { value: "#fffbeb" },
    100: { value: "#fef3c7" },
    200: { value: "#fde68a" },
    300: { value: "#fcd34d" },
    400: { value: "#fbbf24" },
    500: { value: "#f59e0b" },
    600: { value: "#d97706" },
    700: { value: "#b45309" },
    800: { value: "#92400e" },
    900: { value: "#78350f" },
    950: { value: "#451a03" }
  },
  orange: {
    DEFAULT: { value: "{colors.orange.500}" },
    50: { value: "#fff7ed" },
    100: { value: "#ffedd5" },
    200: { value: "#fed7aa" },
    300: { value: "#fdba74" },
    400: { value: "#fb923c" },
    500: { value: "#f97316" },
    600: { value: "#ea580c" },
    700: { value: "#c2410c" },
    800: { value: "#9a3412" },
    900: { value: "#7c2d12" },
    950: { value: "#431407" }
  },
  red: {
    DEFAULT: { value: "{colors.red.500}" },
    50: { value: "#fef2f2" },
    100: { value: "#fee2e2" },
    200: { value: "#fecaca" },
    300: { value: "#fca5a5" },
    400: { value: "#f87171" },
    500: { value: "#ef4444" },
    600: { value: "#dc2626" },
    700: { value: "#b91c1c" },
    800: { value: "#991b1b" },
    900: { value: "#7f1d1d" },
    950: { value: "#450a0a" }
  },
  bronze: {
    DEFAULT: { value: "{colors.bronze.500}" },
    50: { value: "#f7f6ef" },
    100: { value: "#ece8d5" },
    200: { value: "#dbd1ad" },
    300: { value: "#c6b37e" },
    400: { value: "#b49a5b" },
    500: { value: "#a5884d" },
    600: { value: "#967444" },
    700: { value: "#725436" },
    800: { value: "#614732" },
    900: { value: "#543e2f" },
    950: { value: "#302018" }
  },
  gold: {
    DEFAULT: { value: "{colors.gold.500}" },
    50: { value: "#ffffe7" },
    100: { value: "#feffc1" },
    200: { value: "#fffd86" },
    300: { value: "#fff441" },
    400: { value: "#ffe60d" },
    500: { value: "#ffd700" },
    600: { value: "#d19e00" },
    700: { value: "#a67102" },
    800: { value: "#89580a" },
    900: { value: "#74480f" },
    950: { value: "#442604" }
  }
};
var neutralColors = {
  silver: {
    DEFAULT: { value: "{colors.silver.500}" },
    25: { value: "#fdfdfd" },
    50: { value: "#fafafa" },
    100: { value: "#f5f5f5" },
    200: { value: "#e5e5e5" },
    300: { value: "#d4d4d4" },
    400: { value: "#a3a3a3" },
    500: { value: "#737373" },
    600: { value: "#525252" },
    700: { value: "#404040" },
    800: { value: "#262626" },
    900: { value: "#171717" },
    950: { value: "#0a0a0a" }
  },
  stone: {
    DEFAULT: { value: "{colors.stone.500}" },
    25: { value: "#fcfcfc" },
    50: { value: "#fafaf9" },
    100: { value: "#f5f5f4" },
    200: { value: "#e7e5e4" },
    300: { value: "#d6d3d1" },
    400: { value: "#a8a29e" },
    500: { value: "#78716c" },
    600: { value: "#57534e" },
    700: { value: "#44403c" },
    800: { value: "#292524" },
    900: { value: "#1c1917" },
    950: { value: "#0c0a09" }
  },
  zinc: {
    DEFAULT: { value: "{colors.zinc.500}" },
    25: { value: "#fcfcfc" },
    50: { value: "#fafafa" },
    100: { value: "#f4f4f5" },
    200: { value: "#e4e4e7" },
    300: { value: "#d4d4d8" },
    400: { value: "#a1a1aa" },
    500: { value: "#71717a" },
    600: { value: "#52525b" },
    700: { value: "#3f3f46" },
    800: { value: "#27272a" },
    900: { value: "#18181b" },
    950: { value: "#09090b" }
  },
  gray: {
    DEFAULT: { value: "{colors.gray.500}" },
    25: { value: "#fcfcfd" },
    50: { value: "#f9fafb" },
    100: { value: "#f3f4f6" },
    200: { value: "#e5e7eb" },
    300: { value: "#d1d5db" },
    400: { value: "#9ca3af" },
    500: { value: "#6b7280" },
    600: { value: "#4b5563" },
    700: { value: "#374151" },
    800: { value: "#1f2937" },
    900: { value: "#111827" },
    950: { value: "#030712" }
  },
  slate: {
    DEFAULT: { value: "{colors.slate.500}" },
    25: { value: "#fcfcfd" },
    50: { value: "#f8fafc" },
    100: { value: "#f1f5f9" },
    200: { value: "#e2e8f0" },
    300: { value: "#cbd5e1" },
    400: { value: "#94a3b8" },
    500: { value: "#64748b" },
    600: { value: "#475569" },
    700: { value: "#334155" },
    800: { value: "#1e293b" },
    900: { value: "#0f172a" },
    950: { value: "#020617" }
  }
};
var neutrals = assign(neutralColors, generateAlphaColors(neutralColors));
var bases = assign(baseColors, generateAlphaColors(baseColors));
var colors = defineTokens.colors({
  omni: assign(omniColors, generateAlphaColors(omniColors)),
  brand: assign(brandColors, generateAlphaColors(brandColors)),
  ...utilityColors,
  ...bases,
  ...neutrals
});
var colors_tokens_default = colors;

// src/semanticTokens/colors.semantic.ts
var NEUTRAL_PALETTE = "silver";
var generateSemanticColors = (colors2, { prefix } = {}) => {
  const calculateTokenPath = ({
    color,
    prefix: prefix2
  }) => prefix2 ? `{colors.${prefix2}.${color}}` : `{colors.${color}}`;
  return Object.keys(colors2).reduce((semanticColors, color) => {
    semanticColors[color] = {
      default: {
        value: {
          base: calculateTokenPath({ color, prefix }),
          _dark: calculateTokenPath({ color: `${color}.500`, prefix })
        }
      },
      emphasized: {
        value: {
          base: calculateTokenPath({ color: `${color}.700`, prefix }),
          _dark: calculateTokenPath({ color: `${color}.400`, prefix })
        }
      },
      foreground: {
        value: {
          base: "{colors.white}",
          _dark: "{colors.neutral.950}"
        }
      },
      text: {
        value: {
          base: calculateTokenPath({ color: `${color}.900`, prefix }),
          _dark: calculateTokenPath({ color: `${color}.100`, prefix })
        }
      }
    };
    return semanticColors;
  }, {});
};
var colors2 = defineSemanticTokens8.colors({
  ...generateSemanticColors(baseColors),
  ...generateSemanticColors(omniColors, { prefix: "omni" }),
  ...generateSemanticColors(brandColors, { prefix: "brand" }),
  ...generateSemanticColors(neutralColors),
  success: { value: "{colors.green}" },
  warning: { value: "{colors.yellow}" },
  danger: { value: "{colors.red}" },
  neutral: {
    DEFAULT: { value: `{colors.${NEUTRAL_PALETTE}.500}` },
    25: { value: `{colors.${NEUTRAL_PALETTE}.25}` },
    50: { value: `{colors.${NEUTRAL_PALETTE}.50}` },
    100: { value: `{colors.${NEUTRAL_PALETTE}.100}` },
    200: { value: `{colors.${NEUTRAL_PALETTE}.200}` },
    300: { value: `{colors.${NEUTRAL_PALETTE}.300}` },
    400: { value: `{colors.${NEUTRAL_PALETTE}.400}` },
    500: { value: `{colors.${NEUTRAL_PALETTE}.500}` },
    600: { value: `{colors.${NEUTRAL_PALETTE}.600}` },
    700: { value: `{colors.${NEUTRAL_PALETTE}.700}` },
    800: { value: `{colors.${NEUTRAL_PALETTE}.800}` },
    900: { value: `{colors.${NEUTRAL_PALETTE}.900}` },
    950: { value: `{colors.${NEUTRAL_PALETTE}.950}` },
    "25a": { value: `{colors.${NEUTRAL_PALETTE}.25a}` },
    "50a": { value: `{colors.${NEUTRAL_PALETTE}.50a}` },
    "100a": { value: `{colors.${NEUTRAL_PALETTE}.100a}` },
    "200a": { value: `{colors.${NEUTRAL_PALETTE}.200a}` },
    "300a": { value: `{colors.${NEUTRAL_PALETTE}.300a}` },
    "400a": { value: `{colors.${NEUTRAL_PALETTE}.400a}` },
    "500a": { value: `{colors.${NEUTRAL_PALETTE}.500a}` },
    "600a": { value: `{colors.${NEUTRAL_PALETTE}.600a}` },
    "700a": { value: `{colors.${NEUTRAL_PALETTE}.700a}` },
    "800a": { value: `{colors.${NEUTRAL_PALETTE}.800a}` },
    "900a": { value: `{colors.${NEUTRAL_PALETTE}.900a}` },
    "950a": { value: `{colors.${NEUTRAL_PALETTE}.950a}` },
    default: { value: `{colors.${NEUTRAL_PALETTE}.700}` },
    emphasized: { value: `{colors.${NEUTRAL_PALETTE}.800}` },
    foreground: { value: "{colors.white}" },
    text: { value: `{colors.${NEUTRAL_PALETTE}.900a}` }
  },
  background: {
    canvas: {
      value: {
        base: "{colors.neutral.25}",
        _dark: "{colors.neutral.950}"
      }
    },
    default: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.neutral.950}"
      }
    },
    subtle: {
      value: {
        base: "{colors.neutral.50}",
        _dark: "{colors.neutral.800}"
      }
    },
    muted: {
      value: {
        base: "{colors.neutral.100}",
        _dark: "{colors.neutral.800}"
      }
    },
    emphasized: {
      value: {
        base: "{colors.neutral.200}",
        _dark: "{colors.neutral.700}"
      }
    },
    disabled: {
      value: {
        base: "{colors.neutral.100}",
        _dark: "{colors.neutral.800}"
      }
    }
  },
  foreground: {
    default: {
      value: {
        base: "{colors.neutral.950}",
        _dark: "{colors.white}"
      }
    },
    muted: {
      value: {
        base: "{colors.neutral.600}",
        _dark: "{colors.neutral.300}"
      }
    },
    subtle: {
      value: {
        base: "{colors.neutral.500}",
        _dark: "{colors.neutral.400}"
      }
    },
    disabled: {
      value: "{colors.neutral.500a}"
    }
  },
  accent: {
    default: {
      value: {
        base: "{colors.brand.primary}",
        _dark: "{colors.brand.primary.500}"
      }
    },
    emphasized: {
      value: {
        base: "{colors.brand.primary.700}",
        _dark: "{colors.brand.primary.400}"
      }
    },
    foreground: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.neutral.950}"
      }
    }
  },
  border: {
    default: {
      value: {
        base: "{colors.neutral.500}"
      }
    },
    muted: {
      value: {
        base: "{colors.neutral.400}",
        _dark: "{colors.neutral.500}"
      }
    },
    subtle: {
      value: {
        base: "{colors.neutral.200}",
        _dark: "{colors.neutral.700}"
      }
    },
    disabled: {
      value: {
        base: "{colors.neutral.300}",
        _dark: "{colors.neutral.600}"
      }
    },
    outline: {
      value: {
        base: "{colors.neutral.700a}",
        _dark: "{colors.neutral.300a}"
      }
    }
  }
});
var colors_semantic_default = colors2;
// src/semanticTokens/containerNames.semantic.ts
import { defineSemanticTokens as defineSemanticTokens9 } from "@pandacss/dev";
var containerNames = defineSemanticTokens9.containerNames({});
var containerNames_semantic_default = containerNames;
// src/semanticTokens/cursor.semantic.ts
import { defineSemanticTokens as defineSemanticTokens10 } from "@pandacss/dev";
var cursor = defineSemanticTokens10.cursor({});
var cursor_semantic_default = cursor;
// src/semanticTokens/durations.semantic.ts
import { defineSemanticTokens as defineSemanticTokens11 } from "@pandacss/dev";
var durations = defineSemanticTokens11.durations({});
var durations_semantic_default = durations;
// src/semanticTokens/easings.semantic.ts
import { defineSemanticTokens as defineSemanticTokens12 } from "@pandacss/dev";
var easings = defineSemanticTokens12.easings({});
var easings_semantic_default = easings;
// src/semanticTokens/fontSizes.semantic.ts
import { defineSemanticTokens as defineSemanticTokens13 } from "@pandacss/dev";
var fontSizes = defineSemanticTokens13.fontSizes({});
var fontSizes_semantic_default = fontSizes;
// src/semanticTokens/fontWeights.semantic.ts
import { defineSemanticTokens as defineSemanticTokens14 } from "@pandacss/dev";
var fontWeights = defineSemanticTokens14.fontWeights({});
var fontWeights_semantic_default = fontWeights;
// src/semanticTokens/gradients.semantic.ts
import { defineSemanticTokens as defineSemanticTokens15 } from "@pandacss/dev";
var gradients = defineSemanticTokens15.gradients({});
var gradients_semantic_default = gradients;
// src/semanticTokens/letterSpacings.semantic.ts
import { defineSemanticTokens as defineSemanticTokens16 } from "@pandacss/dev";
var letterSpacings = defineSemanticTokens16.letterSpacings({});
var letterSpacings_semantic_default = letterSpacings;
// src/semanticTokens/lineHeights.semantic.ts
import { defineSemanticTokens as defineSemanticTokens17 } from "@pandacss/dev";
var lineHeights = defineSemanticTokens17.lineHeights({});
var lineHeights_semantic_default = lineHeights;
// src/semanticTokens/opacity.semantic.ts
import { defineSemanticTokens as defineSemanticTokens18 } from "@pandacss/dev";
var opacity = defineSemanticTokens18.opacity({});
var opacity_semantic_default = opacity;
// src/semanticTokens/radii.semantic.ts
import { defineSemanticTokens as defineSemanticTokens19 } from "@pandacss/dev";
var radii = defineSemanticTokens19.radii({});
var radii_semantic_default = radii;
// src/semanticTokens/shadows.semantic.ts
import { defineSemanticTokens as defineSemanticTokens20 } from "@pandacss/dev";
var shadows = defineSemanticTokens20.shadows({
  xs: {
    value: {
      base: "0px 1px 2px {colors.neutral.300a}, 0px 0px 1px {colors.neutral.500a}",
      _dark: "0px 1px 1px {colors.black.950a}, 0px 0px 1px inset {colors.neutral.500a}"
    }
  },
  sm: {
    value: {
      base: "0px 2px 4px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
      _dark: "0px 2px 4px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.500a}"
    }
  },
  md: {
    value: {
      base: "0px 4px 8px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
      _dark: "0px 4px 8px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.500a}"
    }
  },
  lg: {
    value: {
      base: "0px 8px 16px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
      _dark: "0px 8px 16px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.500a}"
    }
  },
  xl: {
    value: {
      base: "0px 16px 24px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
      _dark: "0px 16px 24px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.500a}"
    }
  },
  "2xl": {
    value: {
      base: "0px 24px 40px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
      _dark: "0px 24px 40px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.500a}"
    }
  }
});
var shadows_semantic_default = shadows;
// src/semanticTokens/sizes.semantic.ts
import { defineSemanticTokens as defineSemanticTokens21 } from "@pandacss/dev";
var sizes = defineSemanticTokens21.sizes({});
var sizes_semantic_default = sizes;
// src/semanticTokens/spacing.semantic.ts
import { defineSemanticTokens as defineSemanticTokens22 } from "@pandacss/dev";
var spacing = defineSemanticTokens22.spacing({});
var spacing_semantic_default = spacing;
// src/semanticTokens/zIndex.semantic.ts
import { defineSemanticTokens as defineSemanticTokens23 } from "@pandacss/dev";
var zIndex = defineSemanticTokens23.zIndex({});
var zIndex_semantic_default = zIndex;
// src/tokens/index.ts
var exports_tokens = {};
__export(exports_tokens, {
  zIndex: () => zIndex_tokens_default,
  utilityColors: () => utilityColors,
  spacing: () => spacing_tokens_default,
  sizes: () => sizes_tokens_default,
  shadows: () => shadows_tokens_default,
  radii: () => radii_tokens_default,
  opacity: () => opacity_tokens_default,
  omniColors: () => omniColors,
  neutrals: () => neutrals,
  neutralColors: () => neutralColors,
  lineHeights: () => lineHeights_tokens_default,
  letterSpacings: () => letterSpacings_tokens_default,
  gradients: () => gradients_tokens_default,
  generateAlphaColors: () => generateAlphaColors,
  fonts: () => fonts_tokens_default,
  fontWeights: () => fontWeights_tokens_default,
  fontSizes: () => fontSizes_tokens_default,
  easings: () => easings_tokens_default,
  durations: () => durations_tokens_default,
  cursor: () => cursor_tokens_default,
  containerNames: () => containerNames_tokens_default,
  colors: () => colors_tokens_default,
  brandColors: () => brandColors,
  borders: () => borders_tokens_default,
  borderWidths: () => borderWidths_tokens_default,
  blurs: () => blurs_tokens_default,
  baseColors: () => baseColors,
  assets: () => assets_tokens_default,
  aspectRatios: () => aspectRatios_tokens_default,
  animations: () => animations_tokens_default
});

// src/tokens/animations.tokens.ts
import { defineTokens as defineTokens2 } from "@pandacss/dev";
var animations2 = defineTokens2.animations({
  spin: { value: "spin 1s linear infinite" },
  ping: { value: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite" },
  pulse: { value: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
  bounce: { value: "bounce 1s infinite" },
  "backdrop-in": {
    value: "fade-in 250ms {easings.emphasized-in}"
  },
  "backdrop-out": {
    value: "fade-out 200ms {easings.emphasized-out}"
  },
  "dialog-in": {
    value: "slide-in 400ms {easings.emphasized-in}"
  },
  "dialog-out": {
    value: "slide-out 200ms {easings.emphasized-out}"
  },
  "drawer-in-left": {
    value: "slide-in-left 400ms {easings.emphasized-in}"
  },
  "drawer-out-left": {
    value: "slide-out-left 200ms {easings.emphasized-out}"
  },
  "drawer-in-right": {
    value: "slide-in-right 400ms {easings.emphasized-in}"
  },
  "drawer-out-right": {
    value: "slide-out-right 200ms {easings.emphasized-out}"
  },
  "drawer-in-bottom": {
    value: "slide-in-bottom 400ms {easings.emphasized-in}"
  },
  "drawer-out-bottom": {
    value: "slide-out-bottom 200ms {easings.emphasized-out}"
  },
  "fade-in": {
    value: "fade-in 400ms {easings.emphasized-in}"
  },
  "collapse-in": {
    value: "collapse-in 250ms {easings.emphasized-in}"
  },
  "collapse-out": {
    value: "collapse-out 200ms {easings.emphasized-out}"
  },
  "skeleton-pulse": {
    value: "skeleton-pulse 2s {easings.pulse} infinite"
  }
});
var animations_tokens_default = animations2;
// src/tokens/aspectRatios.tokens.ts
import { defineTokens as defineTokens3 } from "@pandacss/dev";
var aspectRatios2 = defineTokens3.aspectRatios({
  "1:1": { value: "1" },
  "4:3": { value: "4 / 3" },
  "3:4": { value: "3 / 4" },
  "16:9": { value: "16 / 9" },
  "18:5": { value: "18 / 5" },
  "1.618:1": { value: "1.618 / 1" }
});
var aspectRatios_tokens_default = aspectRatios2;
// src/tokens/assets.tokens.ts
import { defineTokens as defineTokens4 } from "@pandacss/dev";
var assets2 = defineTokens4.assets({});
var assets_tokens_default = assets2;
// src/tokens/blurs.tokens.ts
import { defineTokens as defineTokens5 } from "@pandacss/dev";
var blurs2 = defineTokens5.blurs({
  sm: { value: "4px" },
  base: { value: "8px" },
  md: { value: "12px" },
  lg: { value: "16px" },
  xl: { value: "24px" },
  "2xl": { value: "40px" },
  "3xl": { value: "64px" }
});
var blurs_tokens_default = blurs2;
// src/tokens/borders.tokens.ts
import { defineTokens as defineTokens6 } from "@pandacss/dev";
var borders2 = defineTokens6.borders({
  none: { value: "none" }
});
var borders_tokens_default = borders2;
// src/tokens/borderWidths.tokens.ts
import { defineTokens as defineTokens7 } from "@pandacss/dev";
var borderWidths2 = defineTokens7.borderWidths({});
var borderWidths_tokens_default = borderWidths2;
// src/tokens/containerNames.tokens.ts
import { defineTokens as defineTokens8 } from "@pandacss/dev";
var containerNames2 = defineTokens8.containerNames({});
var containerNames_tokens_default = containerNames2;
// src/tokens/cursor.tokens.ts
import { defineTokens as defineTokens9 } from "@pandacss/dev";
var cursor2 = defineTokens9.cursor({});
var cursor_tokens_default = cursor2;
// src/tokens/durations.tokens.ts
import { defineTokens as defineTokens10 } from "@pandacss/dev";
var durations2 = defineTokens10.durations({
  fastest: { value: "50ms" },
  faster: { value: "100ms" },
  fast: { value: "150ms" },
  normal: { value: "200ms" },
  slow: { value: "300ms" },
  slower: { value: "400ms" },
  slowest: { value: "500ms" }
});
var durations_tokens_default = durations2;
// src/tokens/easings.tokens.ts
import { defineTokens as defineTokens11 } from "@pandacss/dev";
var easings2 = defineTokens11.easings({
  default: { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
  linear: { value: "linear" },
  pulse: { value: "cubic-bezier(0.4, 0.0, 0.6, 1.0)" },
  in: { value: "cubic-bezier(0.4, 0, 1, 1)" },
  out: { value: "cubic-bezier(0, 0, 0.2, 1)" },
  "in-out": { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
  "emphasized-in": { value: "cubic-bezier(0.05, 0.7, 0.1, 1)" },
  "emphasized-out": { value: "cubic-bezier(0.3, 0, 0.8, 0.15)" }
});
var easings_tokens_default = easings2;
// src/tokens/fonts.tokens.ts
import { defineTokens as defineTokens12 } from "@pandacss/dev";
var fonts2 = defineTokens12.fonts({
  sans: {
    value: [
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"'
    ]
  },
  serif: {
    value: [
      "ui-serif",
      "Georgia",
      "Cambria",
      '"Times New Roman"',
      "Times",
      "serif"
    ]
  },
  mono: {
    value: [
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace"
    ]
  },
  assistant: {
    value: `var(--font-assistant), "Helvetica Neue", Helvetica, Arial, sans-serif`,
    description: "Assistant (sans-serif) font"
  },
  firaCode: {
    value: `var(--font-fira-code), monospace`,
    description: "Fira Code (mono) font"
  }
});
var fonts_tokens_default = fonts2;
// src/tokens/fontSizes.tokens.ts
import { defineTokens as defineTokens13 } from "@pandacss/dev";
var fontSizes2 = defineTokens13.fontSizes({
  "2xs": { value: "0.5rem" },
  xs: { value: "0.75rem" },
  sm: { value: "0.875rem" },
  md: { value: "1rem" },
  lg: { value: "1.125rem" },
  xl: { value: "1.25rem" },
  "2xl": { value: "1.5rem" },
  "3xl": { value: "1.875rem" },
  "4xl": { value: "2.25rem" },
  "5xl": { value: "3rem" },
  "6xl": { value: "3.75rem" },
  "7xl": { value: "4.5rem" },
  "8xl": { value: "6rem" },
  "9xl": { value: "8rem" }
});
var fontSizes_tokens_default = fontSizes2;
// src/tokens/fontWeights.tokens.ts
import { defineTokens as defineTokens14 } from "@pandacss/dev";
var fontWeights2 = defineTokens14.fontWeights({
  thin: { value: 100 },
  extralight: { value: 200 },
  light: { value: 300 },
  normal: { value: 400 },
  medium: { value: 500 },
  semibold: { value: 600 },
  bold: { value: 700 },
  extrabold: { value: 800 },
  black: { value: 900 }
});
var fontWeights_tokens_default = fontWeights2;
// src/tokens/gradients.tokens.ts
import { defineTokens as defineTokens15 } from "@pandacss/dev";
var gradients2 = defineTokens15.gradients({});
var gradients_tokens_default = gradients2;
// src/tokens/letterSpacings.tokens.ts
import { defineTokens as defineTokens16 } from "@pandacss/dev";
var letterSpacings2 = defineTokens16.letterSpacings({
  tighter: { value: "-0.05em" },
  tight: { value: "-0.025em" },
  normal: { value: "0em" },
  wide: { value: "0.025em" },
  wider: { value: "0.05em" },
  widest: { value: "0.1em" }
});
var letterSpacings_tokens_default = letterSpacings2;
// src/tokens/lineHeights.tokens.ts
import { defineTokens as defineTokens17 } from "@pandacss/dev";
var lineHeights2 = defineTokens17.lineHeights({
  none: { value: 1 },
  tight: { value: 1.25 },
  snug: { value: 1.375 },
  normal: { value: 1.5 },
  relaxed: { value: 1.75 },
  loose: { value: 2 }
});
var lineHeights_tokens_default = lineHeights2;
// src/tokens/opacity.tokens.ts
import { defineTokens as defineTokens18 } from "@pandacss/dev";
var opacity2 = defineTokens18.opacity({});
var opacity_tokens_default = opacity2;
// src/tokens/radii.tokens.ts
import { defineTokens as defineTokens19 } from "@pandacss/dev";
var radii2 = defineTokens19.radii({
  none: { value: "0" },
  "2xs": { value: "0.0625rem" },
  xs: { value: "0.125rem" },
  sm: { value: "0.25rem" },
  md: { value: "0.375rem" },
  lg: { value: "0.5rem" },
  xl: { value: "0.75rem" },
  "2xl": { value: "1rem" },
  "3xl": { value: "1.5rem" },
  full: { value: "9999px" }
});
var radii_tokens_default = radii2;
// src/tokens/shadows.tokens.ts
import { defineTokens as defineTokens20 } from "@pandacss/dev";
var shadows2 = defineTokens20.shadows({});
var shadows_tokens_default = shadows2;
// src/tokens/sizes.tokens.ts
import { defineTokens as defineTokens22 } from "@pandacss/dev";

// src/tokens/spacing.tokens.ts
import { defineTokens as defineTokens21 } from "@pandacss/dev";
var spacing2 = defineTokens21.spacing({
  0: { value: "0rem" },
  0.5: { value: "0.125rem" },
  1: { value: "0.25rem" },
  1.5: { value: "0.375rem" },
  2: { value: "0.5rem" },
  2.5: { value: "0.625rem" },
  3: { value: "0.75rem" },
  3.5: { value: "0.875rem" },
  4: { value: "1rem" },
  4.5: { value: "1.125rem" },
  5: { value: "1.25rem" },
  6: { value: "1.5rem" },
  7: { value: "1.75rem" },
  8: { value: "2rem" },
  9: { value: "2.25rem" },
  10: { value: "2.5rem" },
  11: { value: "2.75rem" },
  12: { value: "3rem" },
  14: { value: "3.5rem" },
  16: { value: "4rem" },
  20: { value: "5rem" },
  20.5: { value: "5.125rem" },
  21: { value: "5.25rem" },
  21.5: { value: "5.375rem" },
  22: { value: "5.5rem" },
  22.5: { value: "5.625rem" },
  23: { value: "5.75rem" },
  23.5: { value: "5.875rem" },
  24: { value: "6rem" },
  28: { value: "7rem" },
  32: { value: "8rem" },
  36: { value: "9rem" },
  40: { value: "10rem" },
  44: { value: "11rem" },
  48: { value: "12rem" },
  52: { value: "13rem" },
  56: { value: "14rem" },
  60: { value: "15rem" },
  62: { value: "15.5rem" },
  64: { value: "16rem" },
  72: { value: "18rem" },
  80: { value: "20rem" },
  96: { value: "24rem" }
});
var spacing_tokens_default = spacing2;

// src/tokens/sizes.tokens.ts
var sizes2 = defineTokens22.sizes({
  ...spacing_tokens_default,
  full: { value: "100%" },
  min: { value: "min-content" },
  max: { value: "max-content" },
  fit: { value: "fit-content" },
  prose: { value: "65ch" },
  "2xs": { value: "16rem" },
  xs: { value: "20rem" },
  sm: { value: "24rem" },
  md: { value: "28rem" },
  lg: { value: "32rem" },
  xl: { value: "36rem" },
  "2xl": { value: "42rem" },
  "3xl": { value: "48rem" },
  "4xl": { value: "56rem" },
  "5xl": { value: "64rem" },
  "6xl": { value: "72rem" },
  "7xl": { value: "80rem" },
  "8xl": { value: "90rem" }
});
var sizes_tokens_default = sizes2;
// src/tokens/zIndex.tokens.ts
import { defineTokens as defineTokens23 } from "@pandacss/dev";
var zIndex2 = defineTokens23.zIndex({
  hide: {
    value: -1
  },
  base: {
    value: 0
  },
  foreground: {
    value: 1
  },
  docked: {
    value: 10
  },
  dropdown: {
    value: 1000
  },
  sticky: {
    value: 1100
  },
  banner: {
    value: 1200
  },
  overlay: {
    value: 1300
  },
  dialog: {
    value: 1400
  },
  popover: {
    value: 1500
  },
  skipLink: {
    value: 1600
  },
  toast: {
    value: 1700
  },
  tooltip: {
    value: 1800
  }
});
var zIndex_tokens_default = zIndex2;
// src/panda/index.ts
var tokens = defineTokens24({
  animations: animations_tokens_default,
  aspectRatios: aspectRatios_tokens_default,
  assets: assets_tokens_default,
  blurs: blurs_tokens_default,
  borders: borders_tokens_default,
  borderWidths: borderWidths_tokens_default,
  colors: colors_tokens_default,
  containerNames: containerNames_tokens_default,
  cursor: cursor_tokens_default,
  durations: durations_tokens_default,
  easings: easings_tokens_default,
  fonts: fonts_tokens_default,
  fontSizes: fontSizes_tokens_default,
  fontWeights: fontWeights_tokens_default,
  gradients: gradients_tokens_default,
  letterSpacings: letterSpacings_tokens_default,
  lineHeights: lineHeights_tokens_default,
  opacity: opacity_tokens_default,
  radii: radii_tokens_default,
  shadows: shadows_tokens_default,
  sizes: sizes_tokens_default,
  spacing: spacing_tokens_default,
  zIndex: zIndex_tokens_default
});
var semanticTokens = defineSemanticTokens24({
  animations: animations_semantic_default,
  aspectRatios: aspectRatios_semantic_default,
  assets: assets_semantic_default,
  blurs: blurs_semantic_default,
  borders: borders_semantic_default,
  borderWidths: borderWidths_semantic_default,
  colors: colors_semantic_default,
  containerNames: containerNames_semantic_default,
  cursor: cursor_semantic_default,
  durations: durations_semantic_default,
  easings: easings_semantic_default,
  fonts: fonts_semantic_default,
  fontSizes: fontSizes_semantic_default,
  fontWeights: fontWeights_semantic_default,
  gradients: gradients_semantic_default,
  letterSpacings: letterSpacings_semantic_default,
  lineHeights: lineHeights_semantic_default,
  opacity: opacity_semantic_default,
  radii: radii_semantic_default,
  shadows: shadows_semantic_default,
  sizes: sizes_semantic_default,
  spacing: spacing_semantic_default,
  zIndex: zIndex_semantic_default
});
var sigilPreset = definePreset({
  name: "sigil",
  conditions: conditions_theme_default,
  globalCss: globalCss_theme_default,
  theme: {
    extend: {
      ...exports_extensions,
      semanticTokens,
      tokens
    }
  }
});
var panda_default = sigilPreset;
export {
  panda_default as default
};
