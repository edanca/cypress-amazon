Cypress.Commands.add('prepareBrowser', path => {
  if (path != undefined) {
    cy.visit(`${Cypress.env('baseUrl')}/${path}`)
  } else {
    cy.visit(Cypress.env('baseUrl'))
  }
  cy.viewport('macbook-15')
  cy.mockGeolocation();
})