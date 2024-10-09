import { useStorage } from "@/hooks/useStorage";
import { StorageContent } from "@/types/storage";
import { useCallback, useEffect, useState } from "react";
import useSetSpeed from "./useSetSpeed";

function useSetInitialSpeed() {
  const [initialSpeed] = useStorage("newTabSpeed", null);
  const [lastSpeed] = useStorage("lastSpeed", 1);

  const [awaitingChange, setAwaitingChange] = useState<boolean>(false);

  const { setSpeed } = useSetSpeed();

  const execute = useCallback(
    (initialSpeed: StorageContent["newTabSpeed"]) => {
      if (initialSpeed.isCustomSelected) {
        setSpeed(initialSpeed.customValue);
        return;
      }

      switch (initialSpeed.selectedOption) {
        case "normal":
          setSpeed(1);
          break;
        case "last":
          setSpeed(lastSpeed);
          break;
      }
    },
    [lastSpeed, setSpeed]
  );

  useEffect(() => {
    if (awaitingChange && initialSpeed !== null) {
      setAwaitingChange(false);
      execute(initialSpeed);
    }
  }, [initialSpeed, awaitingChange, execute]);

  const setInitialSpeed = useCallback(() => {
    if (initialSpeed === null) {
      setAwaitingChange(true);
      return;
    }

    execute(initialSpeed);
  }, [execute, initialSpeed]);

  return setInitialSpeed;
}

export default useSetInitialSpeed;
