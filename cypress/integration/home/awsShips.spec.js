import homePage from '../../resources/pages/homePage'
import data from '../../resources/inputData/amazonShips/data'

context('Amazon Ships', () => {
  beforeEach(() => {
    cy.prepareBrowser()
  })

  it('should load Amazon ship page', () => {
    const amazonShipsPageTitle = data.pageTitle
    homePage
      .selectDesktopCarousel(1)
      .getPageTitle()
      .should(pageTitle => {
        expect(pageTitle).to.equal(amazonShipsPageTitle)
      })
  })
})