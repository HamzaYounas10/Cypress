import 'cypress-file-upload';

Cypress.Commands.add('login',() => {
    cy.intercept({ 
        method: 'GET', 
        url: 'https://pptqa.servicepathlive.com/Spa/api/RecentRecords/SalesRecentRecords' 
      }).as('waitForPageLoad')

    cy.visit(Cypress.env('pptqa'))
    cy.get('[id="Username"]').type(Cypress.env('username'))
    cy.get('[id="Password"]').type(Cypress.env('password'))
    cy.get('[value="login"]').click()
    cy.wait('@waitForPageLoad', { timeout: 60000 })
})

 beforeEach(() => {
    cy.login()
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
  