# Cypress E2E & API Automation Portfolio

## Descripción

Proyecto de automatización de pruebas desarrollado con **Cypress** y **JavaScript**, enfocado en validar flujos funcionales End-to-End (UI) sobre la aplicación web **Swag Labs** y servicios web **API REST** mediante `cy.request`, aplicando buenas prácticas de estructura, reutilización de código y separación de datos.

## Tecnologías y Herramientas

- **Framework de Automatización:** Cypress (E2E Testing & API Testing)
- **Lenguaje:** JavaScript (ES6+)
- **Entorno de Ejecución:** Node.js
- **Editor de Código:** Visual Studio Code

## Cobertura de Pruebas y Buenas Prácticas

### 1. Pruebas End-to-End (UI) - Swag Labs (`cypress/e2e/login_y_producto.cy.js`)
- Inicio de sesión válido y verificación de URL e inventario.
- Validación de mensaje de error ante usuario bloqueado.
- Ordenamiento de productos mediante elemento `<select>` y agregado al carrito.
- Flujo completo hacia el carrito utilizando comando personalizado (`cy.login`).

### 2. Pruebas de API REST (`cypress/e2e/api_requests.cy.js`)
- **GET**: Consulta de recurso existente, validación de código de estado HTTP `200` y estructura del cuerpo JSON.
- **POST**: Creación de nuevo recurso, validación de código de estado HTTP `201` e integridad de los datos enviados.

### Buenas Prácticas Aplicadas
- **Hooks (`beforeEach`)**: Preparación limpia del entorno antes de cada escenario.
- **Fixtures (`cypress/fixtures/usuarios.json`)**: Separación de datos de prueba respecto a la lógica de los scripts.
- **Custom Commands (`cypress/support/commands.js`)**: Encapsulamiento del flujo de autenticación (`cy.login`) para evitar duplicación de código.

## Ejemplo de Caso de Prueba

**Escenario:** Inicio de sesión con comando personalizado y verificación de producto en el carrito (`cypress/e2e/login_y_producto.cy.js`).

1. Navegar a la página de inicio de Swag Labs (`https://www.saucedemo.com/`).
2. Ejecutar el comando personalizado `cy.login()` utilizando credenciales válidas cargadas desde `usuarios.json`.
3. Hacer clic en el botón **Add to cart** del producto *Sauce Labs Backpack*.
4. Hacer clic en el ícono del carrito de compras.
5. **Resultado esperado:** La URL incluye `/cart.html` y el producto *Sauce Labs Backpack* se muestra visible en el listado del carrito.

## Cómo Ejecutar el Proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Flavio-user/cypress-e2e-portfolio.git
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Abrir la interfaz gráfica de Cypress:
   ```bash
   npx cypress open
   ```

## Autor

- **Flavio Matías Baldini** – QA Automation Tester
- **LinkedIn:**
