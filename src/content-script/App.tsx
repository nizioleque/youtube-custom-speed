import { useState } from "react";
import Controls from "./components/Controls";
import Menu from "./components/Menu";
import useNewVideoSpeed from "./hooks/useNewVideoSpeed";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useNewVideoSpeed();

  return (
    <>
      <Controls setIsMenuOpen={setIsMenuOpen} />
      <Menu isOpen={isMenuOpen} />
    </>
  );
}

export default App;
