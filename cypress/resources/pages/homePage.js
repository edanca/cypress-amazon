import desktopGrid  from '../components/desktopGrid'
import navbar       from '../components/navbar'
import base from '../Base'

class HomePage {

  searProductAndSelectResult = (product, resultNumber) => {
    this
      .searchProduct(product)
      .selectResultAfterSearch(resultNumber)
  }

  selectProductFromDesktopGridCard = (cardNumber, resultNumber) => {
    this
      .selectDektopGridCard(cardNumber)
      // .selectTraditionalResult(resultNumber)
  }

  typeInSearchBarAndSelectFromSuggestion = (product, suggestionNumber) => {
    navbar
      .typeInSearchBar(product)
      .selectSuggestionNumber(suggestionNumber)
    return base.resultsPage
  }

  searchProduct = (product) => {
    navbar
      .typeInSearchBar(product)
      .clickSearchBtn()
    return base.resultsPage
  }

  selectDektopGridCard = (cardNumber) => {
    desktopGrid.selectDektopGridCard(cardNumber)
    return base.resultsPage
  }

  selectTodaysDeals = () => {
    navbar.selectTodaysDeals()
    return base.internationalSalesOffers
  }
}

export default new HomePage()