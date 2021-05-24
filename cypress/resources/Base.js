import homePage from './pages/homePage'
import detailsPage from './pages/detailsPage'
import resultsPage from './pages/resultsPage'
import inputData from '../resources/inputData/data'
import internationalSalesOffers from '../resources/pages/internationalSalesOffersPage'

class Base {
  constructor() {
    this.inputData = inputData
    this.homePage = homePage
    this.detailsPage = detailsPage
    this.resultsPage = resultsPage
    this.internationalSalesOffers = internationalSalesOffers
  }

  getPageTitle = () => {
    return cy.title()
  }
}

export default new Base()