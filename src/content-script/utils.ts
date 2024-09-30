export function getControls() {
  return document.querySelector(".ytp-right-controls");
}

export function getVideo() {
  return document.querySelector<HTMLVideoElement>("#movie_player video");
}
