// describe('GeoLocationMap Component', () => {
//     beforeEach(() => {
//         // Mock the user data for the town name
//         cy.intercept('GET', 'https://nominatim.openstreetmap.org/search', (req) => {
//             req.reply({
//                 statusCode: 200,
//                 body: [
//                     {
//                         lat: 51.5074,
//                         lon: -0.1278
//                     }
//                 ]
//             });
//         }).as('getCoordinates');

//         // Visit the app or mount the component if running in isolation
//         cy.mount(<NewGeoLocationMap />);
//     });

//     it('should render the map container', () => {
//         cy.get('#map').should('exist');
//         cy.get('#map').should('have.class', 'mapStyle');
//     });

//     it('should initialize the map with the correct coordinates', () => {
//         cy.wait('@getCoordinates'); // wait for the mock response

//         // Verify that the map is centered at the expected coordinates
//         cy.window().then((win) => {
//             const map = win.document.querySelector('#map')._leafletMap;
//             const center = map.getCenter();

//             expect(center.lat).to.be.closeTo(51.5074, 0.01);  // London latitude
//             expect(center.lng).to.be.closeTo(-0.1278, 0.01); // London longitude
//         });
//     });

//     it('should update the map when the town name changes', () => {
//         // Trigger a change in the town name (simulating user input)
//         const newTownName = 'New York';

//         cy.get('input[name="townName"]') // assuming there's an input field for town name
//             .clear()
//             .type(newTownName)
//             .blur(); // Simulate the user submitting the input

//         // Intercept the network request for the new town and mock the coordinates
//         cy.intercept('GET', 'https://nominatim.openstreetmap.org/search', {
//             statusCode: 200,
//             body: [
//                 {
//                     lat: 40.7128,  // New York latitude
//                     lon: -74.0060  // New York longitude
//                 }
//             ]
//         }).as('getNewCoordinates');

//         cy.wait('@getNewCoordinates');

//         // Verify that the map has been updated to the new coordinates
//         cy.window().then((win) => {
//             const map = win.document.querySelector('#map')._leafletMap;
//             const center = map.getCenter();

//             expect(center.lat).to.be.closeTo(40.7128, 0.01);  // New York latitude
//             expect(center.lng).to.be.closeTo(-74.0060, 0.01); // New York longitude
//         });
//     });
// });
