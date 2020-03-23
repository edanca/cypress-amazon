class TraditionalSearchResults {
  
  locators = {
    'resultImages': '#mainResults .s-card img',
  }

  selectResultFromPage(resultNumber) {
    cy.get(this.locators.resultImages).eq(resultNumber).click()
  }
}

export default new TraditionalSearchResults()