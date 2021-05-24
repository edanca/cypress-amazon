import base from '../Base'
import resultsFromSearch from '../components/resultsFromSearch'
import traditionalSearchResults from '../components/traditionalSearchResults'

class ResultsPage {
  selectResultAfterSearch(resultNumber) {
    resultsFromSearch
      .selectSpecificResultFromList(resultNumber)
    return base.detailsPage
  }

  selectTraditionalResult(resultNumber) {
    traditionalSearchResults
      .selectResultFromPage(resultNumber)
    return base.detailsPage
  }
}

export default new ResultsPage()