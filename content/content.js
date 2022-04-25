'use strict';

// reverse find
Array.prototype.findEnd = function (pred) {
	let i = this.length;
	while (--i >= 0)
		if (pred(this[i])) return this[i];
	return undefined;
}

// svg icons
const fastSvg = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow"></use><path class="ytp-svg-fill" d="M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"></path></svg>';
const slowSvg = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow"></use><path class="ytp-svg-fill" d="M 17,24 V 12 l -8.5,6 8.5,6 z m .5,-6 8.5,6 V 12 l -8.5,6 z"></path></svg>';

// variables
let speedList = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
let newtab = 'normal', newvid = 'restore', tabsync = 'nosync';
let customSpeed = 1.25;
let configured = false;
let player, vid, bezelText, bezelTextContainer, svgElement, menuObserver, srcObserver;
let speedText, speedMenu;
let timeoutBezel, timeoutMenu;
let speed = 1; 

// try to configure
configure();

// update speed when navigating
// this will attempt to run configure() on navigation
document.addEventListener('yt-navigate-finish', e => {
	// change speed according to the newvid option
	if (newvid === 'keep') changeSpeed(speed);
	else if (newvid === 'restore') restoreSpeed();
});



