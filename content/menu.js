'use strict';

function loadMenu(e) {
	// load menu
	const xhr = new XMLHttpRequest();
	xhr.onload = e => {
		// create element and set content
		const ui = document.createElement('span');
		ui.id = 'speed-ui'
		ui.innerHTML = xhr.responseText;
		player.querySelector('.ytp-right-controls').prepend(ui);

		// element constants
		const fast = document.querySelector('#button-fast');
		const slow = document.querySelector('#button-slow');
		speedText = document.querySelector('#speed-text');
		speedMenu = document.querySelector('#speed-menu');

		// show current speed
		speedText.innerText = speed + 'x';

		// event listeners

		// slow/fast buttons
		fast.addEventListener('click', e => {
			changeSpeed(calculateSpeed(true));
		});
		slow.addEventListener('click', e => {
			changeSpeed(calculateSpeed(false));
		});

		// show menu
		speedText.addEventListener('mouseenter', e => {
			clearTimeout(timeoutMenu);
			const textWidth = speedText.getBoundingClientRect().width;
			const menuWidth = parseFloat(getComputedStyle(speedMenu).width);
			// console.log(parseFloat(r2.width));
			// const newLeft = speedText.offsetLeft - 40 + r.width / 2 + 'px';
			const newLeft = speedText.offsetLeft - menuWidth / 2 + textWidth / 2 + 'px';

			speedMenu.style.left = newLeft;
			speedMenu.style.display = 'block';
			void (speedMenu.offsetHeight);
			speedMenu.style.opacity = 1;
		});
		speedMenu.addEventListener('mouseenter', e => {
			clearTimeout(timeoutMenu);
		});

		// hide menu
		speedText.addEventListener('mouseleave', e => {
			timeoutMenu = setTimeout(() => {
				speedMenu.style.opacity = 0;
				timeoutMenu = setTimeout(() => {
					speedMenu.style.display = 'none';
				}, 100);
			}, 100);
		});
		speedMenu.addEventListener('mouseleave', e => {
			timeoutMenu = setTimeout(() => {
				speedMenu.style.opacity = 0;
				timeoutMenu = setTimeout(() => {
					speedMenu.style.display = 'none';
				}, 100);
			}, 100);
		});

		// add speed buttons
		prepareMenuOptions();
	}
	xhr.open('GET', chrome.runtime.getURL('ui.html'), true);
	xhr.send();
}

function prepareMenuOptions() {
	speedList.forEach(speedVal => {
		const el = document.createElement('div');
		el.classList.add('speed-menu-option');
		el.innerText = speedVal + 'x';
		el.dataset.speed = speedVal;
		speedMenu.appendChild(el);

		// event listener for click
		el.addEventListener('click', e => {
			const currspd = speedMenu.querySelector('.speed-menu-option[data-speed="' + speedVal + '"]');
			if (currspd) currspd.classList.remove('speed-active');
			changeSpeed(e.target.dataset.speed);
		});
	});

	// highlight the correct element
	const newspd = speedMenu.querySelector('.speed-menu-option[data-speed="' + speed + '"]');
	if (newspd) newspd.classList.add('speed-active');
};