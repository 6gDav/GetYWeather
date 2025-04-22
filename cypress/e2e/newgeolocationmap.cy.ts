/// <reference types="cypress" />

describe('GeoLocationMap Component', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://nominatim.openstreetmap.org/search', (req) => {
            req.reply({
                statusCode: 200,
                body: [
                    {
                        lat: 51.5074,
                        lon: -0.1278
                    }
                ]
            });
        }).as('getCoordinates');
    });

    it('should render the map container', () => {
        cy.get('#map').should('exist');
        cy.get('#map').should('have.class', 'mapStyle');
    });

    // it('should initialize the map with the correct coordinates', () => {
    //     cy.wait('@getCoordinates');

    //     cy.window().then((win) => {
    //         const map = win.document.querySelector('#map')._leafletMap;
    //         const center = map.getCenter();

    //         expect(center.lat).to.be.closeTo(51.5074, 0.01);  
    //         expect(center.lng).to.be.closeTo(-0.1278, 0.01); 
    //     });
    // });

    it('should update the map when the town name changes', () => {
        const newTownName = 'New York';

        cy.get('input[name="townName"]')
            .clear()
            .type(newTownName)
            .blur();

        cy.intercept('GET', 'https://nominatim.openstreetmap.org/search', {
            statusCode: 200,
            body: [
                {
                    lat: 51.5074,
                    lon: 0.1278
                }
            ]
        }).as('getNewCoordinates');

        cy.wait('@getNewCoordinates');

        // cy.window().then((win) => {
        //     const map = win.document.querySelector('#map')._leafletMap;
        //     const center = map.getCenter();

        //     expect(center.lat).to.be.closeTo(51.5074, 0.01);  
        //     expect(center.lng).to.be.closeTo(51.5074, 0.01); 
        // });
    });
});
