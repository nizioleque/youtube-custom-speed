import { waitUntilExists } from "../utils/dom";

export function getControls() {
  return document.querySelector(".ytp-right-controls");
}

export function getVideo() {
  return document.querySelector<HTMLVideoElement>("ytd-player video");
}

export async function setSpeed(speed: number) {
  const video = await waitUntilExists(getVideo);
  video.playbackRate = speed;
}
