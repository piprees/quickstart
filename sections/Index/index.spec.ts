import { STYLES_LARGE } from '../../components/Button/constants'
export const title = 'Integration/sections/Index'

context(title, () => {
  beforeEach(() => cy.visit('http://localhost:3000/en'))

  context(`${title}:Button`, () => {
    it('Contains the button', () =>
      cy.get('[data-test-id="IndexButton"]').should('exist'))

    it('Has large styles', () =>
      cy.get('[data-test-id="IndexButton"]').should('have.class', STYLES_LARGE))

    it('Alerts when clicked', () => {
      cy.on('window:alert', (str) =>
        expect(str).to.equal(`With typescript and Jest`)
      )
      cy.get('[data-test-id="IndexButton"]').click()
    })
  })
})
