const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Rest of your Cypress configuration...
  video: true,

  // Rest of your configuration...
  videoOptions: {
    fps: 30,
    keepUnusedVideosForDays: 7,
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      cypress-file-upload(on)
      // implement node event listeners here
    },
  },
});
