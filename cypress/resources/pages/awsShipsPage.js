class AwsShipsPage {

  pageTitle = 'Amazon International Shopping Help @ Amazon.com'
  
  locators = {}

  getPageTitle() {
    return cy.title()
  }

}

export default new AwsShipsPage()