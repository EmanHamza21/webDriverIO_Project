import { After } from '@wdio/cucumber-framework';
import cucumberJson from 'wdio-cucumberjs-json-reporter'


After(async (scenarioResult) => {
    if (scenarioResult.result.status === 'FAILED') {
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

    }
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});