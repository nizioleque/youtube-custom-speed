import { handleInstall } from "./install";
import { handleUpdate } from "./update";

chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === "install") await handleInstall();
  if (details.reason === "update") await handleUpdate();
});
