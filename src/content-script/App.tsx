import { Box } from "@mui/joy";
import { useState } from "react";
import Controls from "./components/Controls";
import Menu from "./components/Menu";
import useNewVideoSpeed from "./hooks/useNewVideoSpeed";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useNewVideoSpeed();

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
      <Controls setIsMenuOpen={setIsMenuOpen} />
      <Menu isOpen={isMenuOpen} />
    </Box>
  );
}

export default App;
