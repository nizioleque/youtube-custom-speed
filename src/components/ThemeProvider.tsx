import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@mui/material";
import React, { ReactNode } from "react";
import createTheme from "../const/theme";

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () => createTheme(prefersDarkMode),
    [prefersDarkMode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
