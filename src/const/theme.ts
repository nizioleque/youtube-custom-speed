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

const commonPalette = {
  primary: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a",
  },
};

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
