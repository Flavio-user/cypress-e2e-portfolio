

describe('Pruebas de API con cy.request (GET y POST)', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com'

  it('1. GET - Consulta un recurso existente y valida status 200 y estructura', () => {
    cy.request('GET', `${baseUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
      expect(response.body).to.have.property('title')
      expect(response.body.title).to.be.a('string').and.not.be.empty
    })
  })

  it('2. POST - Crea un nuevo recurso y valida status 201 y datos enviados', () => {
    const nuevoPost = {
      title: 'Prueba QA Automation',
      body: 'Validando creacion de recurso con Cypress',
      userId: 1
    }

    cy.request('POST', `${baseUrl}/posts`, nuevoPost).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.include(nuevoPost)
      expect(response.body).to.have.property('id')
    })
  })
})