import { ReactNode, useState } from "react";
import AppContext from "./context/AppContext";

interface ContextProviderProps {
  children: ReactNode;
}

function ContextProvider({ children }: ContextProviderProps) {
  const [lastSpeed, setLastSpeed] = useState<number | undefined>(undefined);

  return (
    <AppContext.Provider value={{ lastSpeed, setLastSpeed }}>
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
