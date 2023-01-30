describe('Login de usuários no Alura Pic', () => {

    beforeEach(() => {
        cy.visit('/')
        
        /*cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost')*/
    })

    it('Fazer Login de Usuário Valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        //cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('Fazer Login de Usuário Inválido', () => {
        cy.login('Jaqueline', '1234')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })
})