import { useStorage } from "@/hooks/useStorage";
import { waitUntilExists } from "@/utils/dom";
import { useCallback } from "react";
import { getVideo } from "../utils";
import useCurrentSpeed from "./useCurrentSpeed";

function useSetSpeed() {
  const [speedList] = useStorage("speedList", [] as number[]);
  const [_, setLastSpeed] = useStorage("lastSpeed", 1);

  const currentSpeed = useCurrentSpeed();

  const setSpeed = useCallback(
    async (speed: number) => {
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

    // return current speed as fallback for type safety
    return newSpeed ?? currentSpeed;
  }, [currentSpeed, setSpeed, speedList]);

  const increaseSpeed = useCallback(() => {
    const newSpeed = speedList.find((speed) => speed > currentSpeed);

    if (newSpeed !== undefined) setSpeed(newSpeed);

    // return current speed as fallback for type safety
    return newSpeed ?? currentSpeed;
  }, [currentSpeed, setSpeed, speedList]);

  return { setSpeed, decreaseSpeed, increaseSpeed };
}

export default useSetSpeed;
