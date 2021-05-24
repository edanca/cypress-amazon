import internationalOffersGrid from '../components/internationalOffersGrid'
import sideBarNavigator from '../components/sideBarFilters'

class InternationalSalesOffersPage {
  sideBarFilters = () => {
    return sideBarNavigator.getSideBarNavigator()
  }

  resultItems = () => {
    return internationalOffersGrid.getItem()
  }
}

export default new InternationalSalesOffersPage()