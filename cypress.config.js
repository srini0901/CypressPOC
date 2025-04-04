const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config); 
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    specPattern: "cypress/e2e/*.feature", 
    supportFile: "cypress/support/e2e.js",
    screenshotOnRunFailure: true, 
    video: true, 
    videoCompression: 32, 
    videoUploadOnPasses: false,
    retries: {
      runMode: 2,    // Retries when running in CLI (cypress run)
      openMode: 1,    // Retries when running in Cypress UI (cypress open)
    },
    reporter: "mochawesome",  // Set mochawesome as reporter
    reporterOptions: {
      reportDir: "cypress/reports",  // Output directory
      overwrite: false,
      html: true,
      json: true,
    },
  },
  
});
