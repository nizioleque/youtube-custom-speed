'use strict';

// this runs when the extension is first installed and loads the settings from synchronized storage (or sets the default values)
chrome.runtime.onInstalled.addListener(details => {
    if (details.reason === 'install' || details.reason === 'update') {
        // configure default memory
        const defaultSettings = {
            currentSpeed: 1,
            speedList: [0.1, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 3, 5, 16],
            newtab: 'normal',
            newvid: 'restore',
            tabsync: 'nosync',
            customSpeed: 1.25
        };

        chrome.storage.sync.get(Object.keys(defaultSettings), items => {
            if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);
            else {
                Object.keys(defaultSettings).forEach(key => {
                    if (items[key] === undefined) {
                        const object = {};
                        object[key] = defaultSettings[key];
                        chrome.storage.sync.set(object);
                    }
                });
            }
        });

        // tutorial page
        chrome.storage.sync.get('tutorialDisplayed', items => {
            if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);
            else if (!items.tutorialDisplayed) {
                // show tutorial
                chrome.tabs.create({
                    url: chrome.runtime.getURL('welcome.html')
                });
                chrome.storage.sync.set({
                    tutorialDisplayed: chrome.runtime.getManifest().version
                });
            }
        });
    }
});