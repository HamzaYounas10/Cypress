import '../support/ServiceContractCommon'
describe('This File contains test cases of Service Contract Tab', () => {

it('Verify Service contract tab is accessible',() => {
    cy.TapOnServiceContractTab();
})

it('Verify User can create Add revision in Service Contracts list',() => {
    cy.TapOnServiceContractTab();
    cy.get('[ng-model="entitygridSearchText" ]').eq(0).type('D101291M')
    cy.AddRevision()
    cy.url().should('include', '/solutionslist/resalemaintsolution').then((SolutionList) => {
          cy.writeFile('cypress/fixtures/SolutionListUrl.json', { AddRevisions: SolutionList });
        });
})
it.only('Verify user Add products in Solution',() => {

    cy.readFile('cypress/fixtures/SolutionListUrl.json').then(fileData => {
        cy.visit(fileData.AddRevisions);
    cy.get('[class="s-element s-column NextIcon col-md-2"]').click()
    cy.get('select[name="vendorCmbCatalogueforBrowser"]')
  .select('Canon')
  .then(() => {
    const selectedValue = 'Canon';
    cy.get('input[name="selectCatalogueInput"]')
      .clear()
      .type(selectedValue);
  });



    // cy.get('[aria-owns="vendorCmbCatalogueforBrowser_listbox"]').should('be.visible').click().type('Canon')
    // cy.get('[ref="eCenterViewport"]').click()
    // cy.get('#gcbBrandsglookup > .s-editable-container > .k-widget > .k-dropdown-wrap > .k-input').click().type('Canon')
    // cy.get('[ref="eCenterViewport"]').click()
    // cy.get('[name="VendorCategoryTree_txtbox_Input"]').click().type('7994a')
    // cy.get('[data-uipath="PlusButton"]').click()
    // cy.wait(3000)
    // cy.get('[ng-show="VendorProduct.SKU"]').click() 
    // cy.wait(3000)
    // cy.get('input[ng-model="VendorProduct.Alias"]').type('ABC123');
    //cy.get('[ng-blur="_click()"]').eq(4).click().type('1234')
    // cy.pause()

    // cy.get('.col-md-5 > .s-element > .s-choicegroupcombobox-input-container > .k-widget > .k-dropdown-wrap > .k-input').click().type('Test-SP03')
    // cy.get('[ng-show="VendorProduct.SKU"]').click() 
    // cy.get('[data-uipath="GenericPopupForm/PopupSave"]')
    

    
    })
    
})
});