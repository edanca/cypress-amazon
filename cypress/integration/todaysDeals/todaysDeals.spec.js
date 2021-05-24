import base from '../../resources/Base'

context("Today's Offers", () => {
  beforeEach(() => {
    cy.prepareBrowser()
    
    base.homePage
      .selectTodaysDeals()
  })

  it('Validate side bar filters is visible', () => {
    base.internationalSalesOffers
      .sideBarFilters()
      .should('be.visible')
  })

  it('Validate page has result items', () => {
    base.internationalSalesOffers
      .resultItems()
      .should('be.visible')
  })
})