import resultsPage from '../pages/resultsPage'

class NavBar {
  
  locators = {
    'searchBar': 'input[name="field-keywords"]',
    'searchBtn': '[value="Go"]',
    'navAccountMenu': '[data-nav-role="signin"]',
    'suggestions': '#suggestions-template div#suggestions div'
  }
  
  _suggestions(number) {
    return cy.get(this.locators.suggestions).eq(number - 1)
  }

  typeInSearchBar(text) {
    cy.get(this.locators.searchBar, {log: true}).type(text)
    return this
  }

  clickSearchBtn() {
    cy.get(this.locators.searchBtn).click()
    return resultsPage
  }

  selectSuggestionNumber(suggestionNumber) {
    this._suggestions(suggestionNumber).click()
    return resultsPage
  }
}

export default new NavBar()