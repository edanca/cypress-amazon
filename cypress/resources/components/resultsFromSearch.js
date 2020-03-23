import detailsPage from '../pages/detailsPage'

class ResultsFromSearch {
  
  locators = {
    'resultsList': 'span[data-component-type="s-product-image"] img',
    'latestArrivals_leftArrow': '.a-row .a-carousel-goto-prevpage',
    'latestArrivals_rightArrow': '.a-row .a-carousel-goto-nextpage',
  }

  _getResultsList() {
    return cy.get(this.locators.resultsList)
  }

  _getSpecificResultFromList(resultNumber) {
    return this._getResultsList().eq(resultNumber - 1)
  }

  selectSpecificResultFromList(resultNumber) {
    this._getSpecificResultFromList(resultNumber).click()
    return detailsPage
  }
}

export default new ResultsFromSearch()