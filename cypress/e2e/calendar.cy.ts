describe('Calendar Alert Feature', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8100/home');
    });
  
    it('should display the calendar and allow selecting a date', () => {
      cy.get('.calendar').should('be.visible').scrollIntoView({ offset: { top: 0, left: 0 } });

      cy.get('.calendar .rdp-day').first().click({ force: true });
  
      cy.get('.calendar .rdp-day_selected').should('exist');
    });
  
    it('should allow entering an email address and description', () => {
      cy.get('.calendar .rdp-day').first().click({ force: true });
  
      cy.get('input[type="email"]').first().type('test@example.com');
      cy.get('input[type="text"]').first().type('Weather alert for test date');
  
      cy.get('input[type="email"]').first().should('have.value', 'test@example.com');
      cy.get('input[type="text"]').first().should('have.value', 'Weather alert for test date');
    });
  
    it('should trigger an alert if email is valid and date is in the future', () => {
      cy.get('.calendar .rdp-day').not('.rdp-day_disabled').first().click({ force: true });
  
      cy.get('input[type="email"]').first().type('test@example.com');
      cy.get('input[type="text"]').first().type('Weather alert for test date');
  
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub');
      });
  
      cy.get('button[type="submit"]').click();
  
      cy.get('@alertStub').should('be.calledWith', 'Notification email sent.');
    });
  
    it('should show error alert if email is missing or date is invalid', () => {
      cy.get('.calendar .rdp-day').first().click({ force: true });
  
      cy.get('input[type="email"]').first().clear();
  
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub');
      });
  
      cy.get('button[type="submit"]').click();
  
      cy.get('@alertStub').should('be.calledWith', 'Please enter a valid email address or a valid date.');
    });
  
    it('should prevent alert setting for past dates', () => {
      cy.get('.calendar .rdp-day').last().click({ force: true });
  
      cy.get('input[type="email"]').first().type('test@example.com');
      cy.get('input[type="text"]').first().type('Weather alert for past date');
  
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub');
      });
  
      cy.get('button[type="submit"]').click();
  
      cy.get('@alertStub').should('be.calledWith', 'Please enter a valid email address or a valid date.');
    });
  });
  