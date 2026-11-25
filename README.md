# Cypress E2E & API Automation Portfolio

Proyecto de automatización de pruebas desarrollado con **Cypress** y **JavaScript**, aplicando buenas prácticas de estructura, reutilización de código y validación de servicios REST.

## Tecnologías y herramientas
- **Cypress** (E2E Testing & API Testing)
- **JavaScript (ES6+)**
- **Node.js**
- **Visual Studio Code**

## Cobertura de pruebas

### 1. Pruebas End-to-End (UI) - Swag Labs (`cypress/e2e/login_y_producto.cy.js`)
- Inicio de sesión válido y verificación de URL e inventario.
- Validación de mensaje de error ante usuario bloqueado.
- Ordenamiento de productos mediante elemento `<select>` y agregado al carrito.
- Flujo completo hacia el carrito utilizando comando personalizado (`cy.login`).

### 2. Pruebas de API REST (`cypress/e2e/api_requests.cy.js`)
- **GET**: Consulta de recurso existente, validación de código de estado HTTP `200` y estructura del cuerpo JSON.
- **POST**: Creación de nuevo recurso, validación de código de estado HTTP `201` e integridad de los datos enviados.

## Buenas prácticas aplicadas
- **Hooks (`beforeEach`)**: Preparación limpia del entorno antes de cada escenario.
- **Fixtures (`cypress/fixtures/usuarios.json`)**: Separación de datos de prueba respecto a la lógica de los scripts.
- **Custom Commands (`cypress/support/commands.js`)**: Encapsulamiento del flujo de autenticación (`cy.login`) para evitar duplicación de código.

## Cómo ejecutar el proyecto

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
