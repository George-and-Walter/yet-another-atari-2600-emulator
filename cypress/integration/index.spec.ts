context('emulator index page', () => {
    it('renders the welcome screen', () => {
        cy.visit('http://localhost:8081');

        cy.get('[data-load-file]').should('exist');
    });
});
