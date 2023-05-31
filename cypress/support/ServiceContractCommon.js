Cypress.Commands.add('TapOnServiceContractTab',() => {

    cy.get('.AgrNavContainer > .s-column > .s-element > .ng-binding').click()
    cy.get('#ServiceContracts > .btn-caption').click()
    cy.get('[data-uipath="ReAssignOwner"]').should('be.visible')
})

Cypress.Commands.add('AddRevision',() => {
    
    cy.get('[aria-label="Press Space to toggle row selection (unchecked)"]').click()
    cy.get('[data-uipath="AddRevision"]').click()
    cy.get('[aria-controls="OpportunityIdglookup_Input_listbox"]').click()
    cy.wait(2000) 
    cy.get('[id="OpportunityIdglookup_Input_listbox"]').should('be.visible').then(() => {
    cy.get('[data-offset-index="3"]').click()})     
    cy.wait(2000) 
    cy.get('[class="k-icon k-i-calendar"]').eq(0).click()
    cy.wait(2000) 
    cy.get('a.k-link[tabindex="-1"][data-value="2022/5/8"][title="Wednesday, June 08, 2022"]').click()
    cy.get('[data-uipath="GenericPopupForm/PopupSave"] > .btn-caption').click()
})