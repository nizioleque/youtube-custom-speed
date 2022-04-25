'use strict';

// showError("This is a template");

const speedMenu = document.querySelector('#speed-menu');
const speedNew = document.querySelector('#add-speed');
const speedInput = document.querySelector('#speed-input');
const addError = document.querySelector('#add-error');
let speedList;

document.body.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
}, { passive: false, capture: true });

speedNew.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        addError.style.display = 'none';

        const newValue = +e.target.value;
        speedInput.value = '';

        if(!newValue || newValue < 0.0625 || newValue > 16) {
            showValError();
            return;
        }

        speedList.push(newValue);
        speedList.sort((a,b) => a - b);
        reloadMenuOptions();
    }
});





function showValError() {
    addError.style.display = 'block';
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
            deleteOption(e.target.dataset.speed);
        });
    });
};

function deleteOption(speed) {
    const index = speedList.indexOf(+speed);
    speedList.splice(index, 1);
    reloadMenuOptions();
}

function reloadMenuOptions() {
    setData('speedList', speedList);
    chrome.storage.sync.get(['speedList'], items => {
        if (items.speedList) {
            speedList = items.speedList;
            while (speedMenu.lastChild) {
                speedMenu.removeChild(speedMenu.lastChild);
            }
            prepareMenuOptions();
        }
    });
}