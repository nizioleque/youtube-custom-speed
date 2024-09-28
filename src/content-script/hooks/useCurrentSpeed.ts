import { useEffect, useState } from "react";
import { waitUntilExists } from "../../utils/dom";
import { getVideo } from "../utils";

function useCurrentSpeed() {
  const [currentSpeed, setCurrentSpeed] = useState<number>(1);

  useEffect(() => {
    let video: HTMLVideoElement | undefined;
    let handleRateChange: () => void | undefined;

    const handler = async () => {
      video = await waitUntilExists(getVideo);
      setCurrentSpeed(video.playbackRate);

      handleRateChange = () => {
        const speed = video!.playbackRate;
        setCurrentSpeed(speed);
      };

      video.addEventListener("ratechange", handleRateChange);
    };

    handler();

    return () => video?.removeEventListener("ratechange", handleRateChange);
  }, []);

  return currentSpeed;
}

export default useCurrentSpeed;
