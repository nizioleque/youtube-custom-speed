'use strict';

const msg = chrome.i18n.getMessage;

// insert strings
document.querySelectorAll('[data-string]').forEach(element => {
    element.innerHTML = msg(element.dataset.string);
});

// bug report mailto
const bugReportURL = `
mailto: nizioleque@gmail.com
?subject=${msg('extName')} bug report
&body=PLEASE FILL IN THIS EMAIL TO SEND A BUG REPORT%0D%0A%0D%0A
PROBLEM:%0D%0A
[describe the problem]%0D%0A%0D%0A
AFFECTED SITES:%0D%0A
[include links to affected sites]%0D%0A%0D%0A
STEPS TO REPRODUCE:%0D%0A
[describe the steps to reproduce the problem]%0D%0A%0D%0A
Your feedback will be used to improve the extension. Thank you!
`; 

document.querySelectorAll('.bugReportURL').forEach(element => {
    element.href = bugReportURL;
});

// store review
const storeReviewURL = `https://chrome.google.com/webstore/detail/${msg('extNameURL')}/${msg('@@extension_id')}/reviews`;

document.querySelectorAll('.storeReviewURL').forEach(element => {
    element.href = storeReviewURL;
});
