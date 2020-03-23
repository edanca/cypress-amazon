/// <reference types="cypress" />

import homePage from '../../resources/pages/homePage'
import data from '../../resources/inputData/home/data'

context('Amazon Homepage', () => {
  beforeEach(() => {
    cy.prepareBrowser()
  })

  it('should search prodcut', () => {
    homePage
      .searchProduct(data.product)
      .selectResultAfterSearch(10)
      .getProductTitle()
      .should('not.be.empty')
  })

  xit('should show cellphone results when clicking desktop grid', () => {
    homePage
      .selectProductFromDesktopGridCard(1, 2)
  })

  it('should select suggestion from search bar', () => {
    homePage
      .typeInSearchBarAndSelectFromSuggestion(data.product, 3)
      .selectResultAfterSearch(1)
      .getProductTitle()
      .should('not.be.empty')
  })
})