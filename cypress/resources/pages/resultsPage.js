import detailsPage from './detailsPage'
import resultsFromSearch from '../components/resultsFromSearch'
import traditionalSearchResults from '../components/traditionalSearchResults'

class ResultsPage {
  selectResultAfterSearch(resultNumber) {
    resultsFromSearch
      .selectSpecificResultFromList(resultNumber)
    return detailsPage
  }

  selectTraditionalResult(resultNumber) {
    traditionalSearchResults
      .selectResultFromPage(resultNumber)
    return detailsPage
  }
}

export default new ResultsPage()