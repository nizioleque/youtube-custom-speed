'use strict';

// speed change function
function changeSpeed(newSpeed, layout) {

	// chech if configured
	if (!configure()) return;

	if (!newSpeed) newSpeed = speed;

	// set new speed
	speed = newSpeed;
	vid.playbackRate = newSpeed; 
	setData('currentSpeed', speed);

	updateLayout();

	// show layout only when using keyboard shortcut
	if (layout !== undefined) {
		// prepare layout
		bezelText.innerText = newSpeed + 'x';
		bezelText.style.setProperty('display', 'inline-block');
		svgElement.innerHTML = layout ? fastSvg : slowSvg;

		// reset display (animation)
		bezelTextContainer.style.setProperty('display', 'none');
		void (bezelTextContainer.offsetHeight);
		if (timeoutBezel) clearTimeout(timeoutBezel);

		// show layout
		bezelTextContainer.style.setProperty('display', 'block');

		// hide text
		timeoutBezel = setTimeout(() => {
			bezelTextContainer.style.setProperty('display', 'none');
			bezelText.style.setProperty('display', 'none');
			bezelText.innerText = '';
		}, 500);
	}
}

// highlight the correct menu entry
function updateLayout() {
	// speed text
	if (speedText) {
		speedText.innerText = speed + 'x';
	}

	// highlight in menu
	if (speedMenu) {
		document.querySelectorAll('.speed-menu-option.speed-active').forEach(element => {
			element.classList.remove('speed-active');
		});

		const newspd = speedMenu.querySelector('.speed-menu-option[data-speed="' + speed + '"]');
		if (newspd) newspd.classList.add('speed-active');
	}
}