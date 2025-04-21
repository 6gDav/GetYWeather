// describe('WeatherCards Component', () => {
//     beforeEach(() => {
//         // Mocking the Infos.Data object.
//         cy.window().then((win) => {
//             // Providing mock data for the Infos.Data variable.
//             win.Infos = {
//                 Data: JSON.stringify({
//                     list: [
//                         {
//                             dt_txt: "2025-04-21 12:00:00",
//                             main: { temp: 22 },
//                             weather: [{ description: 'Clear sky', icon: '01d' }]
//                         },
//                         {
//                             dt_txt: "2025-04-22 12:00:00",
//                             main: { temp: 19 },
//                             weather: [{ description: 'Partly cloudy', icon: '02d' }]
//                         },
//                         {
//                             dt_txt: "2025-04-23 12:00:00",
//                             main: { temp: 24 },
//                             weather: [{ description: 'Sunny', icon: '01d' }]
//                         }
//                     ]
//                 })
//             };
//         });
//         cy.visit('/'); // Navigate to the page where your WeatherCards component is rendered.
//     });

//     it('should render weather cards with correct data', () => {
//         // Ensure the weather cards are rendered with the correct data.
//         cy.get('.p-4').should('have.length', 3); // Should render 3 cards

//         // Check if the temperature and description are correctly rendered
//         cy.get('.p-4').eq(0).within(() => {
//             cy.get('p').first().should('contain.text', 'Monday'); // Check for the day
//             cy.get('img').should('have.attr', 'src').and('include', '01d'); // Check if icon URL contains correct icon
//             cy.get('p').eq(1).should('contain.text', '22°C'); // Check temperature
//             cy.get('p').last().should('contain.text', 'Clear sky'); // Check description
//         });

//         cy.get('.p-4').eq(1).within(() => {
//             cy.get('p').first().should('contain.text', 'Tuesday');
//             cy.get('img').should('have.attr', 'src').and('include', '02d');
//             cy.get('p').eq(1).should('contain.text', '19°C');
//             cy.get('p').last().should('contain.text', 'Partly cloudy');
//         });

//         cy.get('.p-4').eq(2).within(() => {
//             cy.get('p').first().should('contain.text', 'Wednesday');
//             cy.get('img').should('have.attr', 'src').and('include', '01d');
//             cy.get('p').eq(1).should('contain.text', '24°C');
//             cy.get('p').last().should('contain.text', 'Sunny');
//         });
//     });

//     it('should handle an empty or malformed Infos.Data gracefully', () => {
//         // Simulate an error or empty data scenario
//         cy.window().then((win) => {
//             win.Infos = { Data: '' }; // Empty data
//         });
//         cy.visit('/'); // Revisit the page

//         // Assert that no cards are rendered
//         cy.get('.p-4').should('have.length', 0); // No weather cards should be displayed
//     });
// });
