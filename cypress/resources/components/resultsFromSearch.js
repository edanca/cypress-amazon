import detailsPage from '../pages/detailsPage'

class ResultsFromSearch {
  
  locators = {
    'resultsList': 'span[data-component-type="s-product-image"] img',
    'latestArrivals_leftArrow': '.a-row .a-carousel-goto-prevpage',
    'latestArrivals_rightArrow': '.a-row .a-carousel-goto-nextpage',
  }

  #getResultsList() {
    return cy.get(this.locators.resultsList)
  }

  #getSpecificResultFromList(resultNumber) {
    return this.#getResultsList().eq(resultNumber - 1)
  }

  selectSpecificResultFromList(resultNumber) {
    this.#getSpecificResultFromList(resultNumber).click()
    return detailsPage
  }
}

export default new ResultsFromSearch()