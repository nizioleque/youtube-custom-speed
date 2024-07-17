import {
  createTheme as muiCreateTheme,
  PaletteOptions,
  ThemeOptions,
} from "@mui/material";
import { deepmerge } from "@mui/utils";

const theme: ThemeOptions = {
  typography: {
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

const lightPalette: PaletteOptions = {
  mode: "light",
};

const darkPalette: PaletteOptions = {
  mode: "dark",
};

const createTheme = (darkMode: boolean) =>
  muiCreateTheme(
    deepmerge(theme, { palette: darkMode ? darkPalette : lightPalette })
  );

export default createTheme;
