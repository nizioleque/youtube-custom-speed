import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";
import Action from "./Action";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Action />
    </ThemeProvider>
  );
}

export default App;
