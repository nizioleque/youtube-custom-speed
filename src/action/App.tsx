import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import theme from "../theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: 300, padding: 2 }}>
        <Typography>Hello World from browser action!</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
