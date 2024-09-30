import { useCallback, useContext } from "react";
import { useStorage } from "../../hooks/useStorage";
import { waitUntilExists } from "../../utils/dom";
import AppContext from "../context/AppContext";
import { getVideo } from "../utils";
import useCurrentSpeed from "./useCurrentSpeed";

function useSetSpeed() {
  const [speedList] = useStorage("speedList", [] as number[]);
  const { setLastSpeed } = useContext(AppContext)!;

  const currentSpeed = useCurrentSpeed();

  const setSpeed = useCallback(
    async (speed: number) => {
      // TODO open UI on keyboard shortcut
      const video = await waitUntilExists(getVideo);
      video.playbackRate = speed;

      setLastSpeed(speed);
    },
    [setLastSpeed]
  );

  const decreaseSpeed = useCallback(() => {
    const newSpeed = speedList
      .toReversed()
      .find((speed) => speed < currentSpeed);

    if (newSpeed !== undefined) setSpeed(newSpeed);
  }, [currentSpeed, setSpeed, speedList]);

  const increaseSpeed = useCallback(() => {
    const newSpeed = speedList.find((speed) => speed > currentSpeed);

    if (newSpeed !== undefined) setSpeed(newSpeed);
  }, [currentSpeed, setSpeed, speedList]);

  return { setSpeed, decreaseSpeed, increaseSpeed };
}

export default useSetSpeed;
