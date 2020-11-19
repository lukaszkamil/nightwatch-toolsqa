const customReporter = require('./reporter/index');

module.exports = {
  waitForConditionTimeout: 20000,
  reporter: (results, done) => {
    customReporter.customReporter.writeCustom(results, done);
  },

  production: {
    env: 'production',
    appURL: 'demoqa.com',
  },
  staging: {
    env: 'staging',
    appURL: 'demoqa.com',
  },
  productionGecko: {
    env: 'productionGecko',
    appURL: 'demoqa.com',
  },
};
