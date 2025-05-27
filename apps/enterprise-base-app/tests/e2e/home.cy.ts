// tests/e2e/home.cy.js

describe('Homepage', () => {
  it('should display the welcome headline', () => {
    cy.visit('/')
    cy.contains('Welcome').should('exist')
  })
})