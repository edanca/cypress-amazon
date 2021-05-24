/// <reference types="cypress" />

import base from '../../resources/Base'

context('Amazon Homepage', () => {
  beforeEach(() => {
    cy.prepareBrowser()
  })

  it('should search product', () => {
    base.homePage
      .searchProduct(base.inputData.product)
      .selectResultAfterSearch(10)
      .getProductTitle()
      .should('not.be.empty')
  })

  it('should select suggestion from search bar', () => {
    base.homePage
      .typeInSearchBarAndSelectFromSuggestion(base.inputData.product, 3)
      .selectResultAfterSearch(1)
      .getProductTitle()
      .should('not.be.empty')
  })
})