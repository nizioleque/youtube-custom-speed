import { StorageContent } from "@/types/storage";

export async function handleInstall() {
  await Promise.all([initializeStorage(), showTutorial()]);
}

async function initializeStorage() {
  const defaultSettings: StorageContent = {
    storageSchemaVersion: 2,
    lastSpeed: 1,
    speedList: [0.1, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 3, 5, 16],
    newTabSpeed: {
      selectedOption: "normal",
      isCustomSelected: false,
      customValue: 1,
    },
    newVideoSpeed: {
      selectedOption: "restore",
    },
    tabSync: {
      selectedOption: "noSync",
    },
  };

  await chrome.storage.sync.set(defaultSettings);
}

async function showTutorial() {
  const url = chrome.runtime.getURL("static/welcome.html");
  await chrome.tabs.create({ url });
}
