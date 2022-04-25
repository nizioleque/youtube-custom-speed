'use strict';

// configure the menu
function configure() {
    if (configured) return true;

    // set variables
    try {
        player = document.querySelector('#movie_player');
        vid = player.querySelector('video');
        bezelText = player.querySelector('.ytp-bezel-text');
        bezelTextContainer = bezelText.parentElement.parentElement;
        svgElement = bezelTextContainer.querySelector('.ytp-bezel-icon');
        menuObserver = new MutationObserver(observerCallback);
        srcObserver = new MutationObserver(srcObserverCallback);
    } catch (error) {
        return false;
    }

    // read settings storage
    chrome.storage.sync.get(null, items => {
        if (items.speedList) speedList = items.speedList;
        if (items.currentSpeed) speed = items.currentSpeed;

        if (items.newtab) newtab = items.newtab;
        if (items.newvid) newvid = items.newvid;
        if (items.tabsync) tabsync = items.tabsync;
        if (items.customSpeed) customSpeed = items.customSpeed;

        restoreSpeed();
        loadMenu();
    });

    // reload menu if settings changed
    chrome.storage.onChanged.addListener((changes, areaName) => {
        if (areaName == 'sync') {
            if (changes.speedList) {
                speedList = changes.speedList.newValue;
                while (speedMenu.lastChild) {
                    speedMenu.removeChild(speedMenu.lastChild);
                }
                prepareMenuOptions();
            }

            if (changes.newtab) newtab = changes.newtab.newValue;
            if (changes.newvid) newvid = changes.newvid.newValue;
            if (changes.tabsync) tabsync = changes.tabsync.newValue;

            if (changes.currentSpeed && tabsync === 'sync') changeSpeed(changes.currentSpeed.newValue);
        }
    });

    // keyboard shortcut event listener
    document.body.addEventListener('keydown', e => {
        if (e.key === '>') {
            e.stopPropagation();
            kbshort(true);
        }
        else if (e.key === '<') {
            e.stopPropagation();
            kbshort(false);
        }
    }, { capture: true });

    // update speed when switching videos
    vid.addEventListener('ratechange', e => {
        changeSpeed();
    });

    // update speed when changing video url
    runSrcObserver();

    // remove speed menu option
    runMenuObserver();

    // invisible click to remove the element
    player.querySelector('.ytp-settings-menu').style.visibility = 'hidden';
    player.querySelector('.ytp-settings-button').click();
    player.querySelector('.ytp-settings-button').click();
    player.querySelector('.ytp-settings-menu').style.visibility = '';

    return configured = true;
}

// set initial speed, depending on user preference
function restoreSpeed() {
    if (newtab === 'normal') changeSpeed(1);
    else if (newtab === 'custom') changeSpeed(customSpeed);
    else if (newtab === 'last') changeSpeed(speed);
}

// helper function - save settings to storage
function setData(key, value) {
	let object = {}
	object[key] = value;
	chrome.storage.sync.set(object);
}
