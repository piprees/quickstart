export const title = 'Integration/sections/Account'

const NOW = new Date()
NOW.setHours(NOW.getHours() + 1)

const testUserSession = {
  user: {
    name: 'Test User',
    email: 'test@quickstart.piprees.dev',
    image: '',
  },
  accessToken: 'testToken',
  expires: NOW.toISOString(),
}

context(title, () => {
  beforeEach(() => cy.visit('/en/account'))

  context(`${title}:Logged Out`, () =>
    it('Contains the login bar', () =>
      cy.get('[data-test-id="SignUpButton"]').should('exist'))
  )

  xcontext(`${title}:Logged In`, () => {
    beforeEach(() => {
      cy.route2('/api/auth/**', [testUserSession])
    })

    xit('Shows the welcome message', () =>
      cy.get('[data-test-id="AccountButton"]').should('exist'))
  })
})
