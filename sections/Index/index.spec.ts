import { STYLES_LARGE } from '../../components/Button/constants'
export const title = 'Index'

context('sections/Index', () => {
  let stub: Cypress.Agent<any>

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    stub = cy.stub()
    cy.on('window:alert', stub)
  })

  context('sections/Index:Button', () => {
    it('Contains the button', () =>
      cy
        .get('[data-test-id="Index"]')
        .should('contain', '[data-test-id="IndexButton"]'))

    it('Has large styles', () =>
      cy.get('[data-test-id="IndexButton"]').should('have.class', STYLES_LARGE))

    it('Alerts when clicked', () => {
      cy.get('[data-test-id="IndexButton"]').click()
      expect(stub.getCall(0)).to.be.calledWith(`With typescript and Jest`)
    })
  })
})
