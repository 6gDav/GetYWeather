/// <reference types="cypress" />

describe('AIChat Component', () => {
    it('should show alert when AI button is clicked', () => {
        cy.visit('http://localhost:8100');
        cy.wait(1000); 
      
        cy.window().then((win) => {
          cy.stub(win, 'alert').as('alertStub');
        });
      
        cy.get('img[alt="aipicture"]').click();
        cy.get('@alertStub').should('have.been.calledWith', 'Coming soon.');
      });
      
});
