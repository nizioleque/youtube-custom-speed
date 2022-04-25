'use strict';
// keyboard shortcut handlers

function kbshort(up) {
    const newSpeed = calculateSpeed(up);
    changeSpeed(newSpeed, up);
}

function calculateSpeed(up) {
	const oldSpeed = vid.playbackRate;
	let speed = up ? speedList.find(element => element > oldSpeed) : speedList.findEnd(element => element < oldSpeed);
	if (!speed) speed = oldSpeed;
    return speed;
}