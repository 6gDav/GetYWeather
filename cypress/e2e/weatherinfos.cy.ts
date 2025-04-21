describe('WeatherInfos Component', () => {
    beforeEach(() => {
        // Setup: Visit the page where the WeatherInfos component is rendered.
        cy.visit('/');  // Adjust the URL based on your app's route
    });

    it('should display temperature and apply correct background color based on temperature', () => {
        // Set up the town name, which triggers the API call
        const townName = 'London';  // Replace with a valid town for testing

        // Intercept API calls to mock the response (optional, if needed)
        cy.intercept('GET', `/api/weather?townName=${townName}`, {
            statusCode: 200,
            body: {
                temperature: 25,  // Modify this value to test different scenarios
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

        // Trigger the API call by selecting a town
        cy.get('input#townNameInput')  // Assume an input field with ID for town name
            .clear()
            .type(townName);

        cy.wait('@weatherData');

        // Check if the temperature is displayed
        cy.get('.tempaterureHeader')
            .should('contain', '25')  // Check that the correct temperature is displayed

        // Check if the background color is applied correctly for the temperature
        cy.get('.tempatureDiv')
            .should('have.css', 'background')
            .and('match', /rgb\(255, 153, 102\)/);  // Check for the color associated with 25°C
    });

    it('should display min, max temperature correctly', () => {
        // Mocking the weather data as above
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

        // Check for the min temperature display
        cy.get('.secodanryTemps h2')
            .contains('Min Temp:')
            .should('include.text', '15');

        // Check for the max temperature display
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

        // Check for the description
        cy.get('.tileStyleContainer p')
            .should('contain', 'Clear Sky');

        // Check for the humidity
        cy.get('.tileStyleContainer p')
            .should('contain', '50');
    });

    // Additional tests for other fields like wind speed, pressure, etc., can be added similarly.
});
