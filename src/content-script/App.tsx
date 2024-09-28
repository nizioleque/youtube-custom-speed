import { useState } from "react";
import Controls from "./components/Controls";
import Menu from "./components/Menu";
import useInitialSpeed from "./hooks/useInitialSpeed";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useInitialSpeed();

  return (
    <>
      <Controls setIsMenuOpen={setIsMenuOpen} />
      <Menu isOpen={isMenuOpen} />
    </>
  );
}

export default App;
