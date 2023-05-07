import {
  WINDOWS,
  WINDOWS_10,
  CHROME,
  CHROME_VERSION,
  CHROMEHEADLESS
} from '../constants/config_constants';

const reportMetadataWindows = {
  device: WINDOWS,
  platform: {
    name: WINDOWS,
    version: WINDOWS_10,
  },
};

const localWindowsChrome = {
  browserName: CHROME,
  'cjson:metadata': reportMetadataWindows,
};

const headlessBrowser = {
  browserName: CHROMEHEADLESS,
  'cjson:metadata': reportMetadataWindows,
  'goog:chromeOptions': {
    args: ["--headless", "user-agent=...", "--disable-gpu", "--window-size=1440,735"]
  }
};


const localBrowserConfig = {
  windows: {
    chrome: [localWindowsChrome],
    headless: [headlessBrowser],
  }
};

export const getBrowserConfig = (browserName: string) => {
  return localBrowserConfig[browserName];
};

export const getDrivers = () => ({
  chrome: {
    version: CHROME_VERSION,
  },
  edge: '',
  firefox: '',
});

export const getReportOptions = () => ({
  jsonDir: './reports/cucumber-json/',
  reportPath: './reports/cucumber-html/',
  openReportInBrowser: true,
  disableLog: true,
  pageTitle: 'ipos-automation',
  reportName: 'automation-html-report',
  displayDuration: true,
  customData: {
    title: 'Run info',
    data: [
      { label: 'Environment', value: 'test' },
      { label: 'Project', value: 'automationTest' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'Sprint 0' },
    ],
  },
  customStyle: './utils/customStyle.css',
  pageFooter: '<div style="margin:0 auto;width:50%;padding:10px;">' + '<p>Automation Test</p></div>',
});