const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: './tests/e2e/**/*.cy.{js,ts}',
    baseUrl: 'http://localhost:3000',
  },
})
