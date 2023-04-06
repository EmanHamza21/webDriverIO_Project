const { After } = require('@wdio/cucumber-framework');
import cucumberJson from 'wdio-cucumberjs-json-reporter'


After((scenarioResult) => {
    if (scenarioResult.result.status === 'FAILED') {
        cucumberJson.attach(browser.takeScreenshot(), 'image/png');
    }
    cucumberJson.attach(browser.takeScreenshot(), 'image/png');
});

// afterAll(() => {
//     fs.removeSync(out);
//    });