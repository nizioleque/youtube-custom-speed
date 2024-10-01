import theme from "@/const/theme";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <CssVarsProvider defaultMode="system" theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}

export default ThemeProvider;
