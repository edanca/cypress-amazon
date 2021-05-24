import internationalSalesOffers from '../pages/internationalSalesOffersPage'
import resultsPage from '../pages/resultsPage'

class NavBar {
  
  locators = {
    'searchBar': 'input[name="field-keywords"]',
    'searchBtn': '[value="Go"]',
    'navAccountMenu': '[data-nav-role="signin"]',
    'suggestions': '#suggestions-template div#suggestions div',
    'todaysDeals': "Today's Deals",
  }
  
  #suggestions = (number) => {
    return cy.get(this.locators.suggestions).eq(number - 1)
  }

  typeInSearchBar = (text) => {
    cy.get(this.locators.searchBar, {log: true}).type(text)
    cy.wait(500)
    return this
  }

  clickSearchBtn = () => {
    cy.get(this.locators.searchBtn).click()
    return resultsPage
  }

  selectSuggestionNumber = (suggestionNumber) => {
    this.#suggestions(suggestionNumber).click()
    return resultsPage
  }

  selectTodaysDeals = () => {
    cy.get('a').contains(this.locators.todaysDeals).click()
    return internationalSalesOffers
  }
}

export default new NavBar()