const uk = require('./uk.json')
const testSuiteConfig = { uk }

export const getTestSuite =  (market: any) => {
    return  testSuiteConfig[market]
}