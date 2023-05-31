const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Rest of your Cypress configuration...
  video: true,

  // Rest of your configuration...
  videoOptions: {
    fps: 30,
    keepUnusedVideosForDays: 7,
  },
  "defaultCommandTimeout": 120000,

  env:{
    username: "usama",
    password: "Intersteller!@#1",
    pptqa: "https://pptqa.servicepathlive.com/Spa/",
    ppttest: "https://ppttest.servicepathlive.com/Spa/",
    //time: "90000"
  },

  
  e2e: {
    setupNodeEvents(on, config) {
      
      // cypress-file-upload(on)
      // implement node event listeners here
    },
  },
});

  

