import { useCallback, useContext, useEffect, useState } from "react";
import { useStorage } from "../../hooks/useStorage";
import { StorageContent } from "../../types/storage";
import AppContext from "../context/AppContext";
import useSetSpeed from "./useSetSpeed";

function useSetInitialSpeed() {
  const [initialSpeed] = useStorage("newTabSpeed", null);
  const { lastSpeed } = useContext(AppContext)!;

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
          // TODO fix - this should use last speed from storage, not context
          if (lastSpeed !== undefined) setSpeed(lastSpeed);
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
