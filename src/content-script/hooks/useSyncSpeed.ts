import { useStorage } from "@/hooks/useStorage";
import { useEffect } from "react";
import useSetSpeed from "./useSetSpeed";

function useSyncSpeed() {
  const [lastSpeed] = useStorage("lastSpeed", null);

  const { setSpeed } = useSetSpeed();

  useEffect(() => {
    if (lastSpeed === null) return;
    setSpeed(lastSpeed);
  }, [lastSpeed, setSpeed]);
}

export default useSyncSpeed;
