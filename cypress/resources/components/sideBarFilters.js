class SideBarNavigator {
  locators = {
    'id': '#widgetFilters',
  }

  getSideBarNavigator = () => {
    return cy.get(this.locators.id)
  }
}

export default new SideBarNavigator()