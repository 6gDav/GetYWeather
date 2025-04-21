// describe('Footer Section Tests', () => {
//     beforeEach(() => {
//         // Visit the homepage of your app
//         cy.visit('http://localhost:8100/home');
//     });

//     it('should accept an email address in the subscription form', () => {
//         // Find the input field and type an email
//         const email = 'testuser@example.com';
//         cy.get('input[placeholder="Email Address"]')
//             .type(email)
//             .should('have.value', email);
//     });

//     it('should display an alert if the email is not entered and the button is clicked', () => {
//         // Mock the window.alert to prevent actual alert popup
//         cy.on('window:alert', (text) => {
//             expect(text).to.contains('Enter an email address.');
//         });

//         // Try clicking the send button without entering an email
//         cy.get('button').click();
//     });

//     it('should send the email when a valid email is entered', () => {
//         // Stub the sendEmail function to prevent real HTTP request
//         cy.window().then((window) => {
//             cy.stub(window, 'sendEmail').callsFake((subject, message, to, from) => {
//                 // Simulate a successful email send and check the parameters
//                 expect(subject).to.equal('Thanks for the subscribe');
//                 expect(message).to.equal('Thanks for the subscription it is very kind of you if you want to cancel the subscription just make contact with us.');
//                 expect(to).to.equal('testuser@example.com');
//                 expect(from).to.equal('testuser@example.com');
//                 return true;  // Simulate success
//             });
//         });

//         // Enter a valid email
//         const email = 'testuser@example.com';
//         cy.get('input[placeholder="Email Address"]')
//             .type(email)
//             .should('have.value', email);

//         // Click the send button
//         cy.get('button').click();

//         // Verify that the sendEmail function was called with the correct parameters
//         cy.window().then((window) => {
//             expect(window.sendEmail).to.have.been.calledOnce;
//         });
//     });
// });
