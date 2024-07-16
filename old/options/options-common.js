'use strict';

// show advanced settings
function showAdvanced() {
    document.querySelectorAll('.advanced').forEach(element => {
        element.classList.remove('advanced');
        element.classList.add('advanced-show');
    });

    showAdvancedCustom();
}

// hide advanced settings
function hideAdvanced() {
    document.querySelectorAll('.advanced-show').forEach(element => {
        element.classList.remove('advanced-show');
        element.classList.add('advanced');
    });

    // restore custom values to defaults
    Object.keys(radioGroups).forEach(key => {
        if (radioGroups[key].allowCustom) {
            if (settings[key] == radioGroups[key].values.length) {
                console.log('revert advanced');
                document.querySelector(`input[name="${key}"][value="${radioGroups[key].defVal}"]`).click();
            }
        }
    });

    // restore advanced checkboxes to defaults
    Object.keys(advancedCheckboxes).forEach(name => {
        const element = document.querySelector(`input[name="${name}"]`);
        if (element.checked) element.click();
    });

    hideAdvancedCustom();
}

// display data from storage
function loadData() {
    // set advanced checkbox
    document.querySelector('input[name="advanced"]').checked = settings.advanced;
    if (settings.advanced) showAdvanced();

    // load checkboxes
    document.querySelectorAll('input[type=checkbox]:not([name=advanced])').forEach(element => {
        element.checked = settings[element.name];
    });

    // load radio buttons
    Object.keys(radioGroups).forEach(key => {
        document.querySelector(`input[name="${key}"][value="${settings[key]}"]`).checked = true;
        if (radioGroups[key].allowCustom) {
            document.querySelector(`input[name="${key}Custom"]`).value = settings[key + 'Custom'];
        }
    });

    configureCustom();
}

// show error message
function checkError() {
    if (chrome.runtime.lastError) {
        showError(chrome.runtime.lastError);
        return true;
    }
    return false;
}

function showError(msg) {
    document.querySelector('#error-msg').innerText = JSON.stringify(msg);
    document.querySelector('#error').style.display = 'block';
    window.scrollTo(0, 0);
}

function configure() {
    // advanced checkbox click
    document.querySelector('input[name=advanced]').addEventListener('input', e => {
        if (e.target.checked) showAdvanced();
        else hideAdvanced();
    });
}