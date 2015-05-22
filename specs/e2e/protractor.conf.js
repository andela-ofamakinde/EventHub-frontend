exports.config = {
  allScriptsTimeout: 15000,
  chromeOnly:true,
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    '*.js',
    'tests/e2e/protractor.conf.js',
    'tests/e2e/scenarios.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};