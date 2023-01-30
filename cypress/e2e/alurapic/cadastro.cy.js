describe('Cadastro de usuários no Alura Pic', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Verifica Mensagem de email Inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('teste');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('Verifica Mensagens de Validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('Verifica Mensagem de Senha com Menos de 8 Caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('Verifica Mensagem: Username Must Be Lowercase', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Username');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    const usuarios = require('../../fixtures/usuarios.json');

    usuarios.forEach(usuario => {
        it('Registro do ' + usuario.fullName, () => {
            cy.new_register(usuario.email, usuario.fullName, usuario.userName, usuario.password);
        })
    })
})