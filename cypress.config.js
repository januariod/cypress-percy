/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress');

let percyHealthCheck = require('@percy/cypress/task');

module.exports = defineConfig({
  chromeWebSecurity: false,
  videoCompression: false,
  viewportWidth: 1600,
  viewportHeight: 900,
  projectId: 'e52iu5',
  e2e: {
    setupNodeEvents(on, config) {
      on('task', percyHealthCheck);
    },
    baseUrl: 'https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com'
  },
});
