'use strict';

// helper function - save settings to storage
function setData(key, value) {
    console.log('setting', key, 'to', value);
    let object = {}
    object[key] = value;
    chrome.storage.sync.set(object, checkError);
}

// save checkbox state to storage
function checkboxClick(element) {
    settings[element.name] = element.checked;
    setData(element.name, element.checked);
}

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

// save radio button value to storage (and its corresponding modifier value)
function radioButtonClick(element) {
    element.checked = true;
    if (settings[element.name] != element.value) {

        // set the value for radio button
        settings[element.name] = element.value;
        setData(element.name, element.value);
            
        // set the modifier value (for type -- value)
        if (radioGroups[element.name].type === 'value') {
            if (element.value == radioGroups[element.name].values.length) {
                // currently set to custom value
                setData(radioGroups[element.name].key, settings[element.name + 'Custom']);
            }
            else {
                // currently set to predefined value
                setData(radioGroups[element.name].key, radioGroups[element.name].values[element.value]);
            }
        }
    }
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
    // read settings from storage
    chrome.storage.sync.get(Object.keys(settings), items => {
        if (!checkError()) {
            Object.keys(settings).forEach(key => {
                if (items[key] !== undefined) settings[key] = items[key];
            });
            loadData();
        }
    });

    // checkbox click
    document.querySelectorAll('input[type=checkbox]').forEach(element => {
        element.addEventListener('input', e => checkboxClick(e.target));
    });

    // advanced checkbox click
    document.querySelector('input[name=advanced]').addEventListener('input', e => {
        if (e.target.checked) showAdvanced();
        else hideAdvanced();
    });

    // radio button click
    document.querySelectorAll('input[type=radio]').forEach(element => {
        element.addEventListener('change', e => radioButtonClick(e.target));
    });

    // custom number input
    document.querySelectorAll('.input-custom').forEach(element => {
        // value change listener
        element.addEventListener('input', e => {
            if (settings[e.target.name] != e.target.value) {
                settings[e.target.name] = Number(e.target.value);
                setData(e.target.name, Number(e.target.value));
                setData(radioGroups[e.target.dataset.settingName].key, Number(e.target.value));
            }
        });

        // custom radio button focus
        element.addEventListener('focus', e => {
            radioButtonClick(e.target.parentElement.querySelector('input[type=radio]'));
        });

    });
}