class InternationalSalesOffersGrid {
  locators = {
    itemResult: 'div.a-section div.dealTile'
  }

  getItem = () => {
    return cy.get(this.locators.itemResult)
  }
}

export default new InternationalSalesOffersGrid()