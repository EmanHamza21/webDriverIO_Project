let uk = require('./uk.json')
const testSuiteConfig = { uk }

export const getTestSuite = (market) => {
    return testSuiteConfig[market]
}

module.exports = { getTestSuite }