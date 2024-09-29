import { createContext, Dispatch, SetStateAction } from "react";

interface AppContext {
  lastSpeed: number | undefined;
  setLastSpeed: Dispatch<SetStateAction<number | undefined>>;
}

export default createContext<AppContext | null>(null);
