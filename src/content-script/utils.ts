export function getControls() {
  return document.querySelector(".ytp-right-controls");
}

export function getVideo() {
  return document.querySelector<HTMLVideoElement>("#movie_player video");
}

export function getPlayerContainer() {
  return getVideo()?.parentElement?.parentElement;
}

export function getBezelText() {
  return getPlayerContainer()?.querySelector<HTMLElement>(".ytp-bezel-text");
}

export function getMenu() {
  return document.querySelector<HTMLDivElement>(
    '.ytp-menuitem:has(path[d^="M10,8v8l6"])'
  );
}
