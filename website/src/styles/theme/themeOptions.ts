import { CssVarsThemeOptions } from "@mui/material/styles";
import { commonOptions } from "./common";
import type {} from "@mui/material/themeCssVarsAugmentation";

const cssThemeOptions: CssVarsThemeOptions = {
  cssVariables: true,
  colorSchemeSelector: "data-mui-color-scheme",
  ...commonOptions,
  colorSchemes: {
    dark: {
      palette: {
        mode: "dark",
        background: {
          default: "#0e0e12",
          paper: "#0e0e12",
        },
        primary: {
          main: "hsl(270, 60%, 75%)",
        },
        secondary: {
          main: "hsl(270, 60%, 88%)",
        },
        // @ts-expect-error
        header: {
          default: "#0e0e12",
        },

        code: {
          bg: "#1a1a24",
          dark: "#1a1a24",
        },

        fenced: {
          bg: "#1a1a24",
        },

        example: {
          main: "#9de1fe",
        },

        warning: {
          main: "#ffeeba",
        },

        caution: {
          main: "#ffd966",
        },
        important: {
          main: "#f5c6cb",
        },

        tip: {
          main: "#73c476",
        },

        note: {
          main: "#4a9eff",
        },

        misc: {
          a: "hsl(270, 60%, 75%)",
          tableBorder: "hsl(270, 60%, 25%)",
        },
      },
    },
  },
};

export { cssThemeOptions };
