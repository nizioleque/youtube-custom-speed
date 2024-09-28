import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks/useStorage";
import { setSpeed } from "../utils";

function useInitialSpeed() {
  const [defaultSpeed] = useStorage("newTabSpeed", null);
  const isSet = useRef<boolean>(false);

  useEffect(() => {
    if (defaultSpeed === null || isSet.current) return;
    isSet.current = true;

    if (defaultSpeed.isCustomSelected) {
      setSpeed(defaultSpeed.customValue);
      return;
    }

    switch (defaultSpeed.selectedOption) {
      case "normal":
        setSpeed(1);
        break;
      case "last":
        // TODO implement (store last speed in storage)
        break;
    }
  }, [defaultSpeed]);
}

export default useInitialSpeed;
