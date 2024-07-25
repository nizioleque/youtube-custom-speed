import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { ReactNode } from "react";
import theme from "../const/theme";

interface ThemeProviderProps {
  children: ReactNode;
}

// TODO add dark mode
// TODO check if `enableColorScheme` is necessary

function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </CssVarsProvider>
  );
}

export default ThemeProvider;
