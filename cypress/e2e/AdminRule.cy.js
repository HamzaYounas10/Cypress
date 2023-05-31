import login from '../support/common.js'
import commonObjects from '../support/PageObjects/commonObjects.js'

const PO = new commonObjects()

it('Create New Rule' , () =>{  
    cy.AdminRule()
    cy.AddNewRule()
    cy.SearchNewRule()
})

it('AddNewSection' , () =>{
  cy.AdminRule()
  cy.SearchNewRule()
  cy.get('[data-uipath="RulesDetail/RunActionsSection/AddSection"]').click()
  cy.get('[class="k-item k-menu-item k-state-default k-first k-last"]').click()
  cy.get('[id="IncludedSLA"]').click()
  cy.get('[id="MaintenanceIncludedSLAs"]').eq(0).click()
  cy.get('[id="MaintenanceIncludedSLAs-list"] [aria-hidden="false"]').find('[data-offset-index="3"]').click();
  
})

it('Delete Rule' , () =>{
  cy.AdminRule()
  cy.SearchNewRule()
  cy.get('#DeleteIcon').eq(0).click()
  cy.get('[ng-click="YesBtn_Click()"]').click()
      
  }); 
