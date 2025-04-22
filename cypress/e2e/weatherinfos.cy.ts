describe('WeatherInfos Component', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display temperature and apply correct background color based on temperature', () => {
        const townName = 'London';

        cy.intercept('GET', `/api/weather?townName=${townName}`, {
            statusCode: 200,
            body: {
                temperature: 25,
                description: 'Clear Sky',
                temp_min: 15,
                temp_max: 30,
                humidity: 50,
                feels_like: 26,
                clouds: 10,
                wind_speed: 15,
                pressure: 1013,
                wind_deg: 180,
                wind_gust: 20,
            },
        }).as('weatherData');

        cy.get('input#townNameInput')
            .clear()
            .type(townName);

        cy.wait('@weatherData');

        cy.get('.tempaterureHeader')
            .should('contain', '25')

        cy.get('.tempatureDiv')
            .should('have.css', 'background')
            .and('match', /rgb\(255, 153, 102\)/);
    });

    it('should display min, max temperature correctly', () => {
        const townName = 'London';
        cy.intercept('GET', `/api/weather?townName=${townName}`, {
            statusCode: 200,
            body: {
                temp_min: 15,
                temp_max: 30,
            },
        }).as('weatherData');

        cy.get('input#townNameInput')
            .clear()
            .type(townName);

        cy.wait('@weatherData');

        cy.get('.secodanryTemps h2')
            .contains('Min Temp:')
            .should('include.text', '15');

        cy.get('.secodanryTemps h2')
            .contains('Max Temp:')
            .should('include.text', '30');
    });

    it('should display description and humidity correctly', () => {
        const townName = 'London';
        cy.intercept('GET', `/api/weather?townName=${townName}`, {
            statusCode: 200,
            body: {
                description: 'Clear Sky',
                humidity: 50,
            },
        }).as('weatherData');

        cy.get('input#townNameInput')
            .clear()
            .type(townName);

        cy.wait('@weatherData');

        cy.get('.tileStyleContainer p')
            .should('contain', 'Clear Sky');


        cy.get('.tileStyleContainer p')
            .should('contain', '50');
    });
});
