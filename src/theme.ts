import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    // necessary to ensure correct font size regardless of the page's HTML font size
    htmlFontSize: parseInt(getComputedStyle(document.documentElement).fontSize),
  },

  // example of customizing the theme
  palette: {
    primary: {
      main: "#2799FF",
    },
  },
});

export default theme;
