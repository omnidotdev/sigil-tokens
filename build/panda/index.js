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

// src/extensions/index.ts
var exports_extensions = {};
__export(exports_extensions, {
  breakpoints: () => breakpoints_theme_default,
  keyframes: () => keyframes_theme_default,
  layerStyles: () => layerStyles_theme_default,
  textStyles: () => textStyles_theme_default
});

// src/panda/index.ts
import { definePreset } from "@pandacss/dev";

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
// src/dtcg/primitives.tokens.json
var primitives_tokens_default = {
  animations: {
    spin: {
      $value: "spin 1s linear infinite"
    },
    ping: {
      $value: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
    },
    pulse: {
      $value: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
    },
    bounce: {
      $value: "bounce 1s infinite"
    },
    "backdrop-in": {
      $value: "fade-in 250ms {easings.emphasized-in}"
    },
    "backdrop-out": {
      $value: "fade-out 200ms {easings.emphasized-out}"
    },
    "dialog-in": {
      $value: "slide-in 400ms {easings.emphasized-in}"
    },
    "dialog-out": {
      $value: "slide-out 200ms {easings.emphasized-out}"
    },
    "drawer-in-left": {
      $value: "slide-in-left 400ms {easings.emphasized-in}"
    },
    "drawer-out-left": {
      $value: "slide-out-left 200ms {easings.emphasized-out}"
    },
    "drawer-in-right": {
      $value: "slide-in-right 400ms {easings.emphasized-in}"
    },
    "drawer-out-right": {
      $value: "slide-out-right 200ms {easings.emphasized-out}"
    },
    "drawer-in-bottom": {
      $value: "slide-in-bottom 400ms {easings.emphasized-in}"
    },
    "drawer-out-bottom": {
      $value: "slide-out-bottom 200ms {easings.emphasized-out}"
    },
    "fade-in": {
      $value: "fade-in 400ms {easings.emphasized-in}"
    },
    "collapse-in": {
      $value: "collapse-in 250ms {easings.emphasized-in}"
    },
    "collapse-out": {
      $value: "collapse-out 200ms {easings.emphasized-out}"
    },
    "skeleton-pulse": {
      $value: "skeleton-pulse 2s {easings.pulse} infinite"
    }
  },
  aspectRatios: {
    "1:1": {
      $value: "1"
    },
    "4:3": {
      $value: "4 / 3"
    },
    "3:4": {
      $value: "3 / 4"
    },
    "16:9": {
      $value: "16 / 9"
    },
    "18:5": {
      $value: "18 / 5"
    },
    "1.618:1": {
      $value: "1.618 / 1"
    }
  },
  assets: {},
  blurs: {
    sm: {
      $value: "4px"
    },
    base: {
      $value: "8px"
    },
    md: {
      $value: "12px"
    },
    lg: {
      $value: "16px"
    },
    xl: {
      $value: "24px"
    },
    "2xl": {
      $value: "40px"
    },
    "3xl": {
      $value: "64px"
    }
  },
  borders: {
    none: {
      $value: "none"
    }
  },
  borderWidths: {},
  colors: {
    omni: {
      amethyst: {
        "50": {
          $value: "#fdf4ff"
        },
        "100": {
          $value: "#fae9fe"
        },
        "200": {
          $value: "#f5d1fd"
        },
        "300": {
          $value: "#f0adfa"
        },
        "400": {
          $value: "#e77cf6"
        },
        "500": {
          $value: "#d84aeb"
        },
        "600": {
          $value: "#bf2acf"
        },
        "700": {
          $value: "#a11fac"
        },
        "800": {
          $value: "#851c8c"
        },
        "900": {
          $value: "#6f1c73"
        },
        "950": {
          $value: "#49064c"
        },
        DEFAULT: {
          $value: "{colors.omni.amethyst.500}"
        },
        "50a": {
          $value: "rgba(253, 244, 255, 0.5)"
        },
        "100a": {
          $value: "rgba(250, 233, 254, 0.1)"
        },
        "200a": {
          $value: "rgba(245, 209, 253, 0.2)"
        },
        "300a": {
          $value: "rgba(240, 173, 250, 0.3)"
        },
        "400a": {
          $value: "rgba(231, 124, 246, 0.4)"
        },
        "500a": {
          $value: "rgba(216, 74, 235, 0.5)"
        },
        "600a": {
          $value: "rgba(191, 42, 207, 0.6)"
        },
        "700a": {
          $value: "rgba(161, 31, 172, 0.7)"
        },
        "800a": {
          $value: "rgba(133, 28, 140, 0.8)"
        },
        "900a": {
          $value: "rgba(111, 28, 115, 0.9)"
        },
        "950a": {
          $value: "rgba(73, 6, 76, 0.95)"
        }
      },
      citrine: {
        "50": {
          $value: "#fcf7ee"
        },
        "100": {
          $value: "#f7eaca"
        },
        "200": {
          $value: "#eed399"
        },
        "300": {
          $value: "#e6b763"
        },
        "400": {
          $value: "#dfa040"
        },
        "500": {
          $value: "#d78129"
        },
        "600": {
          $value: "#be6221"
        },
        "700": {
          $value: "#9e461f"
        },
        "800": {
          $value: "#81381f"
        },
        "900": {
          $value: "#6b2f1c"
        },
        "950": {
          $value: "#3d170b"
        },
        DEFAULT: {
          $value: "{colors.omni.citrine.500}"
        },
        "50a": {
          $value: "rgba(252, 247, 238, 0.5)"
        },
        "100a": {
          $value: "rgba(247, 234, 202, 0.1)"
        },
        "200a": {
          $value: "rgba(238, 211, 153, 0.2)"
        },
        "300a": {
          $value: "rgba(230, 183, 99, 0.3)"
        },
        "400a": {
          $value: "rgba(223, 160, 64, 0.4)"
        },
        "500a": {
          $value: "rgba(215, 129, 41, 0.5)"
        },
        "600a": {
          $value: "rgba(190, 98, 33, 0.6)"
        },
        "700a": {
          $value: "rgba(158, 70, 31, 0.7)"
        },
        "800a": {
          $value: "rgba(129, 56, 31, 0.8)"
        },
        "900a": {
          $value: "rgba(107, 47, 28, 0.9)"
        },
        "950a": {
          $value: "rgba(61, 23, 11, 0.95)"
        }
      },
      emerald: {
        "50": {
          $value: "#effef7"
        },
        "100": {
          $value: "#dafeef"
        },
        "200": {
          $value: "#b8fadd"
        },
        "300": {
          $value: "#81f4c3"
        },
        "400": {
          $value: "#43e5a0"
        },
        "500": {
          $value: "#1acd81"
        },
        "600": {
          $value: "#0fa968"
        },
        "700": {
          $value: "#108554"
        },
        "800": {
          $value: "#126945"
        },
        "900": {
          $value: "#11563a"
        },
        "950": {
          $value: "#03301f"
        },
        DEFAULT: {
          $value: "{colors.omni.emerald.500}"
        },
        "50a": {
          $value: "rgba(239, 254, 247, 0.5)"
        },
        "100a": {
          $value: "rgba(218, 254, 239, 0.1)"
        },
        "200a": {
          $value: "rgba(184, 250, 221, 0.2)"
        },
        "300a": {
          $value: "rgba(129, 244, 195, 0.3)"
        },
        "400a": {
          $value: "rgba(67, 229, 160, 0.4)"
        },
        "500a": {
          $value: "rgba(26, 205, 129, 0.5)"
        },
        "600a": {
          $value: "rgba(15, 169, 104, 0.6)"
        },
        "700a": {
          $value: "rgba(16, 133, 84, 0.7)"
        },
        "800a": {
          $value: "rgba(18, 105, 69, 0.8)"
        },
        "900a": {
          $value: "rgba(17, 86, 58, 0.9)"
        },
        "950a": {
          $value: "rgba(3, 48, 31, 0.95)"
        }
      },
      labradorite: {
        "50": {
          $value: "#effefc"
        },
        "100": {
          $value: "#c7fff9"
        },
        "200": {
          $value: "#8ffff3"
        },
        "300": {
          $value: "#4ff9ed"
        },
        "400": {
          $value: "#1be6de"
        },
        "500": {
          $value: "#02cac5"
        },
        "600": {
          $value: "#00a3a2"
        },
        "700": {
          $value: "#047f81"
        },
        "800": {
          $value: "#096466"
        },
        "900": {
          $value: "#0d5254"
        },
        "950": {
          $value: "#003134"
        },
        DEFAULT: {
          $value: "{colors.omni.labradorite.600}"
        },
        "50a": {
          $value: "rgba(239, 254, 252, 0.5)"
        },
        "100a": {
          $value: "rgba(199, 255, 249, 0.1)"
        },
        "200a": {
          $value: "rgba(143, 255, 243, 0.2)"
        },
        "300a": {
          $value: "rgba(79, 249, 237, 0.3)"
        },
        "400a": {
          $value: "rgba(27, 230, 222, 0.4)"
        },
        "500a": {
          $value: "rgba(2, 202, 197, 0.5)"
        },
        "600a": {
          $value: "rgba(0, 163, 162, 0.6)"
        },
        "700a": {
          $value: "rgba(4, 127, 129, 0.7)"
        },
        "800a": {
          $value: "rgba(9, 100, 102, 0.8)"
        },
        "900a": {
          $value: "rgba(13, 82, 84, 0.9)"
        },
        "950a": {
          $value: "rgba(0, 49, 52, 0.95)"
        }
      },
      ruby: {
        "50": {
          $value: "#fff1f2"
        },
        "100": {
          $value: "#ffe0e3"
        },
        "200": {
          $value: "#ffc6cb"
        },
        "300": {
          $value: "#ff9fa8"
        },
        "400": {
          $value: "#ff6876"
        },
        "500": {
          $value: "#fb384a"
        },
        "600": {
          $value: "#e9192c"
        },
        "700": {
          $value: "#c41122"
        },
        "800": {
          $value: "#a2121f"
        },
        "900": {
          $value: "#861620"
        },
        "950": {
          $value: "#49060c"
        },
        DEFAULT: {
          $value: "{colors.omni.ruby.500}"
        },
        "50a": {
          $value: "rgba(255, 241, 242, 0.5)"
        },
        "100a": {
          $value: "rgba(255, 224, 227, 0.1)"
        },
        "200a": {
          $value: "rgba(255, 198, 203, 0.2)"
        },
        "300a": {
          $value: "rgba(255, 159, 168, 0.3)"
        },
        "400a": {
          $value: "rgba(255, 104, 118, 0.4)"
        },
        "500a": {
          $value: "rgba(251, 56, 74, 0.5)"
        },
        "600a": {
          $value: "rgba(233, 25, 44, 0.6)"
        },
        "700a": {
          $value: "rgba(196, 17, 34, 0.7)"
        },
        "800a": {
          $value: "rgba(162, 18, 31, 0.8)"
        },
        "900a": {
          $value: "rgba(134, 22, 32, 0.9)"
        },
        "950a": {
          $value: "rgba(73, 6, 12, 0.95)"
        }
      },
      sapphire: {
        "50": {
          $value: "#ebf7ff"
        },
        "100": {
          $value: "#d2ecff"
        },
        "200": {
          $value: "#afdfff"
        },
        "300": {
          $value: "#78cdff"
        },
        "400": {
          $value: "#39b0ff"
        },
        "500": {
          $value: "#0c89ff"
        },
        "600": {
          $value: "#0063ff"
        },
        "700": {
          $value: "#004bff"
        },
        "800": {
          $value: "#003dd3"
        },
        "900": {
          $value: "#0339a5"
        },
        "950": {
          $value: "#082567"
        },
        DEFAULT: {
          $value: "{colors.omni.sapphire.500}"
        },
        "50a": {
          $value: "rgba(235, 247, 255, 0.5)"
        },
        "100a": {
          $value: "rgba(210, 236, 255, 0.1)"
        },
        "200a": {
          $value: "rgba(175, 223, 255, 0.2)"
        },
        "300a": {
          $value: "rgba(120, 205, 255, 0.3)"
        },
        "400a": {
          $value: "rgba(57, 176, 255, 0.4)"
        },
        "500a": {
          $value: "rgba(12, 137, 255, 0.5)"
        },
        "600a": {
          $value: "rgba(0, 99, 255, 0.6)"
        },
        "700a": {
          $value: "rgba(0, 75, 255, 0.7)"
        },
        "800a": {
          $value: "rgba(0, 61, 211, 0.8)"
        },
        "900a": {
          $value: "rgba(3, 57, 165, 0.9)"
        },
        "950a": {
          $value: "rgba(8, 37, 103, 0.95)"
        }
      }
    },
    brand: {
      primary: {
        "50": {
          $value: "#effefc"
        },
        "100": {
          $value: "#c7fff9"
        },
        "200": {
          $value: "#8ffff3"
        },
        "300": {
          $value: "#4ff9ed"
        },
        "400": {
          $value: "#1be6de"
        },
        "500": {
          $value: "#02cac5"
        },
        "600": {
          $value: "#00a3a2"
        },
        "700": {
          $value: "#047f81"
        },
        "800": {
          $value: "#096466"
        },
        "900": {
          $value: "#0d5254"
        },
        "950": {
          $value: "#003134"
        },
        DEFAULT: {
          $value: "{colors.omni.labradorite.600}"
        },
        "50a": {
          $value: "rgba(239, 254, 252, 0.5)"
        },
        "100a": {
          $value: "rgba(199, 255, 249, 0.1)"
        },
        "200a": {
          $value: "rgba(143, 255, 243, 0.2)"
        },
        "300a": {
          $value: "rgba(79, 249, 237, 0.3)"
        },
        "400a": {
          $value: "rgba(27, 230, 222, 0.4)"
        },
        "500a": {
          $value: "rgba(2, 202, 197, 0.5)"
        },
        "600a": {
          $value: "rgba(0, 163, 162, 0.6)"
        },
        "700a": {
          $value: "rgba(4, 127, 129, 0.7)"
        },
        "800a": {
          $value: "rgba(9, 100, 102, 0.8)"
        },
        "900a": {
          $value: "rgba(13, 82, 84, 0.9)"
        },
        "950a": {
          $value: "rgba(0, 49, 52, 0.95)"
        }
      },
      secondary: {
        "50": {
          $value: "#fdf4ff"
        },
        "100": {
          $value: "#fae9fe"
        },
        "200": {
          $value: "#f5d1fd"
        },
        "300": {
          $value: "#f0adfa"
        },
        "400": {
          $value: "#e77cf6"
        },
        "500": {
          $value: "#d84aeb"
        },
        "600": {
          $value: "#bf2acf"
        },
        "700": {
          $value: "#a11fac"
        },
        "800": {
          $value: "#851c8c"
        },
        "900": {
          $value: "#6f1c73"
        },
        "950": {
          $value: "#49064c"
        },
        DEFAULT: {
          $value: "{colors.omni.amethyst.500}"
        },
        "50a": {
          $value: "rgba(253, 244, 255, 0.5)"
        },
        "100a": {
          $value: "rgba(250, 233, 254, 0.1)"
        },
        "200a": {
          $value: "rgba(245, 209, 253, 0.2)"
        },
        "300a": {
          $value: "rgba(240, 173, 250, 0.3)"
        },
        "400a": {
          $value: "rgba(231, 124, 246, 0.4)"
        },
        "500a": {
          $value: "rgba(216, 74, 235, 0.5)"
        },
        "600a": {
          $value: "rgba(191, 42, 207, 0.6)"
        },
        "700a": {
          $value: "rgba(161, 31, 172, 0.7)"
        },
        "800a": {
          $value: "rgba(133, 28, 140, 0.8)"
        },
        "900a": {
          $value: "rgba(111, 28, 115, 0.9)"
        },
        "950a": {
          $value: "rgba(73, 6, 76, 0.95)"
        }
      },
      tertiary: {
        "50": {
          $value: "#effef7"
        },
        "100": {
          $value: "#dafeef"
        },
        "200": {
          $value: "#b8fadd"
        },
        "300": {
          $value: "#81f4c3"
        },
        "400": {
          $value: "#43e5a0"
        },
        "500": {
          $value: "#1acd81"
        },
        "600": {
          $value: "#0fa968"
        },
        "700": {
          $value: "#108554"
        },
        "800": {
          $value: "#126945"
        },
        "900": {
          $value: "#11563a"
        },
        "950": {
          $value: "#03301f"
        },
        DEFAULT: {
          $value: "{colors.omni.emerald.500}"
        },
        "50a": {
          $value: "rgba(239, 254, 247, 0.5)"
        },
        "100a": {
          $value: "rgba(218, 254, 239, 0.1)"
        },
        "200a": {
          $value: "rgba(184, 250, 221, 0.2)"
        },
        "300a": {
          $value: "rgba(129, 244, 195, 0.3)"
        },
        "400a": {
          $value: "rgba(67, 229, 160, 0.4)"
        },
        "500a": {
          $value: "rgba(26, 205, 129, 0.5)"
        },
        "600a": {
          $value: "rgba(15, 169, 104, 0.6)"
        },
        "700a": {
          $value: "rgba(16, 133, 84, 0.7)"
        },
        "800a": {
          $value: "rgba(18, 105, 69, 0.8)"
        },
        "900a": {
          $value: "rgba(17, 86, 58, 0.9)"
        },
        "950a": {
          $value: "rgba(3, 48, 31, 0.95)"
        }
      },
      quaternary: {
        "50": {
          $value: "#fcf7ee"
        },
        "100": {
          $value: "#f7eaca"
        },
        "200": {
          $value: "#eed399"
        },
        "300": {
          $value: "#e6b763"
        },
        "400": {
          $value: "#dfa040"
        },
        "500": {
          $value: "#d78129"
        },
        "600": {
          $value: "#be6221"
        },
        "700": {
          $value: "#9e461f"
        },
        "800": {
          $value: "#81381f"
        },
        "900": {
          $value: "#6b2f1c"
        },
        "950": {
          $value: "#3d170b"
        },
        DEFAULT: {
          $value: "{colors.omni.citrine.500}"
        },
        "50a": {
          $value: "rgba(252, 247, 238, 0.5)"
        },
        "100a": {
          $value: "rgba(247, 234, 202, 0.1)"
        },
        "200a": {
          $value: "rgba(238, 211, 153, 0.2)"
        },
        "300a": {
          $value: "rgba(230, 183, 99, 0.3)"
        },
        "400a": {
          $value: "rgba(223, 160, 64, 0.4)"
        },
        "500a": {
          $value: "rgba(215, 129, 41, 0.5)"
        },
        "600a": {
          $value: "rgba(190, 98, 33, 0.6)"
        },
        "700a": {
          $value: "rgba(158, 70, 31, 0.7)"
        },
        "800a": {
          $value: "rgba(129, 56, 31, 0.8)"
        },
        "900a": {
          $value: "rgba(107, 47, 28, 0.9)"
        },
        "950a": {
          $value: "rgba(61, 23, 11, 0.95)"
        }
      },
      quinary: {
        "50": {
          $value: "#fff1f2"
        },
        "100": {
          $value: "#ffe0e3"
        },
        "200": {
          $value: "#ffc6cb"
        },
        "300": {
          $value: "#ff9fa8"
        },
        "400": {
          $value: "#ff6876"
        },
        "500": {
          $value: "#fb384a"
        },
        "600": {
          $value: "#e9192c"
        },
        "700": {
          $value: "#c41122"
        },
        "800": {
          $value: "#a2121f"
        },
        "900": {
          $value: "#861620"
        },
        "950": {
          $value: "#49060c"
        },
        DEFAULT: {
          $value: "{colors.omni.ruby.500}"
        },
        "50a": {
          $value: "rgba(255, 241, 242, 0.5)"
        },
        "100a": {
          $value: "rgba(255, 224, 227, 0.1)"
        },
        "200a": {
          $value: "rgba(255, 198, 203, 0.2)"
        },
        "300a": {
          $value: "rgba(255, 159, 168, 0.3)"
        },
        "400a": {
          $value: "rgba(255, 104, 118, 0.4)"
        },
        "500a": {
          $value: "rgba(251, 56, 74, 0.5)"
        },
        "600a": {
          $value: "rgba(233, 25, 44, 0.6)"
        },
        "700a": {
          $value: "rgba(196, 17, 34, 0.7)"
        },
        "800a": {
          $value: "rgba(162, 18, 31, 0.8)"
        },
        "900a": {
          $value: "rgba(134, 22, 32, 0.9)"
        },
        "950a": {
          $value: "rgba(73, 6, 12, 0.95)"
        }
      },
      senary: {
        "50": {
          $value: "#ebf7ff"
        },
        "100": {
          $value: "#d2ecff"
        },
        "200": {
          $value: "#afdfff"
        },
        "300": {
          $value: "#78cdff"
        },
        "400": {
          $value: "#39b0ff"
        },
        "500": {
          $value: "#0c89ff"
        },
        "600": {
          $value: "#0063ff"
        },
        "700": {
          $value: "#004bff"
        },
        "800": {
          $value: "#003dd3"
        },
        "900": {
          $value: "#0339a5"
        },
        "950": {
          $value: "#082567"
        },
        DEFAULT: {
          $value: "{colors.omni.sapphire.500}"
        },
        "50a": {
          $value: "rgba(235, 247, 255, 0.5)"
        },
        "100a": {
          $value: "rgba(210, 236, 255, 0.1)"
        },
        "200a": {
          $value: "rgba(175, 223, 255, 0.2)"
        },
        "300a": {
          $value: "rgba(120, 205, 255, 0.3)"
        },
        "400a": {
          $value: "rgba(57, 176, 255, 0.4)"
        },
        "500a": {
          $value: "rgba(12, 137, 255, 0.5)"
        },
        "600a": {
          $value: "rgba(0, 99, 255, 0.6)"
        },
        "700a": {
          $value: "rgba(0, 75, 255, 0.7)"
        },
        "800a": {
          $value: "rgba(0, 61, 211, 0.8)"
        },
        "900a": {
          $value: "rgba(3, 57, 165, 0.9)"
        },
        "950a": {
          $value: "rgba(8, 37, 103, 0.95)"
        }
      }
    },
    current: {
      $value: "currentColor"
    },
    transparent: {
      $value: "rgb(0 0 0 / 0)"
    },
    black: {
      DEFAULT: {
        $value: "#000000"
      },
      "50a": {
        $value: "rgba(0, 0, 0, 0.05)"
      },
      "100a": {
        $value: "rgba(0, 0, 0, 0.1)"
      },
      "150a": {
        $value: "rgba(0, 0, 0, 0.15)"
      },
      "200a": {
        $value: "rgba(0, 0, 0, 0.2)"
      },
      "300a": {
        $value: "rgba(0, 0, 0, 0.3)"
      },
      "400a": {
        $value: "rgba(0, 0, 0, 0.4)"
      },
      "500a": {
        $value: "rgba(0, 0, 0, 0.5)"
      },
      "600a": {
        $value: "rgba(0, 0, 0, 0.6)"
      },
      "700a": {
        $value: "rgba(0, 0, 0, 0.7)"
      },
      "800a": {
        $value: "rgba(0, 0, 0, 0.8)"
      },
      "900a": {
        $value: "rgba(0, 0, 0, 0.9)"
      },
      "950a": {
        $value: "rgba(0, 0, 0, 0.95)"
      }
    },
    white: {
      DEFAULT: {
        $value: "#ffffff"
      },
      "50a": {
        $value: "rgba(255, 255, 255, 0.05)"
      },
      "100a": {
        $value: "rgba(255, 255, 255, 0.1)"
      },
      "150a": {
        $value: "rgba(255, 255, 255, 0.15)"
      },
      "200a": {
        $value: "rgba(255, 255, 255, 0.2)"
      },
      "300a": {
        $value: "rgba(255, 255, 255, 0.3)"
      },
      "400a": {
        $value: "rgba(255, 255, 255, 0.4)"
      },
      "500a": {
        $value: "rgba(255, 255, 255, 0.5)"
      },
      "600a": {
        $value: "rgba(255, 255, 255, 0.6)"
      },
      "700a": {
        $value: "rgba(255, 255, 255, 0.7)"
      },
      "800a": {
        $value: "rgba(255, 255, 255, 0.8)"
      },
      "900a": {
        $value: "rgba(255, 255, 255, 0.9)"
      },
      "950a": {
        $value: "rgba(255, 255, 255, 0.95)"
      }
    },
    rose: {
      "50": {
        $value: "#fff1f2"
      },
      "100": {
        $value: "#ffe4e6"
      },
      "200": {
        $value: "#fecdd3"
      },
      "300": {
        $value: "#fda4af"
      },
      "400": {
        $value: "#fb7185"
      },
      "500": {
        $value: "#f43f5e"
      },
      "600": {
        $value: "#e11d48"
      },
      "700": {
        $value: "#be123c"
      },
      "800": {
        $value: "#9f1239"
      },
      "900": {
        $value: "#881337"
      },
      "950": {
        $value: "#4c0519"
      },
      DEFAULT: {
        $value: "{colors.rose.500}"
      },
      "50a": {
        $value: "rgba(255, 241, 242, 0.5)"
      },
      "100a": {
        $value: "rgba(255, 228, 230, 0.1)"
      },
      "200a": {
        $value: "rgba(254, 205, 211, 0.2)"
      },
      "300a": {
        $value: "rgba(253, 164, 175, 0.3)"
      },
      "400a": {
        $value: "rgba(251, 113, 133, 0.4)"
      },
      "500a": {
        $value: "rgba(244, 63, 94, 0.5)"
      },
      "600a": {
        $value: "rgba(225, 29, 72, 0.6)"
      },
      "700a": {
        $value: "rgba(190, 18, 60, 0.7)"
      },
      "800a": {
        $value: "rgba(159, 18, 57, 0.8)"
      },
      "900a": {
        $value: "rgba(136, 19, 55, 0.9)"
      },
      "950a": {
        $value: "rgba(76, 5, 25, 0.95)"
      }
    },
    "dusty-rose": {
      "50": {
        $value: "#faf5f8"
      },
      "100": {
        $value: "#f6edf2"
      },
      "200": {
        $value: "#eedce7"
      },
      "300": {
        $value: "#e1c0d3"
      },
      "400": {
        $value: "#cd99b6"
      },
      "500": {
        $value: "#ba7a9c"
      },
      "600": {
        $value: "#aa6787"
      },
      "700": {
        $value: "#8c4a67"
      },
      "800": {
        $value: "#753f57"
      },
      "900": {
        $value: "#63384a"
      },
      "950": {
        $value: "#3a1d2a"
      },
      DEFAULT: {
        $value: "{colors.dusty-rose.500}"
      },
      "50a": {
        $value: "rgba(250, 245, 248, 0.5)"
      },
      "100a": {
        $value: "rgba(246, 237, 242, 0.1)"
      },
      "200a": {
        $value: "rgba(238, 220, 231, 0.2)"
      },
      "300a": {
        $value: "rgba(225, 192, 211, 0.3)"
      },
      "400a": {
        $value: "rgba(205, 153, 182, 0.4)"
      },
      "500a": {
        $value: "rgba(186, 122, 156, 0.5)"
      },
      "600a": {
        $value: "rgba(170, 103, 135, 0.6)"
      },
      "700a": {
        $value: "rgba(140, 74, 103, 0.7)"
      },
      "800a": {
        $value: "rgba(117, 63, 87, 0.8)"
      },
      "900a": {
        $value: "rgba(99, 56, 74, 0.9)"
      },
      "950a": {
        $value: "rgba(58, 29, 42, 0.95)"
      }
    },
    pink: {
      "50": {
        $value: "#fdf2f8"
      },
      "100": {
        $value: "#fce7f3"
      },
      "200": {
        $value: "#fbcfe8"
      },
      "300": {
        $value: "#f9a8d4"
      },
      "400": {
        $value: "#f472b6"
      },
      "500": {
        $value: "#ec4899"
      },
      "600": {
        $value: "#db2777"
      },
      "700": {
        $value: "#be185d"
      },
      "800": {
        $value: "#9d174d"
      },
      "900": {
        $value: "#831843"
      },
      "950": {
        $value: "#500724"
      },
      DEFAULT: {
        $value: "{colors.pink.500}"
      },
      "50a": {
        $value: "rgba(253, 242, 248, 0.5)"
      },
      "100a": {
        $value: "rgba(252, 231, 243, 0.1)"
      },
      "200a": {
        $value: "rgba(251, 207, 232, 0.2)"
      },
      "300a": {
        $value: "rgba(249, 168, 212, 0.3)"
      },
      "400a": {
        $value: "rgba(244, 114, 182, 0.4)"
      },
      "500a": {
        $value: "rgba(236, 72, 153, 0.5)"
      },
      "600a": {
        $value: "rgba(219, 39, 119, 0.6)"
      },
      "700a": {
        $value: "rgba(190, 24, 93, 0.7)"
      },
      "800a": {
        $value: "rgba(157, 23, 77, 0.8)"
      },
      "900a": {
        $value: "rgba(131, 24, 67, 0.9)"
      },
      "950a": {
        $value: "rgba(80, 7, 36, 0.95)"
      }
    },
    fuchsia: {
      "50": {
        $value: "#fdf4ff"
      },
      "100": {
        $value: "#fae8ff"
      },
      "200": {
        $value: "#f5d0fe"
      },
      "300": {
        $value: "#f0abfc"
      },
      "400": {
        $value: "#e879f9"
      },
      "500": {
        $value: "#d946ef"
      },
      "600": {
        $value: "#c026d3"
      },
      "700": {
        $value: "#a21caf"
      },
      "800": {
        $value: "#86198f"
      },
      "900": {
        $value: "#701a75"
      },
      "950": {
        $value: "#4a044e"
      },
      DEFAULT: {
        $value: "{colors.fuchsia.500}"
      },
      "50a": {
        $value: "rgba(253, 244, 255, 0.5)"
      },
      "100a": {
        $value: "rgba(250, 232, 255, 0.1)"
      },
      "200a": {
        $value: "rgba(245, 208, 254, 0.2)"
      },
      "300a": {
        $value: "rgba(240, 171, 252, 0.3)"
      },
      "400a": {
        $value: "rgba(232, 121, 249, 0.4)"
      },
      "500a": {
        $value: "rgba(217, 70, 239, 0.5)"
      },
      "600a": {
        $value: "rgba(192, 38, 211, 0.6)"
      },
      "700a": {
        $value: "rgba(162, 28, 175, 0.7)"
      },
      "800a": {
        $value: "rgba(134, 25, 143, 0.8)"
      },
      "900a": {
        $value: "rgba(112, 26, 117, 0.9)"
      },
      "950a": {
        $value: "rgba(74, 4, 78, 0.95)"
      }
    },
    purple: {
      "50": {
        $value: "#faf5ff"
      },
      "100": {
        $value: "#f3e8ff"
      },
      "200": {
        $value: "#e9d5ff"
      },
      "300": {
        $value: "#d8b4fe"
      },
      "400": {
        $value: "#c084fc"
      },
      "500": {
        $value: "#a855f7"
      },
      "600": {
        $value: "#9333ea"
      },
      "700": {
        $value: "#7e22ce"
      },
      "800": {
        $value: "#6b21a8"
      },
      "900": {
        $value: "#581c87"
      },
      "950": {
        $value: "#3b0764"
      },
      DEFAULT: {
        $value: "{colors.purple.500}"
      },
      "50a": {
        $value: "rgba(250, 245, 255, 0.5)"
      },
      "100a": {
        $value: "rgba(243, 232, 255, 0.1)"
      },
      "200a": {
        $value: "rgba(233, 213, 255, 0.2)"
      },
      "300a": {
        $value: "rgba(216, 180, 254, 0.3)"
      },
      "400a": {
        $value: "rgba(192, 132, 252, 0.4)"
      },
      "500a": {
        $value: "rgba(168, 85, 247, 0.5)"
      },
      "600a": {
        $value: "rgba(147, 51, 234, 0.6)"
      },
      "700a": {
        $value: "rgba(126, 34, 206, 0.7)"
      },
      "800a": {
        $value: "rgba(107, 33, 168, 0.8)"
      },
      "900a": {
        $value: "rgba(88, 28, 135, 0.9)"
      },
      "950a": {
        $value: "rgba(59, 7, 100, 0.95)"
      }
    },
    violet: {
      "50": {
        $value: "#f5f3ff"
      },
      "100": {
        $value: "#ede9fe"
      },
      "200": {
        $value: "#ddd6fe"
      },
      "300": {
        $value: "#c4b5fd"
      },
      "400": {
        $value: "#a78bfa"
      },
      "500": {
        $value: "#8b5cf6"
      },
      "600": {
        $value: "#7c3aed"
      },
      "700": {
        $value: "#6d28d9"
      },
      "800": {
        $value: "#5b21b6"
      },
      "900": {
        $value: "#4c1d95"
      },
      "950": {
        $value: "#2e1065"
      },
      DEFAULT: {
        $value: "{colors.violet.500}"
      },
      "50a": {
        $value: "rgba(245, 243, 255, 0.5)"
      },
      "100a": {
        $value: "rgba(237, 233, 254, 0.1)"
      },
      "200a": {
        $value: "rgba(221, 214, 254, 0.2)"
      },
      "300a": {
        $value: "rgba(196, 181, 253, 0.3)"
      },
      "400a": {
        $value: "rgba(167, 139, 250, 0.4)"
      },
      "500a": {
        $value: "rgba(139, 92, 246, 0.5)"
      },
      "600a": {
        $value: "rgba(124, 58, 237, 0.6)"
      },
      "700a": {
        $value: "rgba(109, 40, 217, 0.7)"
      },
      "800a": {
        $value: "rgba(91, 33, 182, 0.8)"
      },
      "900a": {
        $value: "rgba(76, 29, 149, 0.9)"
      },
      "950a": {
        $value: "rgba(46, 16, 101, 0.95)"
      }
    },
    indigo: {
      "50": {
        $value: "#eef2ff"
      },
      "100": {
        $value: "#e0e7ff"
      },
      "200": {
        $value: "#c7d2fe"
      },
      "300": {
        $value: "#a5b4fc"
      },
      "400": {
        $value: "#818cf8"
      },
      "500": {
        $value: "#6366f1"
      },
      "600": {
        $value: "#4f46e5"
      },
      "700": {
        $value: "#4338ca"
      },
      "800": {
        $value: "#3730a3"
      },
      "900": {
        $value: "#312e81"
      },
      "950": {
        $value: "#1e1b4b"
      },
      DEFAULT: {
        $value: "{colors.indigo.500}"
      },
      "50a": {
        $value: "rgba(238, 242, 255, 0.5)"
      },
      "100a": {
        $value: "rgba(224, 231, 255, 0.1)"
      },
      "200a": {
        $value: "rgba(199, 210, 254, 0.2)"
      },
      "300a": {
        $value: "rgba(165, 180, 252, 0.3)"
      },
      "400a": {
        $value: "rgba(129, 140, 248, 0.4)"
      },
      "500a": {
        $value: "rgba(99, 102, 241, 0.5)"
      },
      "600a": {
        $value: "rgba(79, 70, 229, 0.6)"
      },
      "700a": {
        $value: "rgba(67, 56, 202, 0.7)"
      },
      "800a": {
        $value: "rgba(55, 48, 163, 0.8)"
      },
      "900a": {
        $value: "rgba(49, 46, 129, 0.9)"
      },
      "950a": {
        $value: "rgba(30, 27, 75, 0.95)"
      }
    },
    blue: {
      "50": {
        $value: "#eff6ff"
      },
      "100": {
        $value: "#dbeafe"
      },
      "200": {
        $value: "#bfdbfe"
      },
      "300": {
        $value: "#93c5fd"
      },
      "400": {
        $value: "#60a5fa"
      },
      "500": {
        $value: "#3b82f6"
      },
      "600": {
        $value: "#2563eb"
      },
      "700": {
        $value: "#1d4ed8"
      },
      "800": {
        $value: "#1e40af"
      },
      "900": {
        $value: "#1e3a8a"
      },
      "950": {
        $value: "#172554"
      },
      DEFAULT: {
        $value: "{colors.blue.500}"
      },
      "50a": {
        $value: "rgba(239, 246, 255, 0.5)"
      },
      "100a": {
        $value: "rgba(219, 234, 254, 0.1)"
      },
      "200a": {
        $value: "rgba(191, 219, 254, 0.2)"
      },
      "300a": {
        $value: "rgba(147, 197, 253, 0.3)"
      },
      "400a": {
        $value: "rgba(96, 165, 250, 0.4)"
      },
      "500a": {
        $value: "rgba(59, 130, 246, 0.5)"
      },
      "600a": {
        $value: "rgba(37, 99, 235, 0.6)"
      },
      "700a": {
        $value: "rgba(29, 78, 216, 0.7)"
      },
      "800a": {
        $value: "rgba(30, 64, 175, 0.8)"
      },
      "900a": {
        $value: "rgba(30, 58, 138, 0.9)"
      },
      "950a": {
        $value: "rgba(23, 37, 84, 0.95)"
      }
    },
    sky: {
      "50": {
        $value: "#f0f9ff"
      },
      "100": {
        $value: "#e0f2fe"
      },
      "200": {
        $value: "#bae6fd"
      },
      "300": {
        $value: "#7dd3fc"
      },
      "400": {
        $value: "#38bdf8"
      },
      "500": {
        $value: "#0ea5e9"
      },
      "600": {
        $value: "#0284c7"
      },
      "700": {
        $value: "#0369a1"
      },
      "800": {
        $value: "#075985"
      },
      "900": {
        $value: "#0c4a6e"
      },
      "950": {
        $value: "#082f49"
      },
      DEFAULT: {
        $value: "{colors.sky.500}"
      },
      "50a": {
        $value: "rgba(240, 249, 255, 0.5)"
      },
      "100a": {
        $value: "rgba(224, 242, 254, 0.1)"
      },
      "200a": {
        $value: "rgba(186, 230, 253, 0.2)"
      },
      "300a": {
        $value: "rgba(125, 211, 252, 0.3)"
      },
      "400a": {
        $value: "rgba(56, 189, 248, 0.4)"
      },
      "500a": {
        $value: "rgba(14, 165, 233, 0.5)"
      },
      "600a": {
        $value: "rgba(2, 132, 199, 0.6)"
      },
      "700a": {
        $value: "rgba(3, 105, 161, 0.7)"
      },
      "800a": {
        $value: "rgba(7, 89, 133, 0.8)"
      },
      "900a": {
        $value: "rgba(12, 74, 110, 0.9)"
      },
      "950a": {
        $value: "rgba(8, 47, 73, 0.95)"
      }
    },
    cyan: {
      "50": {
        $value: "#ecfeff"
      },
      "100": {
        $value: "#cffafe"
      },
      "200": {
        $value: "#a5f3fc"
      },
      "300": {
        $value: "#67e8f9"
      },
      "400": {
        $value: "#22d3ee"
      },
      "500": {
        $value: "#06b6d4"
      },
      "600": {
        $value: "#0891b2"
      },
      "700": {
        $value: "#0e7490"
      },
      "800": {
        $value: "#155e75"
      },
      "900": {
        $value: "#164e63"
      },
      "950": {
        $value: "#083344"
      },
      DEFAULT: {
        $value: "{colors.cyan.500}"
      },
      "50a": {
        $value: "rgba(236, 254, 255, 0.5)"
      },
      "100a": {
        $value: "rgba(207, 250, 254, 0.1)"
      },
      "200a": {
        $value: "rgba(165, 243, 252, 0.2)"
      },
      "300a": {
        $value: "rgba(103, 232, 249, 0.3)"
      },
      "400a": {
        $value: "rgba(34, 211, 238, 0.4)"
      },
      "500a": {
        $value: "rgba(6, 182, 212, 0.5)"
      },
      "600a": {
        $value: "rgba(8, 145, 178, 0.6)"
      },
      "700a": {
        $value: "rgba(14, 116, 144, 0.7)"
      },
      "800a": {
        $value: "rgba(21, 94, 117, 0.8)"
      },
      "900a": {
        $value: "rgba(22, 78, 99, 0.9)"
      },
      "950a": {
        $value: "rgba(8, 51, 68, 0.95)"
      }
    },
    teal: {
      "50": {
        $value: "#f0fdfa"
      },
      "100": {
        $value: "#ccfbf1"
      },
      "200": {
        $value: "#99f6e4"
      },
      "300": {
        $value: "#5eead4"
      },
      "400": {
        $value: "#2dd4bf"
      },
      "500": {
        $value: "#14b8a6"
      },
      "600": {
        $value: "#0d9488"
      },
      "700": {
        $value: "#0f766e"
      },
      "800": {
        $value: "#115e59"
      },
      "900": {
        $value: "#134e4a"
      },
      "950": {
        $value: "#042f2e"
      },
      DEFAULT: {
        $value: "{colors.teal.500}"
      },
      "50a": {
        $value: "rgba(240, 253, 250, 0.5)"
      },
      "100a": {
        $value: "rgba(204, 251, 241, 0.1)"
      },
      "200a": {
        $value: "rgba(153, 246, 228, 0.2)"
      },
      "300a": {
        $value: "rgba(94, 234, 212, 0.3)"
      },
      "400a": {
        $value: "rgba(45, 212, 191, 0.4)"
      },
      "500a": {
        $value: "rgba(20, 184, 166, 0.5)"
      },
      "600a": {
        $value: "rgba(13, 148, 136, 0.6)"
      },
      "700a": {
        $value: "rgba(15, 118, 110, 0.7)"
      },
      "800a": {
        $value: "rgba(17, 94, 89, 0.8)"
      },
      "900a": {
        $value: "rgba(19, 78, 74, 0.9)"
      },
      "950a": {
        $value: "rgba(4, 47, 46, 0.95)"
      }
    },
    emerald: {
      "50": {
        $value: "#ecfdf5"
      },
      "100": {
        $value: "#d1fae5"
      },
      "200": {
        $value: "#a7f3d0"
      },
      "300": {
        $value: "#6ee7b7"
      },
      "400": {
        $value: "#34d399"
      },
      "500": {
        $value: "#10b981"
      },
      "600": {
        $value: "#059669"
      },
      "700": {
        $value: "#047857"
      },
      "800": {
        $value: "#065f46"
      },
      "900": {
        $value: "#064e3b"
      },
      "950": {
        $value: "#022c22"
      },
      DEFAULT: {
        $value: "{colors.emerald.500}"
      },
      "50a": {
        $value: "rgba(236, 253, 245, 0.5)"
      },
      "100a": {
        $value: "rgba(209, 250, 229, 0.1)"
      },
      "200a": {
        $value: "rgba(167, 243, 208, 0.2)"
      },
      "300a": {
        $value: "rgba(110, 231, 183, 0.3)"
      },
      "400a": {
        $value: "rgba(52, 211, 153, 0.4)"
      },
      "500a": {
        $value: "rgba(16, 185, 129, 0.5)"
      },
      "600a": {
        $value: "rgba(5, 150, 105, 0.6)"
      },
      "700a": {
        $value: "rgba(4, 120, 87, 0.7)"
      },
      "800a": {
        $value: "rgba(6, 95, 70, 0.8)"
      },
      "900a": {
        $value: "rgba(6, 78, 59, 0.9)"
      },
      "950a": {
        $value: "rgba(2, 44, 34, 0.95)"
      }
    },
    green: {
      "50": {
        $value: "#f0fdf4"
      },
      "100": {
        $value: "#dcfce7"
      },
      "200": {
        $value: "#bbf7d0"
      },
      "300": {
        $value: "#86efac"
      },
      "400": {
        $value: "#4ade80"
      },
      "500": {
        $value: "#22c55e"
      },
      "600": {
        $value: "#16a34a"
      },
      "700": {
        $value: "#15803d"
      },
      "800": {
        $value: "#166534"
      },
      "900": {
        $value: "#14532d"
      },
      "950": {
        $value: "#052e16"
      },
      DEFAULT: {
        $value: "{colors.green.500}"
      },
      "50a": {
        $value: "rgba(240, 253, 244, 0.5)"
      },
      "100a": {
        $value: "rgba(220, 252, 231, 0.1)"
      },
      "200a": {
        $value: "rgba(187, 247, 208, 0.2)"
      },
      "300a": {
        $value: "rgba(134, 239, 172, 0.3)"
      },
      "400a": {
        $value: "rgba(74, 222, 128, 0.4)"
      },
      "500a": {
        $value: "rgba(34, 197, 94, 0.5)"
      },
      "600a": {
        $value: "rgba(22, 163, 74, 0.6)"
      },
      "700a": {
        $value: "rgba(21, 128, 61, 0.7)"
      },
      "800a": {
        $value: "rgba(22, 101, 52, 0.8)"
      },
      "900a": {
        $value: "rgba(20, 83, 45, 0.9)"
      },
      "950a": {
        $value: "rgba(5, 46, 22, 0.95)"
      }
    },
    lime: {
      "50": {
        $value: "#f7fee7"
      },
      "100": {
        $value: "#ecfccb"
      },
      "200": {
        $value: "#d9f99d"
      },
      "300": {
        $value: "#bef264"
      },
      "400": {
        $value: "#a3e635"
      },
      "500": {
        $value: "#84cc16"
      },
      "600": {
        $value: "#65a30d"
      },
      "700": {
        $value: "#4d7c0f"
      },
      "800": {
        $value: "#3f6212"
      },
      "900": {
        $value: "#365314"
      },
      "950": {
        $value: "#1a2e05"
      },
      DEFAULT: {
        $value: "{colors.lime.500}"
      },
      "50a": {
        $value: "rgba(247, 254, 231, 0.5)"
      },
      "100a": {
        $value: "rgba(236, 252, 203, 0.1)"
      },
      "200a": {
        $value: "rgba(217, 249, 157, 0.2)"
      },
      "300a": {
        $value: "rgba(190, 242, 100, 0.3)"
      },
      "400a": {
        $value: "rgba(163, 230, 53, 0.4)"
      },
      "500a": {
        $value: "rgba(132, 204, 22, 0.5)"
      },
      "600a": {
        $value: "rgba(101, 163, 13, 0.6)"
      },
      "700a": {
        $value: "rgba(77, 124, 15, 0.7)"
      },
      "800a": {
        $value: "rgba(63, 98, 18, 0.8)"
      },
      "900a": {
        $value: "rgba(54, 83, 20, 0.9)"
      },
      "950a": {
        $value: "rgba(26, 46, 5, 0.95)"
      }
    },
    yellow: {
      "50": {
        $value: "#fefce8"
      },
      "100": {
        $value: "#fef9c3"
      },
      "200": {
        $value: "#fef08a"
      },
      "300": {
        $value: "#fde047"
      },
      "400": {
        $value: "#facc15"
      },
      "500": {
        $value: "#eab308"
      },
      "600": {
        $value: "#ca8a04"
      },
      "700": {
        $value: "#a16207"
      },
      "800": {
        $value: "#854d0e"
      },
      "900": {
        $value: "#713f12"
      },
      "950": {
        $value: "#422006"
      },
      DEFAULT: {
        $value: "{colors.yellow.500}"
      },
      "50a": {
        $value: "rgba(254, 252, 232, 0.5)"
      },
      "100a": {
        $value: "rgba(254, 249, 195, 0.1)"
      },
      "200a": {
        $value: "rgba(254, 240, 138, 0.2)"
      },
      "300a": {
        $value: "rgba(253, 224, 71, 0.3)"
      },
      "400a": {
        $value: "rgba(250, 204, 21, 0.4)"
      },
      "500a": {
        $value: "rgba(234, 179, 8, 0.5)"
      },
      "600a": {
        $value: "rgba(202, 138, 4, 0.6)"
      },
      "700a": {
        $value: "rgba(161, 98, 7, 0.7)"
      },
      "800a": {
        $value: "rgba(133, 77, 14, 0.8)"
      },
      "900a": {
        $value: "rgba(113, 63, 18, 0.9)"
      },
      "950a": {
        $value: "rgba(66, 32, 6, 0.95)"
      }
    },
    amber: {
      "50": {
        $value: "#fffbeb"
      },
      "100": {
        $value: "#fef3c7"
      },
      "200": {
        $value: "#fde68a"
      },
      "300": {
        $value: "#fcd34d"
      },
      "400": {
        $value: "#fbbf24"
      },
      "500": {
        $value: "#f59e0b"
      },
      "600": {
        $value: "#d97706"
      },
      "700": {
        $value: "#b45309"
      },
      "800": {
        $value: "#92400e"
      },
      "900": {
        $value: "#78350f"
      },
      "950": {
        $value: "#451a03"
      },
      DEFAULT: {
        $value: "{colors.amber.500}"
      },
      "50a": {
        $value: "rgba(255, 251, 235, 0.5)"
      },
      "100a": {
        $value: "rgba(254, 243, 199, 0.1)"
      },
      "200a": {
        $value: "rgba(253, 230, 138, 0.2)"
      },
      "300a": {
        $value: "rgba(252, 211, 77, 0.3)"
      },
      "400a": {
        $value: "rgba(251, 191, 36, 0.4)"
      },
      "500a": {
        $value: "rgba(245, 158, 11, 0.5)"
      },
      "600a": {
        $value: "rgba(217, 119, 6, 0.6)"
      },
      "700a": {
        $value: "rgba(180, 83, 9, 0.7)"
      },
      "800a": {
        $value: "rgba(146, 64, 14, 0.8)"
      },
      "900a": {
        $value: "rgba(120, 53, 15, 0.9)"
      },
      "950a": {
        $value: "rgba(69, 26, 3, 0.95)"
      }
    },
    orange: {
      "50": {
        $value: "#fff7ed"
      },
      "100": {
        $value: "#ffedd5"
      },
      "200": {
        $value: "#fed7aa"
      },
      "300": {
        $value: "#fdba74"
      },
      "400": {
        $value: "#fb923c"
      },
      "500": {
        $value: "#f97316"
      },
      "600": {
        $value: "#ea580c"
      },
      "700": {
        $value: "#c2410c"
      },
      "800": {
        $value: "#9a3412"
      },
      "900": {
        $value: "#7c2d12"
      },
      "950": {
        $value: "#431407"
      },
      DEFAULT: {
        $value: "{colors.orange.500}"
      },
      "50a": {
        $value: "rgba(255, 247, 237, 0.5)"
      },
      "100a": {
        $value: "rgba(255, 237, 213, 0.1)"
      },
      "200a": {
        $value: "rgba(254, 215, 170, 0.2)"
      },
      "300a": {
        $value: "rgba(253, 186, 116, 0.3)"
      },
      "400a": {
        $value: "rgba(251, 146, 60, 0.4)"
      },
      "500a": {
        $value: "rgba(249, 115, 22, 0.5)"
      },
      "600a": {
        $value: "rgba(234, 88, 12, 0.6)"
      },
      "700a": {
        $value: "rgba(194, 65, 12, 0.7)"
      },
      "800a": {
        $value: "rgba(154, 52, 18, 0.8)"
      },
      "900a": {
        $value: "rgba(124, 45, 18, 0.9)"
      },
      "950a": {
        $value: "rgba(67, 20, 7, 0.95)"
      }
    },
    red: {
      "50": {
        $value: "#fef2f2"
      },
      "100": {
        $value: "#fee2e2"
      },
      "200": {
        $value: "#fecaca"
      },
      "300": {
        $value: "#fca5a5"
      },
      "400": {
        $value: "#f87171"
      },
      "500": {
        $value: "#ef4444"
      },
      "600": {
        $value: "#dc2626"
      },
      "700": {
        $value: "#b91c1c"
      },
      "800": {
        $value: "#991b1b"
      },
      "900": {
        $value: "#7f1d1d"
      },
      "950": {
        $value: "#450a0a"
      },
      DEFAULT: {
        $value: "{colors.red.500}"
      },
      "50a": {
        $value: "rgba(254, 242, 242, 0.5)"
      },
      "100a": {
        $value: "rgba(254, 226, 226, 0.1)"
      },
      "200a": {
        $value: "rgba(254, 202, 202, 0.2)"
      },
      "300a": {
        $value: "rgba(252, 165, 165, 0.3)"
      },
      "400a": {
        $value: "rgba(248, 113, 113, 0.4)"
      },
      "500a": {
        $value: "rgba(239, 68, 68, 0.5)"
      },
      "600a": {
        $value: "rgba(220, 38, 38, 0.6)"
      },
      "700a": {
        $value: "rgba(185, 28, 28, 0.7)"
      },
      "800a": {
        $value: "rgba(153, 27, 27, 0.8)"
      },
      "900a": {
        $value: "rgba(127, 29, 29, 0.9)"
      },
      "950a": {
        $value: "rgba(69, 10, 10, 0.95)"
      }
    },
    bronze: {
      "50": {
        $value: "#f7f6ef"
      },
      "100": {
        $value: "#ece8d5"
      },
      "200": {
        $value: "#dbd1ad"
      },
      "300": {
        $value: "#c6b37e"
      },
      "400": {
        $value: "#b49a5b"
      },
      "500": {
        $value: "#a5884d"
      },
      "600": {
        $value: "#967444"
      },
      "700": {
        $value: "#725436"
      },
      "800": {
        $value: "#614732"
      },
      "900": {
        $value: "#543e2f"
      },
      "950": {
        $value: "#302018"
      },
      DEFAULT: {
        $value: "{colors.bronze.500}"
      },
      "50a": {
        $value: "rgba(247, 246, 239, 0.5)"
      },
      "100a": {
        $value: "rgba(236, 232, 213, 0.1)"
      },
      "200a": {
        $value: "rgba(219, 209, 173, 0.2)"
      },
      "300a": {
        $value: "rgba(198, 179, 126, 0.3)"
      },
      "400a": {
        $value: "rgba(180, 154, 91, 0.4)"
      },
      "500a": {
        $value: "rgba(165, 136, 77, 0.5)"
      },
      "600a": {
        $value: "rgba(150, 116, 68, 0.6)"
      },
      "700a": {
        $value: "rgba(114, 84, 54, 0.7)"
      },
      "800a": {
        $value: "rgba(97, 71, 50, 0.8)"
      },
      "900a": {
        $value: "rgba(84, 62, 47, 0.9)"
      },
      "950a": {
        $value: "rgba(48, 32, 24, 0.95)"
      }
    },
    gold: {
      "50": {
        $value: "#ffffe7"
      },
      "100": {
        $value: "#feffc1"
      },
      "200": {
        $value: "#fffd86"
      },
      "300": {
        $value: "#fff441"
      },
      "400": {
        $value: "#ffe60d"
      },
      "500": {
        $value: "#ffd700"
      },
      "600": {
        $value: "#d19e00"
      },
      "700": {
        $value: "#a67102"
      },
      "800": {
        $value: "#89580a"
      },
      "900": {
        $value: "#74480f"
      },
      "950": {
        $value: "#442604"
      },
      DEFAULT: {
        $value: "{colors.gold.500}"
      },
      "50a": {
        $value: "rgba(255, 255, 231, 0.5)"
      },
      "100a": {
        $value: "rgba(254, 255, 193, 0.1)"
      },
      "200a": {
        $value: "rgba(255, 253, 134, 0.2)"
      },
      "300a": {
        $value: "rgba(255, 244, 65, 0.3)"
      },
      "400a": {
        $value: "rgba(255, 230, 13, 0.4)"
      },
      "500a": {
        $value: "rgba(255, 215, 0, 0.5)"
      },
      "600a": {
        $value: "rgba(209, 158, 0, 0.6)"
      },
      "700a": {
        $value: "rgba(166, 113, 2, 0.7)"
      },
      "800a": {
        $value: "rgba(137, 88, 10, 0.8)"
      },
      "900a": {
        $value: "rgba(116, 72, 15, 0.9)"
      },
      "950a": {
        $value: "rgba(68, 38, 4, 0.95)"
      }
    },
    silver: {
      "25": {
        $value: "#fdfdfd"
      },
      "50": {
        $value: "#fafafa"
      },
      "100": {
        $value: "#f5f5f5"
      },
      "200": {
        $value: "#e5e5e5"
      },
      "300": {
        $value: "#d4d4d4"
      },
      "400": {
        $value: "#a3a3a3"
      },
      "500": {
        $value: "#737373"
      },
      "600": {
        $value: "#525252"
      },
      "700": {
        $value: "#404040"
      },
      "800": {
        $value: "#262626"
      },
      "900": {
        $value: "#171717"
      },
      "950": {
        $value: "#0a0a0a"
      },
      DEFAULT: {
        $value: "{colors.silver.500}"
      },
      "25a": {
        $value: "rgba(253, 253, 253, 0.25)"
      },
      "50a": {
        $value: "rgba(250, 250, 250, 0.5)"
      },
      "100a": {
        $value: "rgba(245, 245, 245, 0.1)"
      },
      "200a": {
        $value: "rgba(229, 229, 229, 0.2)"
      },
      "300a": {
        $value: "rgba(212, 212, 212, 0.3)"
      },
      "400a": {
        $value: "rgba(163, 163, 163, 0.4)"
      },
      "500a": {
        $value: "rgba(115, 115, 115, 0.5)"
      },
      "600a": {
        $value: "rgba(82, 82, 82, 0.6)"
      },
      "700a": {
        $value: "rgba(64, 64, 64, 0.7)"
      },
      "800a": {
        $value: "rgba(38, 38, 38, 0.8)"
      },
      "900a": {
        $value: "rgba(23, 23, 23, 0.9)"
      },
      "950a": {
        $value: "rgba(10, 10, 10, 0.95)"
      }
    },
    stone: {
      "25": {
        $value: "#fcfcfc"
      },
      "50": {
        $value: "#fafaf9"
      },
      "100": {
        $value: "#f5f5f4"
      },
      "200": {
        $value: "#e7e5e4"
      },
      "300": {
        $value: "#d6d3d1"
      },
      "400": {
        $value: "#a8a29e"
      },
      "500": {
        $value: "#78716c"
      },
      "600": {
        $value: "#57534e"
      },
      "700": {
        $value: "#44403c"
      },
      "800": {
        $value: "#292524"
      },
      "900": {
        $value: "#1c1917"
      },
      "950": {
        $value: "#0c0a09"
      },
      DEFAULT: {
        $value: "{colors.stone.500}"
      },
      "25a": {
        $value: "rgba(252, 252, 252, 0.25)"
      },
      "50a": {
        $value: "rgba(250, 250, 249, 0.5)"
      },
      "100a": {
        $value: "rgba(245, 245, 244, 0.1)"
      },
      "200a": {
        $value: "rgba(231, 229, 228, 0.2)"
      },
      "300a": {
        $value: "rgba(214, 211, 209, 0.3)"
      },
      "400a": {
        $value: "rgba(168, 162, 158, 0.4)"
      },
      "500a": {
        $value: "rgba(120, 113, 108, 0.5)"
      },
      "600a": {
        $value: "rgba(87, 83, 78, 0.6)"
      },
      "700a": {
        $value: "rgba(68, 64, 60, 0.7)"
      },
      "800a": {
        $value: "rgba(41, 37, 36, 0.8)"
      },
      "900a": {
        $value: "rgba(28, 25, 23, 0.9)"
      },
      "950a": {
        $value: "rgba(12, 10, 9, 0.95)"
      }
    },
    zinc: {
      "25": {
        $value: "#fcfcfc"
      },
      "50": {
        $value: "#fafafa"
      },
      "100": {
        $value: "#f4f4f5"
      },
      "200": {
        $value: "#e4e4e7"
      },
      "300": {
        $value: "#d4d4d8"
      },
      "400": {
        $value: "#a1a1aa"
      },
      "500": {
        $value: "#71717a"
      },
      "600": {
        $value: "#52525b"
      },
      "700": {
        $value: "#3f3f46"
      },
      "800": {
        $value: "#27272a"
      },
      "900": {
        $value: "#18181b"
      },
      "950": {
        $value: "#09090b"
      },
      DEFAULT: {
        $value: "{colors.zinc.500}"
      },
      "25a": {
        $value: "rgba(252, 252, 252, 0.25)"
      },
      "50a": {
        $value: "rgba(250, 250, 250, 0.5)"
      },
      "100a": {
        $value: "rgba(244, 244, 245, 0.1)"
      },
      "200a": {
        $value: "rgba(228, 228, 231, 0.2)"
      },
      "300a": {
        $value: "rgba(212, 212, 216, 0.3)"
      },
      "400a": {
        $value: "rgba(161, 161, 170, 0.4)"
      },
      "500a": {
        $value: "rgba(113, 113, 122, 0.5)"
      },
      "600a": {
        $value: "rgba(82, 82, 91, 0.6)"
      },
      "700a": {
        $value: "rgba(63, 63, 70, 0.7)"
      },
      "800a": {
        $value: "rgba(39, 39, 42, 0.8)"
      },
      "900a": {
        $value: "rgba(24, 24, 27, 0.9)"
      },
      "950a": {
        $value: "rgba(9, 9, 11, 0.95)"
      }
    },
    gray: {
      "25": {
        $value: "#fcfcfd"
      },
      "50": {
        $value: "#f9fafb"
      },
      "100": {
        $value: "#f3f4f6"
      },
      "200": {
        $value: "#e5e7eb"
      },
      "300": {
        $value: "#d1d5db"
      },
      "400": {
        $value: "#9ca3af"
      },
      "500": {
        $value: "#6b7280"
      },
      "600": {
        $value: "#4b5563"
      },
      "700": {
        $value: "#374151"
      },
      "800": {
        $value: "#1f2937"
      },
      "900": {
        $value: "#111827"
      },
      "950": {
        $value: "#030712"
      },
      DEFAULT: {
        $value: "{colors.gray.500}"
      },
      "25a": {
        $value: "rgba(252, 252, 253, 0.25)"
      },
      "50a": {
        $value: "rgba(249, 250, 251, 0.5)"
      },
      "100a": {
        $value: "rgba(243, 244, 246, 0.1)"
      },
      "200a": {
        $value: "rgba(229, 231, 235, 0.2)"
      },
      "300a": {
        $value: "rgba(209, 213, 219, 0.3)"
      },
      "400a": {
        $value: "rgba(156, 163, 175, 0.4)"
      },
      "500a": {
        $value: "rgba(107, 114, 128, 0.5)"
      },
      "600a": {
        $value: "rgba(75, 85, 99, 0.6)"
      },
      "700a": {
        $value: "rgba(55, 65, 81, 0.7)"
      },
      "800a": {
        $value: "rgba(31, 41, 55, 0.8)"
      },
      "900a": {
        $value: "rgba(17, 24, 39, 0.9)"
      },
      "950a": {
        $value: "rgba(3, 7, 18, 0.95)"
      }
    },
    slate: {
      "25": {
        $value: "#fcfcfd"
      },
      "50": {
        $value: "#f8fafc"
      },
      "100": {
        $value: "#f1f5f9"
      },
      "200": {
        $value: "#e2e8f0"
      },
      "300": {
        $value: "#cbd5e1"
      },
      "400": {
        $value: "#94a3b8"
      },
      "500": {
        $value: "#64748b"
      },
      "600": {
        $value: "#475569"
      },
      "700": {
        $value: "#334155"
      },
      "800": {
        $value: "#1e293b"
      },
      "900": {
        $value: "#0f172a"
      },
      "950": {
        $value: "#020617"
      },
      DEFAULT: {
        $value: "{colors.slate.500}"
      },
      "25a": {
        $value: "rgba(252, 252, 253, 0.25)"
      },
      "50a": {
        $value: "rgba(248, 250, 252, 0.5)"
      },
      "100a": {
        $value: "rgba(241, 245, 249, 0.1)"
      },
      "200a": {
        $value: "rgba(226, 232, 240, 0.2)"
      },
      "300a": {
        $value: "rgba(203, 213, 225, 0.3)"
      },
      "400a": {
        $value: "rgba(148, 163, 184, 0.4)"
      },
      "500a": {
        $value: "rgba(100, 116, 139, 0.5)"
      },
      "600a": {
        $value: "rgba(71, 85, 105, 0.6)"
      },
      "700a": {
        $value: "rgba(51, 65, 85, 0.7)"
      },
      "800a": {
        $value: "rgba(30, 41, 59, 0.8)"
      },
      "900a": {
        $value: "rgba(15, 23, 42, 0.9)"
      },
      "950a": {
        $value: "rgba(2, 6, 23, 0.95)"
      }
    }
  },
  containerNames: {},
  cursor: {},
  durations: {
    fastest: {
      $value: "50ms"
    },
    faster: {
      $value: "100ms"
    },
    fast: {
      $value: "150ms"
    },
    normal: {
      $value: "200ms"
    },
    slow: {
      $value: "300ms"
    },
    slower: {
      $value: "400ms"
    },
    slowest: {
      $value: "500ms"
    }
  },
  easings: {
    default: {
      $value: "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    linear: {
      $value: "linear"
    },
    pulse: {
      $value: "cubic-bezier(0.4, 0.0, 0.6, 1.0)"
    },
    in: {
      $value: "cubic-bezier(0.4, 0, 1, 1)"
    },
    out: {
      $value: "cubic-bezier(0, 0, 0.2, 1)"
    },
    "in-out": {
      $value: "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    "emphasized-in": {
      $value: "cubic-bezier(0.05, 0.7, 0.1, 1)"
    },
    "emphasized-out": {
      $value: "cubic-bezier(0.3, 0, 0.8, 0.15)"
    }
  },
  fonts: {
    sans: {
      $value: [
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
      $value: [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif"
      ]
    },
    mono: {
      $value: [
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
      $value: 'var(--font-assistant), "Helvetica Neue", Helvetica, Arial, sans-serif',
      $description: "Assistant (sans-serif) font"
    },
    firaCode: {
      $value: "var(--font-fira-code), monospace",
      $description: "Fira Code (mono) font"
    }
  },
  fontSizes: {
    "2xs": {
      $value: "0.5rem"
    },
    xs: {
      $value: "0.75rem"
    },
    sm: {
      $value: "0.875rem"
    },
    md: {
      $value: "1rem"
    },
    lg: {
      $value: "1.125rem"
    },
    xl: {
      $value: "1.25rem"
    },
    "2xl": {
      $value: "1.5rem"
    },
    "3xl": {
      $value: "1.875rem"
    },
    "4xl": {
      $value: "2.25rem"
    },
    "5xl": {
      $value: "3rem"
    },
    "6xl": {
      $value: "3.75rem"
    },
    "7xl": {
      $value: "4.5rem"
    },
    "8xl": {
      $value: "6rem"
    },
    "9xl": {
      $value: "8rem"
    }
  },
  fontWeights: {
    thin: {
      $value: 100
    },
    extralight: {
      $value: 200
    },
    light: {
      $value: 300
    },
    normal: {
      $value: 400
    },
    medium: {
      $value: 500
    },
    semibold: {
      $value: 600
    },
    bold: {
      $value: 700
    },
    extrabold: {
      $value: 800
    },
    black: {
      $value: 900
    }
  },
  gradients: {},
  letterSpacings: {
    tighter: {
      $value: "-0.05em"
    },
    tight: {
      $value: "-0.025em"
    },
    normal: {
      $value: "0em"
    },
    wide: {
      $value: "0.025em"
    },
    wider: {
      $value: "0.05em"
    },
    widest: {
      $value: "0.1em"
    }
  },
  lineHeights: {
    none: {
      $value: 1
    },
    tight: {
      $value: 1.25
    },
    snug: {
      $value: 1.375
    },
    normal: {
      $value: 1.5
    },
    relaxed: {
      $value: 1.75
    },
    loose: {
      $value: 2
    }
  },
  opacity: {},
  radii: {
    none: {
      $value: "0"
    },
    "2xs": {
      $value: "0.0625rem"
    },
    xs: {
      $value: "0.125rem"
    },
    sm: {
      $value: "0.25rem"
    },
    md: {
      $value: "0.375rem"
    },
    lg: {
      $value: "0.5rem"
    },
    xl: {
      $value: "0.75rem"
    },
    "2xl": {
      $value: "1rem"
    },
    "3xl": {
      $value: "1.5rem"
    },
    full: {
      $value: "9999px"
    }
  },
  shadows: {},
  sizes: {
    "0": {
      $value: "0rem"
    },
    "1": {
      $value: "0.25rem"
    },
    "2": {
      $value: "0.5rem"
    },
    "3": {
      $value: "0.75rem"
    },
    "4": {
      $value: "1rem"
    },
    "5": {
      $value: "1.25rem"
    },
    "6": {
      $value: "1.5rem"
    },
    "7": {
      $value: "1.75rem"
    },
    "8": {
      $value: "2rem"
    },
    "9": {
      $value: "2.25rem"
    },
    "10": {
      $value: "2.5rem"
    },
    "11": {
      $value: "2.75rem"
    },
    "12": {
      $value: "3rem"
    },
    "14": {
      $value: "3.5rem"
    },
    "16": {
      $value: "4rem"
    },
    "20": {
      $value: "5rem"
    },
    "21": {
      $value: "5.25rem"
    },
    "22": {
      $value: "5.5rem"
    },
    "23": {
      $value: "5.75rem"
    },
    "24": {
      $value: "6rem"
    },
    "28": {
      $value: "7rem"
    },
    "32": {
      $value: "8rem"
    },
    "36": {
      $value: "9rem"
    },
    "40": {
      $value: "10rem"
    },
    "44": {
      $value: "11rem"
    },
    "48": {
      $value: "12rem"
    },
    "52": {
      $value: "13rem"
    },
    "56": {
      $value: "14rem"
    },
    "60": {
      $value: "15rem"
    },
    "62": {
      $value: "15.5rem"
    },
    "64": {
      $value: "16rem"
    },
    "72": {
      $value: "18rem"
    },
    "80": {
      $value: "20rem"
    },
    "96": {
      $value: "24rem"
    },
    "0.5": {
      $value: "0.125rem"
    },
    "1.5": {
      $value: "0.375rem"
    },
    "2.5": {
      $value: "0.625rem"
    },
    "3.5": {
      $value: "0.875rem"
    },
    "4.5": {
      $value: "1.125rem"
    },
    "20.5": {
      $value: "5.125rem"
    },
    "21.5": {
      $value: "5.375rem"
    },
    "22.5": {
      $value: "5.625rem"
    },
    "23.5": {
      $value: "5.875rem"
    },
    full: {
      $value: "100%"
    },
    min: {
      $value: "min-content"
    },
    max: {
      $value: "max-content"
    },
    fit: {
      $value: "fit-content"
    },
    prose: {
      $value: "65ch"
    },
    "2xs": {
      $value: "16rem"
    },
    xs: {
      $value: "20rem"
    },
    sm: {
      $value: "24rem"
    },
    md: {
      $value: "28rem"
    },
    lg: {
      $value: "32rem"
    },
    xl: {
      $value: "36rem"
    },
    "2xl": {
      $value: "42rem"
    },
    "3xl": {
      $value: "48rem"
    },
    "4xl": {
      $value: "56rem"
    },
    "5xl": {
      $value: "64rem"
    },
    "6xl": {
      $value: "72rem"
    },
    "7xl": {
      $value: "80rem"
    },
    "8xl": {
      $value: "90rem"
    }
  },
  spacing: {
    "0": {
      $value: "0rem"
    },
    "1": {
      $value: "0.25rem"
    },
    "2": {
      $value: "0.5rem"
    },
    "3": {
      $value: "0.75rem"
    },
    "4": {
      $value: "1rem"
    },
    "5": {
      $value: "1.25rem"
    },
    "6": {
      $value: "1.5rem"
    },
    "7": {
      $value: "1.75rem"
    },
    "8": {
      $value: "2rem"
    },
    "9": {
      $value: "2.25rem"
    },
    "10": {
      $value: "2.5rem"
    },
    "11": {
      $value: "2.75rem"
    },
    "12": {
      $value: "3rem"
    },
    "14": {
      $value: "3.5rem"
    },
    "16": {
      $value: "4rem"
    },
    "20": {
      $value: "5rem"
    },
    "21": {
      $value: "5.25rem"
    },
    "22": {
      $value: "5.5rem"
    },
    "23": {
      $value: "5.75rem"
    },
    "24": {
      $value: "6rem"
    },
    "28": {
      $value: "7rem"
    },
    "32": {
      $value: "8rem"
    },
    "36": {
      $value: "9rem"
    },
    "40": {
      $value: "10rem"
    },
    "44": {
      $value: "11rem"
    },
    "48": {
      $value: "12rem"
    },
    "52": {
      $value: "13rem"
    },
    "56": {
      $value: "14rem"
    },
    "60": {
      $value: "15rem"
    },
    "62": {
      $value: "15.5rem"
    },
    "64": {
      $value: "16rem"
    },
    "72": {
      $value: "18rem"
    },
    "80": {
      $value: "20rem"
    },
    "96": {
      $value: "24rem"
    },
    "0.5": {
      $value: "0.125rem"
    },
    "1.5": {
      $value: "0.375rem"
    },
    "2.5": {
      $value: "0.625rem"
    },
    "3.5": {
      $value: "0.875rem"
    },
    "4.5": {
      $value: "1.125rem"
    },
    "20.5": {
      $value: "5.125rem"
    },
    "21.5": {
      $value: "5.375rem"
    },
    "22.5": {
      $value: "5.625rem"
    },
    "23.5": {
      $value: "5.875rem"
    }
  },
  zIndex: {
    hide: {
      $value: -1
    },
    base: {
      $value: 0
    },
    foreground: {
      $value: 1
    },
    docked: {
      $value: 10
    },
    dropdown: {
      $value: 1000
    },
    sticky: {
      $value: 1100
    },
    banner: {
      $value: 1200
    },
    overlay: {
      $value: 1300
    },
    dialog: {
      $value: 1400
    },
    popover: {
      $value: 1500
    },
    skipLink: {
      $value: 1600
    },
    toast: {
      $value: 1700
    },
    tooltip: {
      $value: 1800
    }
  }
};
// src/dtcg/semantic.tokens.json
var semantic_tokens_default = {
  animations: {},
  aspectRatios: {
    square: {
      $value: "1 / 1"
    },
    landscape: {
      $value: "4 / 3"
    },
    portrait: {
      $value: "3 / 4"
    },
    wide: {
      $value: "16 / 9"
    },
    ultrawide: {
      $value: "18 / 5"
    },
    golden: {
      $value: "1.618 / 1"
    }
  },
  assets: {},
  blurs: {},
  borders: {},
  borderWidths: {},
  colors: {
    rose: {
      default: {
        $value: "{colors.rose}",
        $extensions: {
          "omni.mode": {
            base: "{colors.rose}",
            _dark: "{colors.rose.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.rose.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.rose.700}",
            _dark: "{colors.rose.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.rose.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.rose.900}",
            _dark: "{colors.rose.100}"
          }
        }
      }
    },
    "dusty-rose": {
      default: {
        $value: "{colors.dusty-rose}",
        $extensions: {
          "omni.mode": {
            base: "{colors.dusty-rose}",
            _dark: "{colors.dusty-rose.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.dusty-rose.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.dusty-rose.700}",
            _dark: "{colors.dusty-rose.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.dusty-rose.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.dusty-rose.900}",
            _dark: "{colors.dusty-rose.100}"
          }
        }
      }
    },
    pink: {
      default: {
        $value: "{colors.pink}",
        $extensions: {
          "omni.mode": {
            base: "{colors.pink}",
            _dark: "{colors.pink.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.pink.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.pink.700}",
            _dark: "{colors.pink.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.pink.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.pink.900}",
            _dark: "{colors.pink.100}"
          }
        }
      }
    },
    fuchsia: {
      default: {
        $value: "{colors.fuchsia}",
        $extensions: {
          "omni.mode": {
            base: "{colors.fuchsia}",
            _dark: "{colors.fuchsia.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.fuchsia.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.fuchsia.700}",
            _dark: "{colors.fuchsia.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.fuchsia.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.fuchsia.900}",
            _dark: "{colors.fuchsia.100}"
          }
        }
      }
    },
    purple: {
      default: {
        $value: "{colors.purple}",
        $extensions: {
          "omni.mode": {
            base: "{colors.purple}",
            _dark: "{colors.purple.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.purple.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.purple.700}",
            _dark: "{colors.purple.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.purple.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.purple.900}",
            _dark: "{colors.purple.100}"
          }
        }
      }
    },
    violet: {
      default: {
        $value: "{colors.violet}",
        $extensions: {
          "omni.mode": {
            base: "{colors.violet}",
            _dark: "{colors.violet.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.violet.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.violet.700}",
            _dark: "{colors.violet.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.violet.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.violet.900}",
            _dark: "{colors.violet.100}"
          }
        }
      }
    },
    indigo: {
      default: {
        $value: "{colors.indigo}",
        $extensions: {
          "omni.mode": {
            base: "{colors.indigo}",
            _dark: "{colors.indigo.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.indigo.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.indigo.700}",
            _dark: "{colors.indigo.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.indigo.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.indigo.900}",
            _dark: "{colors.indigo.100}"
          }
        }
      }
    },
    blue: {
      default: {
        $value: "{colors.blue}",
        $extensions: {
          "omni.mode": {
            base: "{colors.blue}",
            _dark: "{colors.blue.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.blue.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.blue.700}",
            _dark: "{colors.blue.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.blue.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.blue.900}",
            _dark: "{colors.blue.100}"
          }
        }
      }
    },
    sky: {
      default: {
        $value: "{colors.sky}",
        $extensions: {
          "omni.mode": {
            base: "{colors.sky}",
            _dark: "{colors.sky.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.sky.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.sky.700}",
            _dark: "{colors.sky.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.sky.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.sky.900}",
            _dark: "{colors.sky.100}"
          }
        }
      }
    },
    cyan: {
      default: {
        $value: "{colors.cyan}",
        $extensions: {
          "omni.mode": {
            base: "{colors.cyan}",
            _dark: "{colors.cyan.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.cyan.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.cyan.700}",
            _dark: "{colors.cyan.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.cyan.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.cyan.900}",
            _dark: "{colors.cyan.100}"
          }
        }
      }
    },
    teal: {
      default: {
        $value: "{colors.teal}",
        $extensions: {
          "omni.mode": {
            base: "{colors.teal}",
            _dark: "{colors.teal.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.teal.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.teal.700}",
            _dark: "{colors.teal.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.teal.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.teal.900}",
            _dark: "{colors.teal.100}"
          }
        }
      }
    },
    emerald: {
      default: {
        $value: "{colors.omni.emerald}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.emerald}",
            _dark: "{colors.omni.emerald.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.omni.emerald.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.emerald.700}",
            _dark: "{colors.omni.emerald.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.omni.emerald.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.emerald.900}",
            _dark: "{colors.omni.emerald.100}"
          }
        }
      }
    },
    green: {
      default: {
        $value: "{colors.green}",
        $extensions: {
          "omni.mode": {
            base: "{colors.green}",
            _dark: "{colors.green.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.green.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.green.700}",
            _dark: "{colors.green.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.green.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.green.900}",
            _dark: "{colors.green.100}"
          }
        }
      }
    },
    lime: {
      default: {
        $value: "{colors.lime}",
        $extensions: {
          "omni.mode": {
            base: "{colors.lime}",
            _dark: "{colors.lime.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.lime.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.lime.700}",
            _dark: "{colors.lime.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.lime.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.lime.900}",
            _dark: "{colors.lime.100}"
          }
        }
      }
    },
    yellow: {
      default: {
        $value: "{colors.yellow}",
        $extensions: {
          "omni.mode": {
            base: "{colors.yellow}",
            _dark: "{colors.yellow.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.yellow.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.yellow.700}",
            _dark: "{colors.yellow.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.yellow.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.yellow.900}",
            _dark: "{colors.yellow.100}"
          }
        }
      }
    },
    amber: {
      default: {
        $value: "{colors.amber}",
        $extensions: {
          "omni.mode": {
            base: "{colors.amber}",
            _dark: "{colors.amber.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.amber.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.amber.700}",
            _dark: "{colors.amber.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.amber.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.amber.900}",
            _dark: "{colors.amber.100}"
          }
        }
      }
    },
    orange: {
      default: {
        $value: "{colors.orange}",
        $extensions: {
          "omni.mode": {
            base: "{colors.orange}",
            _dark: "{colors.orange.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.orange.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.orange.700}",
            _dark: "{colors.orange.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.orange.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.orange.900}",
            _dark: "{colors.orange.100}"
          }
        }
      }
    },
    red: {
      default: {
        $value: "{colors.red}",
        $extensions: {
          "omni.mode": {
            base: "{colors.red}",
            _dark: "{colors.red.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.red.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.red.700}",
            _dark: "{colors.red.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.red.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.red.900}",
            _dark: "{colors.red.100}"
          }
        }
      }
    },
    bronze: {
      default: {
        $value: "{colors.bronze}",
        $extensions: {
          "omni.mode": {
            base: "{colors.bronze}",
            _dark: "{colors.bronze.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.bronze.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.bronze.700}",
            _dark: "{colors.bronze.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.bronze.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.bronze.900}",
            _dark: "{colors.bronze.100}"
          }
        }
      }
    },
    gold: {
      default: {
        $value: "{colors.gold}",
        $extensions: {
          "omni.mode": {
            base: "{colors.gold}",
            _dark: "{colors.gold.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.gold.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.gold.700}",
            _dark: "{colors.gold.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.gold.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.gold.900}",
            _dark: "{colors.gold.100}"
          }
        }
      }
    },
    amethyst: {
      default: {
        $value: "{colors.omni.amethyst}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.amethyst}",
            _dark: "{colors.omni.amethyst.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.omni.amethyst.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.amethyst.700}",
            _dark: "{colors.omni.amethyst.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.omni.amethyst.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.amethyst.900}",
            _dark: "{colors.omni.amethyst.100}"
          }
        }
      }
    },
    citrine: {
      default: {
        $value: "{colors.omni.citrine}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.citrine}",
            _dark: "{colors.omni.citrine.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.omni.citrine.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.citrine.700}",
            _dark: "{colors.omni.citrine.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.omni.citrine.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.citrine.900}",
            _dark: "{colors.omni.citrine.100}"
          }
        }
      }
    },
    labradorite: {
      default: {
        $value: "{colors.omni.labradorite}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.labradorite}",
            _dark: "{colors.omni.labradorite.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.omni.labradorite.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.labradorite.700}",
            _dark: "{colors.omni.labradorite.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.omni.labradorite.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.labradorite.900}",
            _dark: "{colors.omni.labradorite.100}"
          }
        }
      }
    },
    ruby: {
      default: {
        $value: "{colors.omni.ruby}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.ruby}",
            _dark: "{colors.omni.ruby.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.omni.ruby.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.ruby.700}",
            _dark: "{colors.omni.ruby.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.omni.ruby.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.ruby.900}",
            _dark: "{colors.omni.ruby.100}"
          }
        }
      }
    },
    sapphire: {
      default: {
        $value: "{colors.omni.sapphire}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.sapphire}",
            _dark: "{colors.omni.sapphire.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.omni.sapphire.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.sapphire.700}",
            _dark: "{colors.omni.sapphire.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.omni.sapphire.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.omni.sapphire.900}",
            _dark: "{colors.omni.sapphire.100}"
          }
        }
      }
    },
    primary: {
      default: {
        $value: "{colors.brand.primary}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.primary}",
            _dark: "{colors.brand.primary.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.brand.primary.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.primary.700}",
            _dark: "{colors.brand.primary.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.brand.primary.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.primary.900}",
            _dark: "{colors.brand.primary.100}"
          }
        }
      }
    },
    secondary: {
      default: {
        $value: "{colors.brand.secondary}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.secondary}",
            _dark: "{colors.brand.secondary.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.brand.secondary.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.secondary.700}",
            _dark: "{colors.brand.secondary.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.brand.secondary.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.secondary.900}",
            _dark: "{colors.brand.secondary.100}"
          }
        }
      }
    },
    tertiary: {
      default: {
        $value: "{colors.brand.tertiary}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.tertiary}",
            _dark: "{colors.brand.tertiary.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.brand.tertiary.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.tertiary.700}",
            _dark: "{colors.brand.tertiary.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.brand.tertiary.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.tertiary.900}",
            _dark: "{colors.brand.tertiary.100}"
          }
        }
      }
    },
    quaternary: {
      default: {
        $value: "{colors.brand.quaternary}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.quaternary}",
            _dark: "{colors.brand.quaternary.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.brand.quaternary.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.quaternary.700}",
            _dark: "{colors.brand.quaternary.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.brand.quaternary.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.quaternary.900}",
            _dark: "{colors.brand.quaternary.100}"
          }
        }
      }
    },
    quinary: {
      default: {
        $value: "{colors.brand.quinary}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.quinary}",
            _dark: "{colors.brand.quinary.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.brand.quinary.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.quinary.700}",
            _dark: "{colors.brand.quinary.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.brand.quinary.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.quinary.900}",
            _dark: "{colors.brand.quinary.100}"
          }
        }
      }
    },
    senary: {
      default: {
        $value: "{colors.brand.senary}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.senary}",
            _dark: "{colors.brand.senary.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.brand.senary.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.senary.700}",
            _dark: "{colors.brand.senary.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.brand.senary.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.senary.900}",
            _dark: "{colors.brand.senary.100}"
          }
        }
      }
    },
    silver: {
      default: {
        $value: "{colors.silver}",
        $extensions: {
          "omni.mode": {
            base: "{colors.silver}",
            _dark: "{colors.silver.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.silver.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.silver.700}",
            _dark: "{colors.silver.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.silver.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.silver.900}",
            _dark: "{colors.silver.100}"
          }
        }
      }
    },
    stone: {
      default: {
        $value: "{colors.stone}",
        $extensions: {
          "omni.mode": {
            base: "{colors.stone}",
            _dark: "{colors.stone.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.stone.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.stone.700}",
            _dark: "{colors.stone.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.stone.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.stone.900}",
            _dark: "{colors.stone.100}"
          }
        }
      }
    },
    zinc: {
      default: {
        $value: "{colors.zinc}",
        $extensions: {
          "omni.mode": {
            base: "{colors.zinc}",
            _dark: "{colors.zinc.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.zinc.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.zinc.700}",
            _dark: "{colors.zinc.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.zinc.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.zinc.900}",
            _dark: "{colors.zinc.100}"
          }
        }
      }
    },
    gray: {
      default: {
        $value: "{colors.gray}",
        $extensions: {
          "omni.mode": {
            base: "{colors.gray}",
            _dark: "{colors.gray.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.gray.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.gray.700}",
            _dark: "{colors.gray.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.gray.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.gray.900}",
            _dark: "{colors.gray.100}"
          }
        }
      }
    },
    slate: {
      default: {
        $value: "{colors.slate}",
        $extensions: {
          "omni.mode": {
            base: "{colors.slate}",
            _dark: "{colors.slate.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.slate.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.slate.700}",
            _dark: "{colors.slate.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      text: {
        $value: "{colors.slate.900}",
        $extensions: {
          "omni.mode": {
            base: "{colors.slate.900}",
            _dark: "{colors.slate.100}"
          }
        }
      }
    },
    success: {
      $value: "{colors.green}"
    },
    warning: {
      $value: "{colors.yellow}"
    },
    danger: {
      $value: "{colors.red}"
    },
    neutral: {
      "25": {
        $value: "{colors.silver.25}"
      },
      "50": {
        $value: "{colors.silver.50}"
      },
      "100": {
        $value: "{colors.silver.100}"
      },
      "200": {
        $value: "{colors.silver.200}"
      },
      "300": {
        $value: "{colors.silver.300}"
      },
      "400": {
        $value: "{colors.silver.400}"
      },
      "500": {
        $value: "{colors.silver.500}"
      },
      "600": {
        $value: "{colors.silver.600}"
      },
      "700": {
        $value: "{colors.silver.700}"
      },
      "800": {
        $value: "{colors.silver.800}"
      },
      "900": {
        $value: "{colors.silver.900}"
      },
      "950": {
        $value: "{colors.silver.950}"
      },
      DEFAULT: {
        $value: "{colors.silver.500}"
      },
      "25a": {
        $value: "{colors.silver.25a}"
      },
      "50a": {
        $value: "{colors.silver.50a}"
      },
      "100a": {
        $value: "{colors.silver.100a}"
      },
      "200a": {
        $value: "{colors.silver.200a}"
      },
      "300a": {
        $value: "{colors.silver.300a}"
      },
      "400a": {
        $value: "{colors.silver.400a}"
      },
      "500a": {
        $value: "{colors.silver.500a}"
      },
      "600a": {
        $value: "{colors.silver.600a}"
      },
      "700a": {
        $value: "{colors.silver.700a}"
      },
      "800a": {
        $value: "{colors.silver.800a}"
      },
      "900a": {
        $value: "{colors.silver.900a}"
      },
      "950a": {
        $value: "{colors.silver.950a}"
      },
      default: {
        $value: "{colors.silver.700}"
      },
      emphasized: {
        $value: "{colors.silver.800}"
      },
      foreground: {
        $value: "{colors.white}"
      },
      text: {
        $value: "{colors.silver.900a}"
      }
    },
    background: {
      canvas: {
        $value: "{colors.neutral.25}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.25}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      default: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      },
      subtle: {
        $value: "{colors.neutral.50}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.50}",
            _dark: "{colors.neutral.800}"
          }
        }
      },
      muted: {
        $value: "{colors.neutral.100}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.100}",
            _dark: "{colors.neutral.800}"
          }
        }
      },
      emphasized: {
        $value: "{colors.neutral.200}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.200}",
            _dark: "{colors.neutral.700}"
          }
        }
      },
      disabled: {
        $value: "{colors.neutral.100}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.100}",
            _dark: "{colors.neutral.800}"
          }
        }
      }
    },
    foreground: {
      default: {
        $value: "{colors.neutral.950}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.950}",
            _dark: "{colors.white}"
          }
        }
      },
      muted: {
        $value: "{colors.neutral.600}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.600}",
            _dark: "{colors.neutral.300}"
          }
        }
      },
      subtle: {
        $value: "{colors.neutral.500}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.500}",
            _dark: "{colors.neutral.400}"
          }
        }
      },
      disabled: {
        $value: "{colors.neutral.500a}"
      }
    },
    accent: {
      default: {
        $value: "{colors.brand.primary}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.primary}",
            _dark: "{colors.brand.primary.500}"
          }
        }
      },
      emphasized: {
        $value: "{colors.brand.primary.700}",
        $extensions: {
          "omni.mode": {
            base: "{colors.brand.primary.700}",
            _dark: "{colors.brand.primary.400}"
          }
        }
      },
      foreground: {
        $value: "{colors.white}",
        $extensions: {
          "omni.mode": {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}"
          }
        }
      }
    },
    border: {
      default: {
        $value: "{colors.neutral.500}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.500}"
          }
        }
      },
      muted: {
        $value: "{colors.neutral.400}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.400}",
            _dark: "{colors.neutral.500}"
          }
        }
      },
      subtle: {
        $value: "{colors.neutral.200}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.200}",
            _dark: "{colors.neutral.700}"
          }
        }
      },
      disabled: {
        $value: "{colors.neutral.300}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.300}",
            _dark: "{colors.neutral.600}"
          }
        }
      },
      outline: {
        $value: "{colors.neutral.700a}",
        $extensions: {
          "omni.mode": {
            base: "{colors.neutral.700a}",
            _dark: "{colors.neutral.300a}"
          }
        }
      }
    }
  },
  containerNames: {},
  cursor: {},
  durations: {},
  easings: {},
  fonts: {
    primary: {
      $value: 'var(--font-primary), "Helvetica Neue", Helvetica, Arial, sans-serif',
      $description: "Primary font"
    },
    code: {
      $value: "var(--font-code), monospace",
      $description: "Code font"
    }
  },
  fontSizes: {},
  fontWeights: {},
  gradients: {},
  letterSpacings: {},
  lineHeights: {},
  opacity: {},
  radii: {},
  shadows: {
    xs: {
      $value: "0px 1px 2px {colors.neutral.300a}, 0px 0px 1px {colors.neutral.500a}",
      $extensions: {
        "omni.mode": {
          base: "0px 1px 2px {colors.neutral.300a}, 0px 0px 1px {colors.neutral.500a}",
          _dark: "0px 1px 1px {colors.black.950a}, 0px 0px 1px inset {colors.neutral.500a}"
        }
      }
    },
    sm: {
      $value: "0px 2px 4px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
      $extensions: {
        "omni.mode": {
          base: "0px 2px 4px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
          _dark: "0px 2px 4px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.500a}"
        }
      }
    },
    md: {
      $value: "0px 4px 8px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
      $extensions: {
        "omni.mode": {
          base: "0px 4px 8px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
          _dark: "0px 4px 8px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.500a}"
        }
      }
    },
    lg: {
      $value: "0px 8px 16px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
      $extensions: {
        "omni.mode": {
          base: "0px 8px 16px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
          _dark: "0px 8px 16px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.500a}"
        }
      }
    },
    xl: {
      $value: "0px 16px 24px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
      $extensions: {
        "omni.mode": {
          base: "0px 16px 24px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
          _dark: "0px 16px 24px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.500a}"
        }
      }
    },
    "2xl": {
      $value: "0px 24px 40px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
      $extensions: {
        "omni.mode": {
          base: "0px 24px 40px {colors.neutral.100a}, 0px 0px 1px {colors.neutral.500a}",
          _dark: "0px 24px 40px {colors.black.800a}, 0px 0px 1px inset {colors.neutral.500a}"
        }
      }
    }
  },
  sizes: {},
  spacing: {},
  zIndex: {}
};

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

// src/lib/dtcg.ts
var isDtcgLeaf = (node) => !!node && typeof node === "object" && ("$value" in node);
var toPandaLeaf = (leaf) => {
  const conditional = leaf.$extensions?.["omni.mode"];
  const extra = Object.fromEntries(Object.entries(leaf).filter(([k]) => k !== "$value" && k !== "$extensions").map(([k, v]) => [k.replace(/^\$/, ""), v]));
  return conditional ? { value: conditional, ...extra } : { value: leaf.$value, ...extra };
};
var toPanda = (node) => {
  if (isDtcgLeaf(node))
    return toPandaLeaf(node);
  if (node && typeof node === "object") {
    return Object.fromEntries(Object.entries(node).map(([k, v]) => [
      k,
      toPanda(v)
    ]));
  }
  return node;
};
var documentToPanda = (doc) => Object.fromEntries(Object.entries(doc).map(([scale, node]) => [scale, toPanda(node)]));

// src/panda/index.ts
var tokens = documentToPanda(primitives_tokens_default);
var semanticTokens = documentToPanda(semantic_tokens_default);
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
