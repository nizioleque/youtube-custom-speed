import { useCallback, useContext } from "react";
import { waitUntilExists } from "../../utils/dom";
import AppContext from "../context/AppContext";
import { getVideo } from "../utils";

function useSetSpeed() {
  const { setLastSpeed } = useContext(AppContext)!;

  const setSpeed = useCallback(
    async (speed: number) => {
      // TODO open UI on keyboard shortcut
      const video = await waitUntilExists(getVideo);
      video.playbackRate = speed;

      setLastSpeed(speed);
    },
    [setLastSpeed]
  );

  return setSpeed;
}

export default useSetSpeed;
