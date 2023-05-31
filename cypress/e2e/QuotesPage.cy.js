import commonObjects from '../support/PageObjects/commonObjects.js'
import '../support/PageObjects/QuoteCommon.js'

const PO = new commonObjects()

describe('This File contains all test cases of All quotes feature', () => {
  
  it.skip('verify sales navigator button is visible', () => {
    cy.get('[data-uipath="SalesNavigator"]').should('be.visible')
  })

  it.skip('verify delete icon is visible in all quote', () => {
    cy.TapOnAllQuote()    
    cy.get('[name="DeleteSvg"]').should('be.visible')
    cy.writeFile('cypress/fixtures/urlsave.json', { url: 'https://ppttest.servicepathlive.com/Spa/#/salesnavigator/allquotes' });
  })

  it('create new quote', () => {
    cy.TapOnAllQuote();
    cy.CreateNewQuote();
    //cy.get('[data-uipath="QuoteDetail/sidebar/Root/pricing"]').should('be.visible');
    cy.url().should('include', '/quotes/id').then(() => {
      cy.url().then(NewQuote => {
        cy.writeFile('cypress/fixtures/NewQuoteUrl.json', { Currenturl: NewQuote });
      });
    });
  })
  
  it.skip('Verify that quote is search by ID', () => {

    cy.TapOnAllQuote()
    cy.SerachQuoteById()
  })

  it('Create new import', () => {

    // cy.TapOnAllQuote()
    // cy.SerachQuoteById()
    cy.readFile('cypress/fixtures/NewQuoteUrl.json').then(fileData => {
      // Do something with the file data
      cy.visit(fileData.Currenturl);
    });

    
    //cy.CreateImport()

  })

  it.skip('Upload file in import', () => {

    cy.TapOnAllQuote()
    cy.SerachQuoteById()
    cy.CreateImport()
    cy.get('[data-uikey="SolutionUpload"]').click()
    cy.fixture('sP - TestMaintimportAddRev.json').then((fileContent) => {
      cy.get('#ExcelFileSelection > input').attachFile({
        fileContent,
        fileName: 'data.json',
        mimeType: 'application/json'
      })
    })
    })

  it.skip('Verify the TCV value', () => {

    cy.intercept({ 
      method: 'GET', 
      url: 'https://pptqa.servicepathlive.com/Spa/api/advancedquotes/GetQuoteMetrics?quoteId=quotes/*' 
    }).as('waitForQuoteOpen')


    cy.readFile('cypress/fixtures/NewQuoteUrl.json').then(fileData => {
      cy.visit(fileData.Currenturl);
    });
    cy.get('[ng-class="popup-metric qtotalValue"]').eq(1).invoke('text').then(text => {
    var tcv=text;
    cy.writeFile('cypress/fixtures/TCVvalue.json', { TcvValue: tcv });
    });
  })
});
