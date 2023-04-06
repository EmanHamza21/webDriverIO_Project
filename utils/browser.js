const constants = require('../constants/config_constants');

const reportMetadataWindows = {
  device: constants.WINDOWS,
  platform: {
    name: constants.WINDOWS,
    version: constants.WINDOWS_10,
  },
};

const localWindowsChrome = {
  browserName: constants.CHROME,
  'cjson:metadata': reportMetadataWindows,
};





const localBrowserConfig = {
  windows: {
    chrome: [localWindowsChrome]
  }
};


module.exports.getBrowserConfig = (os, browserName) => {
  return localBrowserConfig[os][browserName];
};

module.exports.getDrivers = () => ({
  chrome: {
    version: '110.0.5481.77'
  }
});

module.exports.getReportOptions = () => ({
  jsonDir: './reports/cucumber-json/',
  reportPath: './reports/cucumber-html/',
  // openReportInBrowser: true,
  // disableLog: true,
  // pageTitle: 'ipos-automation',
  // reportName: 'automation-html-report',
  // displayDuration: true,
  // customData: {
  //   title: 'Run info',
    // data: [
    //   { label: 'Environment', value: 'test' },
    //   { label: 'Project', value: 'automationTest' },
    //   { label: 'Release', value: '1.0.0' },
    //   { label: 'Cycle', value: 'Sprint 0' },
    // ],
  // },
  // customStyle: './utils/customStyle.css',
  // pageFooter: '<div style="margin:0 auto;width:50%;padding:10px;">'
    // + '<p>Automation Test</p></div>',
});