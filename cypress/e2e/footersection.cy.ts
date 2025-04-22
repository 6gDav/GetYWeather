/// <reference types="cypress" />

describe('Footer Section Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8100/home');
    });

    it('should accept an email address in the subscription form', () => {
        const email = 'testuser@example.com';
        cy.get('input[placeholder="Email Address"]')
            .type(email)
            .should('have.value', email);
    });

    it('should display an alert if the email is not entered and the button is clicked', () => {
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Enter an email address.');
        });

        cy.get('button').click();
    });

    // it('should send the email when a valid email is entered', () => {
    //     cy.window().then((window) => {
    //         cy.stub(window, 'sendEmail').callsFake((subject, message, to, from) => {
    //             // Simulate a successful email send and check the parameters
    //             expect(subject).to.equal('Thanks for the subscribe');
    //             expect(message).to.equal('Thanks for the subscription it is very kind of you if you want to cancel the subscription just make contact with us.');
    //             expect(to).to.equal('testuser@example.com');
    //             expect(from).to.equal('testuser@example.com');
    //             return true;  // Simulate success
    //         });
    //     });

    //     const email = 'testuser@example.com';
    //     cy.get('input[placeholder="Email Address"]')
    //         .type(email)
    //         .should('have.value', email);

    //     cy.get('button').click();

    //     cy.window().then((window) => {
    //         expect(window.sendEmail).to.have.been.calledOnce;
    //     });
    // });
});
