Cypress.Commands.add('login', (usuario, clave) => {
  cy.get('[data-test="username"]').type(usuario)
  cy.get('[data-test="password"]').type(clave)
  cy.get('[data-test="login-button"]').click()
})