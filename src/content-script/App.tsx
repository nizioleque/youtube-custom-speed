import { useState } from "react";
import Controls from "./components/Controls";
import Menu from "./components/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Controls setIsMenuOpen={setIsMenuOpen} />
      <Menu isOpen={isMenuOpen} />
    </>
  );
}

export default App;
