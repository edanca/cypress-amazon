class DesktopGrid {

  locators = {
    'titles': '[data-a-card-type="basic"] .a-cardui-header h2',
    'imageGrid2': '#desktop-grid-2 img',
    'imageGrid3': '#desktop-grid-3 img',
    'seeMoreLinks': '[data-a-card-type="basic"] .a-cardui-footer a.see-more'
  }

  selectDektopGridCard(cardNumber) {
    if (cardNumber == 1)
      cy.get(this.locators.imageGrid2).click()
    else if (cardNumber == 2)
      cy.get(this.locators.imageGrid3).click()
    else
      throw new Error('CardNotFound', 'Card from desktop grid not found')
    return this
  }
}

export default new DesktopGrid()