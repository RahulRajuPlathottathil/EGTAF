const { defineConfig } = require("cypress")

module.exports = defineConfig({
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        configFile: "reporter-config.json",
    },
    chromeWebSecurity: false,
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
        excludeSpecPattern:"cypress/e2e/other/*.js",
        baseUrl:null,
        pageLoadTimeout:150000,
        defaultCommandTimeout:150000,
        env:{
          baseUrl:"task.html"
        }
    },
})
