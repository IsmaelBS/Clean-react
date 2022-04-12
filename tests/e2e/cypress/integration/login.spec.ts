import faker from 'faker'

const url: string = Cypress.config().baseUrl = 'http://localhost:8080'

describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Should load with correct initial state', () => {
    cy.getByTestId('email')
      .should('have.attr', 'readOnly')

    cy.getByTestId('password')
      .should('have.attr', 'readOnly')

    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Campo obrigatório')
      .should('have.text', '🔴')

    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Campo obrigatório')
      .should('have.text', '🔴')

    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('email')
      .focus()
      .type(faker.random.word())

    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Valor inválido')
      .should('have.text', '🔴')

    cy.getByTestId('password')
      .focus()
      .type(faker.random.alphaNumeric(3))

    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Valor inválido')
      .should('have.text', '🔴')

    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should not present error state if form is valid', () => {
    cy.getByTestId('email')
      .focus()
      .type(faker.internet.email())

    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Tudo certo!')
      .should('have.text', '✅')

    cy.getByTestId('password')
      .focus()
      .type(faker.random.alphaNumeric(5))

    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Tudo certo!')
      .should('have.text', '✅')

    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if credentials are invalid', () => {
    cy.getByTestId('email')
      .focus()
      .type(faker.internet.email())

    cy.getByTestId('password')
      .focus()
      .type(faker.random.alphaNumeric(5))

    cy.getByTestId('submit').click()
    cy.getByTestId('error-wrap').should('not.have.descendants')
      .getByTestId('spinner').should('exist')
      .getByTestId('main-error').should('not.exist')
      .getByTestId('spinner').should('not.exist')
      .getByTestId('main-error').should('contain.text', 'Credenciais inválidas')
    cy.url().should('eq', `${url}/login`)
  })
})
