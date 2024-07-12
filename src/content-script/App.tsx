import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, Paper, ThemeProvider, Typography } from "@mui/material";
import theme from "../theme";

interface AppProps {
  cache: EmotionCache;
}

function App({ cache }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper sx={{ padding: 2 }}>
          <Typography>Hello World from content script!</Typography>
        </Paper>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
