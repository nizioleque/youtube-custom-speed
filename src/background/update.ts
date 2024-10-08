import { StorageContent } from "@/types/storage";

export async function handleUpdate() {
  await migrateStorage();
}

async function migrateStorage() {
  // throw type error if the code is not adjusted to the current schema version
  const _currentSchemaVersion: StorageContent["storageSchemaVersion"] = 2;

  const { storageSchemaVersion } = await chrome.storage.sync.get(
    "storageSchemaVersion"
  );

  if (!storageSchemaVersion) await migrateFromV1();
}

async function migrateFromV1() {
  const currentContent = await chrome.storage.sync.get(null);

  // V1 schema
  //     currentSpeed: number
  //     speedList: number[]
  //     newtab: "normal" | "custom" | "last" | "do-nothing"
  //     customSpeed: number
  //     newvid: "restore" | "keep" | "do-nothing"
  //     tabsync: "nosync" | "sync"

  const valueMap = {
    normal: "normal",
    last: "last",
    "do-nothing": "doNothing",
    restore: "restore",
    keep: "keep",
    nosync: "noSync",
    sync: "sync",
  };

  const newContent: StorageContent = {
    storageSchemaVersion: 2,
    lastSpeed: currentContent.currentSpeed,
    speedList: currentContent.speedList,
    newTabSpeed: {
      selectedOption:
        currentContent.newtab === "custom"
          ? "normal"
          : // @ts-expect-error: valueMap is not fully typed
            valueMap[currentContent.newtab],
      isCustomSelected: currentContent.newtab === "custom",
      customValue: currentContent.customSpeed,
    },
    newVideoSpeed: {
      // @ts-expect-error: valueMap is not fully typed
      selectedOption: valueMap[currentContent.newvid],
    },
    tabSync: {
      // @ts-expect-error: valueMap is not fully typed
      selectedOption: valueMap[currentContent.tabsync],
    },
  };

  await chrome.storage.sync.clear();
  await chrome.storage.sync.set(newContent);
}
