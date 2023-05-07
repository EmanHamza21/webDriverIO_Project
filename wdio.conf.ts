import { assert } from 'chai';
import { removeSync } from 'fs-extra';
// import { generate } from 'multiple-cucumber-html-reporter';
// import { getReportOptions } from './utils/browser';
import { getBrowserConfig } from './utils/browser';
import {getTestSuite} from './testsuites'

const yargs = require('yargs');
const url = require('./urls');
const NODE_ENV = process.env.NODE_ENV;

import {
    CHROME, 
} from './constants/config_constants';
const parseCmdArgs = () => yargs.argv;
const getCmdArgs = () => parseCmdArgs();
const getBrowser = () => getCmdArgs().browserName || CHROME;
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
    capabilities: getBrowserConfig(getBrowser()),
    logLevel: 'error',
    bail: 0,
    baseUrl:url[process.env.NODE_ENV],
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: [['cucumberjs-json', {
        jsonFolder: './reports/cucumber-json',
    }]],
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./step-definitions/**/*.ts'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 120000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
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
        // browser.reloadSession();
    },

    // onComplete: async () => {
    //     await generate(getReportOptions());
    // },

}
