import { assert } from 'chai';
import { removeSync } from 'fs-extra';
import { generate } from 'multiple-cucumber-html-reporter';
import { getReportOptions } from './utils/browser';
import { getBrowserConfig } from './utils/browser';
import {getTestSuite} from './testsuites'

const yargs = require('yargs');
const url = require('./urls');
const NODE_ENV = process.env.NODE_ENV;

import {
    CHROME, 
    WINDOWS
} from './constants/config_constants';
const parseCmdArgs = () => yargs.argv;
const getCmdArgs = () => parseCmdArgs();
const getBrowser = () => getCmdArgs().browserName || CHROME;
const getOS = () => getCmdArgs().os || WINDOWS;
const getMarket = () => getCmdArgs().market || 'uk';

export const config: WebdriverIO.Config = {
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    },
    specs: [
        './features/**/*.feature'
    ],
    suites: getTestSuite(getMarket()),
    exclude: [],
    maxInstances: 1,
    capabilities: getBrowserConfig(getOS(),getBrowser()),
    logLevel: 'error',
    bail: 0,
    baseUrl:url[process.env.NODE_ENV],
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: [['cucumberjs-json', {
        jsonFolder: './reports/cucumber-json',
    }]],
    cucumberOpts: {
        require: ['./step-definitions/**/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 120000,
        ignoreUndefinedDefinitions: false
    },

    onPrepare: async () => {
        removeSync('./reports/cucumber-json/');
        removeSync('./.tmp/');
        removeSync('./reports/cucumber-html/');
    },
    before: async () => {
        (global as any).assert = assert;
        browser.setWindowSize(2360, 1770);
        browser.setTimeout({ pageLoad: 10000 });
    },
    afterScenario: async () => {
        await browser.deleteCookies();
        await browser.reloadSession();
        await browser.maximizeWindow();
    },

    onComplete: async () => {
        await generate(getReportOptions());
    },
    after: async () => {
        await browser.closeWindow();
    }

}
