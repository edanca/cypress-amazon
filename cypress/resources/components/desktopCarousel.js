import awsShipsPage from '../pages/awsShipsPage'

class DesktopCarousel {
  
  locators = {
    'carousel': '[data-a-carousel-options] .a-carousel-center',
    'nextPageArrow': '.a-carousel-goto-nextpage',
    'prevPageArrow': '.a-carousel-goto-prevpage'
  }

  selectCarouselImageNumber(carouselNumber) {
    if (carouselNumber >= 1) {
      this._selectCarouselImage()
    } else if (carouselNumber == 2) {
      this
        ._selectNextPageArrow()
        ._selectCarouselImage()
    }
    return awsShipsPage
  }

  _selectCarouselImage() {
    cy.wait(2000)
    cy.get(this.locators.carousel).click(600, 100)
    return awsShipsPage
  }

  _selectNextPageArrow() {
    cy.get(this.locators.nextPageArrow).click()
    return this
  }

  _selectPrevPageArrow() {
    cy.get(thus.locators.prevPageArrow).click()
    return this
  }
}

export default new DesktopCarousel()