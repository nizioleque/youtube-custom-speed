import { extendTheme } from "@mui/joy";
import { deepmerge } from "@mui/utils";

const fontFamily = [
  "Inter",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

const commonPalette = {
  neutral: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09",
  },
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

const darkPalette = {
  background: {
    body: "var(--joy-palette-neutral-950)",
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
  // change default font size to 14px
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
          h3: "h1",
          h4: "h2",
        },
      },
    },
  },
});

export default theme;
