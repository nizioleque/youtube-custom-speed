const msg = chrome.i18n.getMessage;

export const supportUrl = "https://www.buymeacoffee.com/nizioleque";

export const reviewUrl = `https://chrome.google.com/webstore/detail/${msg(
  "extNameURL"
)}/${msg("@@extension_id")}/reviews`;

export const bugReportURL = `
mailto: norbert@niziolek.dev
?subject=${msg("extName")} bug report
&body=PLEASE FILL IN THIS EMAIL TO SEND A BUG REPORT%0D%0A%0D%0A
PROBLEM:%0D%0A
[describe the problem]%0D%0A%0D%0A
AFFECTED SITES:%0D%0A
[include links to affected sites]%0D%0A%0D%0A
STEPS TO REPRODUCE:%0D%0A
[describe the steps to reproduce the problem]%0D%0A%0D%0A
Your feedback will be used to improve the extension. Thank you!
`;
