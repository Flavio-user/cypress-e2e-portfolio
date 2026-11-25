describe('Suite E2E en Swag Labs', () => {
  // HOOK: Se ejecuta automáticamente antes de cada bloque it()
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    // Cargamos los datos del fixture y les ponemos el alias @datosUsuarios
    cy.fixture('usuarios').as('datosUsuarios')
  })

  it('1. Inicia sesión con usuario válido y valida el inventario', function () {
    cy.get('[data-test="username"]').type(this.datosUsuarios.valido)
    cy.get('[data-test="password"]').type(this.datosUsuarios.clave)
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.contains('.title', 'Products').should('be.visible')
  })

  it('2. Muestra mensaje de error al intentar ingresar con usuario bloqueado', function () {
    cy.get('[data-test="username"]').type(this.datosUsuarios.bloqueado)
    cy.get('[data-test="password"]').type(this.datosUsuarios.clave)
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.')
  })

  it('3. Ordena productos con el select y agrega uno al carrito', function () {
    cy.get('[data-test="username"]').type(this.datosUsuarios.valido)
    cy.get('[data-test="password"]').type(this.datosUsuarios.clave)
    cy.get('[data-test="login-button"]').click()

    // SELECT: Seleccionar orden por precio de menor a mayor
    cy.get('[data-test="product-sort-container"]').select('lohi')
    cy.get('[data-test="product-sort-container"]').should('have.value', 'lohi')

    // Agregar el primer producto visible al carrito y validar el contador en 1
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
  })
    
  it('4. Inicia sesión con comando personalizado cy.login y navega al carrito', function () {
    // Uso de Custom Command definido en cypress/support/commands.js
    cy.login(this.datosUsuarios.valido, this.datosUsuarios.clave)

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.url().should('include', '/cart.html')
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').should('be.visible')
  })
})