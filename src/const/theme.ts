import { extendTheme } from "@mui/joy";
import { deepmerge } from "@mui/utils";

// TODO add Inter font?

const fontFamily = [
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
].join(",");

const commonPalette = {};

const lightPalette = {};

const darkPalette = {};

const theme = extendTheme({
  colorSchemes: {
    light: { palette: deepmerge(commonPalette, lightPalette) },
    dark: { palette: deepmerge(commonPalette, darkPalette) },
  },
  fontFamily: {
    display: fontFamily,
    body: fontFamily,
  },
});

export default theme;
