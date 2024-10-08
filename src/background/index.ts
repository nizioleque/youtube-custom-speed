import { handleInstall } from "./install";
import { handleUpdate } from "./update";

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") handleInstall();
  if (details.reason === "update") handleUpdate();
});
