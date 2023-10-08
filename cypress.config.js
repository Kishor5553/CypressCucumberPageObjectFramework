const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

const setupNodeEvents = async (on, config) => {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  );
  return config;
};

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 20000,
  chromeWebSecurity: false,
  fixturesFolder: false,
  defaultCommandTimeout:7000,
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/features/*.feature',
    // baseUrl: 'https://demo.guru99.com/insurance/v1/index.php',
    excludeSpecPattern: ['*.js'],
  },
  retries: {
    "runMode":1,
    "openMode":1
  }
});
