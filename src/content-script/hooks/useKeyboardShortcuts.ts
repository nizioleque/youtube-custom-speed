import { useEventListener } from "usehooks-ts";
import { getVideo } from "../utils";
import useSetSpeed from "./useSetSpeed";

const ElementsToIgnore = [
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "EMBED",
  "YTD-COMMENTBOX",
  "YT-LIVE-CHAT-RENDERER",
  "YTD-PDG-BUY-FLOW-RENDERER",
];

function useKeyboardShortcuts() {
  const { decreaseSpeed, increaseSpeed } = useSetSpeed();

  const triggerShortcutUi = (newSpeed: number) => {
    const playerContainer = getVideo()?.parentElement?.parentElement;
    const bezelText =
      playerContainer?.querySelector<HTMLElement>(".ytp-bezel-text");
    if (!bezelText) return;

    bezelText.innerText = `${newSpeed}x`;
  };

  useEventListener("keydown", (event) => {
    if (!event.target || !(event.target instanceof HTMLElement)) return;

    const isInput = event.target.closest(ElementsToIgnore.join(",")) !== null;
    if (isInput) return;

    if (event.shiftKey && ["Comma", "Period"].includes(event.code)) {
      const speedFunction =
        event.code === "Comma" ? decreaseSpeed : increaseSpeed;

      const newSpeed = speedFunction();
      triggerShortcutUi(newSpeed);
    }
  });
}

export default useKeyboardShortcuts;
