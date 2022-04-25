'use strict';
// removes the default speed controls

// runs the observer
function runMenuObserver() {
    menuObserver.observe(
        document.querySelector('.ytp-settings-menu'), {
        subtree: true,
        childList: true,
        characterData: false
    });
}

// observer handler
function observerCallback(mutationList, observer) {
    // delete speed menu option
    let speedOption = Array.from(document.querySelectorAll('.ytp-settings-menu .ytp-menuitem')).find(element => {
        const content = element.querySelector('.ytp-menuitem-content');
        return content && +content.innerText;
    });

    if (!speedOption) {
        speedOption = Array.from(document.querySelectorAll('.ytp-settings-menu .ytp-menuitem')).find(element => {
            const content = element.querySelector('.ytp-menuitem-content');
            return content && content.innerText.toLowerCase().indexOf('norm') !== -1;
        });
    }

    if (speedOption) {
        // console.log('DISPLAY-NONE', speedOption, 'from', speedOption.parentElement)
        // speedOption.parentElement.removeChild(speedOption);
        speedOption.style.setProperty('display', 'none', 'important');

    }
    else console.log('no speedOption')
}

// updates speed when video src changes
function runSrcObserver() {
    srcObserver.observe(
        vid, {
            attributeFilter: ['src']
    });
}

// observer handler
function srcObserverCallback(mutationList, observer) {
    console.log('srcObserver')
    changeSpeed();
}
