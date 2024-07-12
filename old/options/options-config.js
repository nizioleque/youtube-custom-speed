'use strict';

// default settings values
const settings = {
    advanced: false,
    speedList: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],

    newtab: 0,
    newvid: 0,
    tabsync: 0,
    
    customSpeed: 1.25
};

// details of radio buttons groups
// type:
//  option: selecting one of the options
//  value: every option has a corresponding value
//      key: name of the value in storage
//      values: array of values corresponding to every radio button
//      allowCustom: allows entering a custom value
//          defVal: default value to set when advanced settings are disabled
const radioGroups = {
    newtab: {
        type: 'option',
        key: 'customSpeed'
    },
    newvid: {
        type: 'option'
    },
    tabsync: {
        type: 'option'
    }
};

// advanced checkboxes and their default values
const advancedCheckboxes = {

};

// runs at the end of configuration
function configureCustom() {
    speedList = settings.speedList;
    prepareMenuOptions();

    document.querySelector('input[name="customSpeed"]').value = settings.customSpeed;
}

// runs when advanced checkbox is being enabled
function showAdvancedCustom() {

}

// runs when advanced checkbox is being disabled
function hideAdvancedCustom() {

}

configure();