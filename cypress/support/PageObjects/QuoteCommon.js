Cypress.Commands.add('TapOnAllQuote',() => {

    cy.intercept({
        method: 'GET',
        url: 'https://pptqa.servicepathlive.com/Spa/api/*'
      }).as('waitForAllQuotesPageLoad')
      cy.get('.AgrNavContainer > .s-column > .s-element > .ng-binding').click()
    cy.get('[data-uipath="SalesNavigator/QuoteIcon"]').click()
    
    cy.wait('@waitForAllQuotesPageLoad',{ timeout: 60000 })
})

Cypress.Commands.add('CreateNewQuote',() => {

    cy.intercept({
        method: 'GET',
        url: 'https://pptqa.servicepathlive.com/Spa/api/ColumnPreferences?gridName=QuotePricingGrid'
      }).as('waitForStandardsolutionPageLoad')

      cy.get('[name="AddIcon"]').click()
      cy.get('[data-uipath="Model_0"]').click()
      cy.get('[data-required-msg="Customer is required"]').type('DO_NOT_USE_ForAutomationOnly')
      cy.get('ul[id="quickcreatecmb_CustomerIdquickcreatelookup_Input_listbox"]').click();
      cy.get('div[id="quickcreatecmb_OpportunityId_quickcreatesearchbtnicon"]').click();
      cy.get('[data-offset-index="3"] > .k-state-default').click()
      cy.wait(5000)
      cy.get('.wizardFooter > .s-column > #Next').click()
      cy.get('[name="btnSolutionType0"]').click()
      cy.get('[data-uikey="Next"]').click()
      cy.wait('@waitForStandardsolutionPageLoad', { timeout: 60000 })
})

Cypress.Commands.add('SerachQuoteById',() => {

    cy.intercept({ 
        method: 'GET', 
        url: 'https://pptqa.servicepathlive.com/Spa/api/advancedquotes/GetQuoteMetrics?quoteId=quotes/**' 
      }).as('waitForSingleQuotePageLoad')

    cy.get('[id="txtentitygrid_Input"]').type('376549-3126')
    cy.pause()
    cy.get('.ag-row > [aria-colindex="2"]').click()
    //cy.wait('@waitForSingleQuotePageLoad', { timeout: 60000 })
    //cy.get('[id="Quote_Imports"]').should('be.visible')
})

Cypress.Commands.add('CreateImport', () => {

    cy.intercept({
        method: 'GET',
        url: 'https://pptqa.servicepathlive.com/Spa/api/genericrequest?**'
      }).as('waitForImportNamePage')

    cy.get('#Quote_Imports > .btn-caption').click()
    cy.get('[title="Add New"]').should('be.visible').click()
    cy.get('#Name_Input').type('TestNG')
    cy.get('[class="s-choicegroupcombobox-input-container s-editable-container col-md-8"]').eq(1).click()
    cy.get('ul[id="ParsingStrategy_listbox"] [data-offset-index="0"]').click()
    cy.get('[data-uikey="AddForm/Save"]').click()
    cy.wait('@waitForImportNamePage', { timeout: 90000 })

})