export function handleUpdate() {
  // TODO migrate settings to new schema on update

  showTutorial();
}

function showTutorial() {
  // tutorial page
  chrome.storage.sync.get("tutorialDisplayed", (items) => {
    if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);
    else if (!items.tutorialDisplayed) {
      // show tutorial
      chrome.tabs.create({
        url: chrome.runtime.getURL("static/welcome.html"),
      });
      chrome.storage.sync.set({
        tutorialDisplayed: chrome.runtime.getManifest().version,
      });
    }
  });
}
