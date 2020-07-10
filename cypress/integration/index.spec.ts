import '../support/commands'

context('emulator index page', () => {
    it('renders the welcome screen', () => {
        cy.visit('http://localhost:8081');

        cy.get('[data-load-file]').should('exist');
    });

    it('Renders the flag on screen', () => {
        cy.visit('http://localhost:8081');

        cy.get('[data-flags]').contains('Carry').should('not.exist');

        cy.fixture('clear-flag.a26').as('game')

        const gamePath = '../fixtures/clear-flag.a26';
        cy.get('[data-flags]').attachFile(gamePath);

        cy.get('[data-flags]').contains('Carry');
    });
});
