


    
Cypress.Commands.add('AdminRule',() => {

    cy.intercept({ 
        method: 'GET', 
        url: 'https://ppttest.servicepathlive.com/Spa/api/RecentRecords/SalesRecentRecords' 
      }).as('waitForPageLoad')
    
      cy.intercept({ 
        method: 'GET', 
        url: 'https://ppttest.servicepathlive.com/Spa/api/RulesGroup/*' 
      }).as('waitForRulePageLoad')
      
      cy.intercept({ 
        method: 'GET', 
        url: 'https://ppttest.servicepathlive.com/Spa/api/navitems/SideBarNavItems?navkey=admin' 
      }).as('waitForAdminPageLoad')

    cy.wait('@waitForPageLoad', { timeout: 90000 })
    cy.get('.gn-icon').click()
    cy.get('[id="SettingsIcon"]').click()
    cy.get('[iconkey="AdministratorIcon"]').click()
    cy.wait('@waitForAdminPageLoad', { timeout: 50000 })
    cy.get('[id="rules"]').click()

})
Cypress.Commands.add('AddNewRule',() => {
    cy.get('[data-uikey="AddNewRule"]').click()
      cy.get('[ng-click="NewRuleModel_Click()"]').click()
      cy.get('[data-required-msg="Name is a required field"]').type('NewTestAuto')
      cy.get('[data-uipath="GenericPopupForm/PopupSave"]').click()
})

Cypress.Commands.add('SearchNewRule',() => {

    cy.intercept({ 
        method: 'GET', 
        url: 'https://ppttest.servicepathlive.com/Spa/api/organizationtrees/*' 
      }).as('waitForSearchedItem')

    cy.get('[name="RulesTreeView_txtbox_Input"]').type('NewTestAuto')
      cy.get('div[id="RulesTreeViewClear"]').click()
      cy.wait('@waitForSearchedItem', {timeout:5000})
      cy.get('[class="TreeLevelTwo"]').eq(0).click()
})
