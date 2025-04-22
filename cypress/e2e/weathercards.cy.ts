/// <reference types="cypress" />

describe('WeatherCards Component', () => {
    beforeEach(() => {
        // cy.window().then((win) => {
        //     win.Infos = {
        //         Data: JSON.stringify({
        //             list: [
        //                 {
        //                     dt_txt: "2025-04-21 12:00:00",
        //                     main: { temp: 22 },
        //                     weather: [{ description: 'Clear sky', icon: '01d' }]
        //                 },
        //                 {
        //                     dt_txt: "2025-04-22 12:00:00",
        //                     main: { temp: 19 },
        //                     weather: [{ description: 'Partly cloudy', icon: '02d' }]
        //                 },
        //                 {
        //                     dt_txt: "2025-04-23 12:00:00",
        //                     main: { temp: 24 },
        //                     weather: [{ description: 'Sunny', icon: '01d' }]
        //                 }
        //             ]
        //         })
        //     };
        // });
        cy.visit('/');
    });

    it('should render weather cards with correct data', () => {
        cy.get('.p-4').should('have.length', 3);

        cy.get('.p-4').eq(0).within(() => {
            cy.get('p').first().should('contain.text', 'Monday');
            cy.get('img').should('have.attr', 'src').and('include', '01d');
            cy.get('p').eq(1).should('contain.text', '22°C');
            cy.get('p').last().should('contain.text', 'Clear sky');
        });

        cy.get('.p-4').eq(1).within(() => {
            cy.get('p').first().should('contain.text', 'Tuesday');
            cy.get('img').should('have.attr', 'src').and('include', '02d');
            cy.get('p').eq(1).should('contain.text', '19°C');
            cy.get('p').last().should('contain.text', 'Partly cloudy');
        });

        cy.get('.p-4').eq(2).within(() => {
            cy.get('p').first().should('contain.text', 'Wednesday');
            cy.get('img').should('have.attr', 'src').and('include', '01d');
            cy.get('p').eq(1).should('contain.text', '24°C');
            cy.get('p').last().should('contain.text', 'Sunny');
        });
    });

    // it('should handle an empty or malformed Infos.Data gracefully', () => {
    //     cy.window().then((win) => {
    //         win.Infos = { Data: '' }; 
    //     });
    //     cy.visit('/');

    //     cy.get('.p-4').should('have.length', 0); 
    // });
});
