import { Box } from "@mui/joy";
import { useState } from "react";
import Controls from "./components/Controls";
import Menu from "./components/Menu";
import useKeyboardShortcuts from "./hooks/useKeyboardShortcuts";
import useNewVideoSpeed from "./hooks/useNewVideoSpeed";
import useSyncSpeed from "./hooks/useSyncSpeed";

function App() {
  const [isTextHover, setIsTextHover] = useState<boolean>(false);

  useNewVideoSpeed();
  useKeyboardShortcuts();
  useSyncSpeed();

  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        height: "100%",
      }}
    >
      <Controls setIsTextHover={setIsTextHover} />
      <Menu isTextHover={isTextHover} />
    </Box>
  );
}

export default App;
