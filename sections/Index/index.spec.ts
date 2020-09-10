import { STYLES_LARGE } from '../../components/Button/constants'
export const title = 'Integration/sections/Index'

const BUTTON_SELECTOR = '[data-test-id="IndexButton"]'
const ALERT_TEXT = `With typescript and Jest`

context(title, () => {
  beforeEach(() => cy.visit('/en'))

  context(`${title}:Button`, () => {
    it('Contains the button', () => cy.get(BUTTON_SELECTOR).should('exist'))

    it('Has large styles', () =>
      cy.get(BUTTON_SELECTOR).should('have.class', STYLES_LARGE))

    it('Alerts when clicked', () => {
      cy.on('window:alert', (str) => expect(str).to.equal(ALERT_TEXT))
      cy.get(BUTTON_SELECTOR).click()
    })
  })
})
