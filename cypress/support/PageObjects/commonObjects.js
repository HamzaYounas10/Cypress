class commonObjects {
    getNextBtn(){
        return cy.get('[data-uikey="Next"]')
    }
    getSaveBtn(){
        return cy.get('[data-uipath="GenericPopupForm/PopupSave"]')
    }
}

export default commonObjects