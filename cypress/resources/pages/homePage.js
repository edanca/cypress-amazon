import awsShipsPage from './awsShipsPage'
import desktopGrid  from '../components/desktopGrid'
import desktopCarousel from '../components/desktopCarousel'
import navbar       from '../components/navbar'
import resultsPage  from './resultsPage'

class HomePage {

  searProductAndSelectResult(product, resultNumber) {
    this
      .searchProduct(product)
      .selectResultAfterSearch(resultNumber)
  }

  selectProductFromDesktopGridCard(cardNumber, resultNumber) {
    this
      .selectDektopGridCard(cardNumber)
      // .selectTraditionalResult(resultNumber)
  }

  typeInSearchBarAndSelectFromSuggestion(product, suggestionNumber) {
    navbar
      .typeInSearchBar(product)
      .selectSuggestionNumber(suggestionNumber)
    return resultsPage
  }

  searchProduct(product) {
    navbar
      .typeInSearchBar(product)
      .clickSearchBtn()
    return resultsPage
  }

  selectDektopGridCard(cardNumber) {
    desktopGrid.selectDektopGridCard(cardNumber)
    return resultsPage
  }

  selectDesktopCarousel(carouselImageNumber) {
    desktopCarousel
      .selectCarouselImageNumber(carouselImageNumber)
    return awsShipsPage
  }
}

export default new HomePage()