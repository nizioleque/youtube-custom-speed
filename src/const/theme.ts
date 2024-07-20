import {
  createTheme as muiCreateTheme,
  PaletteOptions,
  Theme,
  ThemeOptions,
} from "@mui/material";
import { deepmerge } from "@mui/utils";

const themeBase: ThemeOptions = {
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    // change default font size to 14px
    fontSize: 14 * (14 / 16),

    // necessary to ensure correct font size regardless of the page's HTML font size
    htmlFontSize: parseInt(getComputedStyle(document.documentElement).fontSize),
  },

  palette: {
    primary: {
      main: "#FF0000",
    },
  },
};

function createTypography(theme: Theme) {
  return {
    typography: {
      h1: {
        fontSize: "1.7rem",
        fontWeight: 700,
      },
      h2: {
        fontSize: "1.3rem",
        fontWeight: 500,
      },
      body2: {
        color: theme.palette.text.secondary,
      },
    },
  };
}

const lightPalette: PaletteOptions = {
  mode: "light",
};

const darkPalette: PaletteOptions = {
  mode: "dark",
  background: {
    default: "#2a2a2a",
  },
};

const createTheme = (darkMode: boolean) => {
  let theme = muiCreateTheme(
    deepmerge(themeBase, { palette: darkMode ? darkPalette : lightPalette })
  );

  theme = muiCreateTheme(theme, createTypography(theme));

  return theme;
};

export default createTheme;
