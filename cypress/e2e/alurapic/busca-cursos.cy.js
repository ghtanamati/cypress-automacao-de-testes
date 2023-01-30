describe('Buscar Cursos na Alura', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('Buscar Curso de Python', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('python');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
          .should('contain', 'Formação Estatística com Python');
    })
})