import { useStorage } from "@/hooks/useStorage";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import useSetInitialSpeed from "./useSetInitialSpeed";
import useSetSpeed from "./useSetSpeed";

function useNewVideoSpeed() {
  const [newVideoSpeed] = useStorage("newVideoSpeed", null);
  const { lastSpeed } = useContext(AppContext)!;

  const [wasStartEvent, setWasStartEvent] = useState<boolean>(false);

  const { setSpeed } = useSetSpeed();
  const setInitialSpeed = useSetInitialSpeed();

  // handle first video (new tab) speed
  useEffect(() => {
    setInitialSpeed();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // prevent setting next video speed on the first video
  useEffect(() => {
    const handleNavigateStart = () => setWasStartEvent(true);
    document.addEventListener("yt-navigate-start", handleNavigateStart);
    return () =>
      document.removeEventListener("yt-navigate-start", handleNavigateStart);
  }, []);

  // handle next video speed
  useEffect(() => {
    if (!wasStartEvent) return;

    const handleNavigateFinish = () => {
      if (newVideoSpeed === null) return;

      switch (newVideoSpeed.selectedOption) {
        case "keep":
          // TODO test if this works
          if (lastSpeed !== undefined) setSpeed(lastSpeed);
          break;
        case "restore":
          setInitialSpeed();
          break;
      }
    };

    document.addEventListener("yt-navigate-finish", handleNavigateFinish);
    return () =>
      document.removeEventListener("yt-navigate-finish", handleNavigateFinish);
  }, [wasStartEvent, newVideoSpeed, setInitialSpeed, lastSpeed, setSpeed]);
}

export default useNewVideoSpeed;
