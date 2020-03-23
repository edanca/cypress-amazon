class DetailsPage {
  locators = {
    'productTitle': '#productTitle'
  }

  getProductTitle() {
    return cy.get(this.locators.productTitle)
  }
}

export default new DetailsPage()