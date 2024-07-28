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

    // TODO fix in light mode
    softColor: "var(--joy-palette-primary-100)",
  },
};

const lightPalette = {};

const darkPalette = {
  background: {
    body: "#202124",
  },
};

const fontSizeOriginal = {
  xs: 0.75,
  sm: 0.875,
  md: 1,
  lg: 1.125,
  xl: 1.25,
  xl2: 1.5,
  xl3: 1.875,
  xl4: 2.25,
};

const theme = extendTheme({
  colorSchemes: {
    light: { palette: deepmerge(commonPalette, lightPalette) },
    dark: { palette: deepmerge(commonPalette, darkPalette) },
  },
  fontFamily: {
    display: fontFamily,
    body: fontFamily,
  },
  fontSize: Object.fromEntries(
    Object.entries(fontSizeOriginal).map(([key, value]) => [
      key,
      `${(value * 14) / 16}rem`,
    ])
  ),
  components: {
    JoyTypography: {
      defaultProps: {
        levelMapping: {
          h2: "h1",
          h3: "h2",
          h4: "h3",
        },
      },
    },
  },
});

export default theme;
