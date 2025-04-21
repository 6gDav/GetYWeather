import GetCountryByCity from './GetCountryByCity'; // Az importálás módja a saját projekt struktúrádtól függ
import fetchMock from 'fetch-mock';

// Mock API válasz adat
const mockApiResponse = [
    {
        country: 'Hungary',
        name: 'Budapest',
    },
];

describe('GetCountryByCity', () => {
    beforeEach(() => {
        // Előzetes setup: mock API válasz
        fetchMock.mock(
            'https://api.openweathermap.org/geo/1.0/direct?q=Budapest&limit=1&appid=your_api_key',
            mockApiResponse
        );
    });

    afterEach(() => {
        // Az összes mock törlése minden teszt után
        fetchMock.restore();
    });

    it('should return the correct country for a valid city', async () => {
        const city = 'Budapest';
        const result = await GetCountryByCity(city);

        expect(result).toBe('Hungary');
    });

    it('should handle API errors gracefully', async () => {
        fetchMock.mock(
            'https://api.openweathermap.org/geo/1.0/direct?q=NonExistentCity&limit=1&appid=your_api_key',
            500 // Mock error response
        );

        const city = 'NonExistentCity';
        const result = await GetCountryByCity(city);

        expect(result).toBeNull(); // Elvárjuk, hogy null-t adjon vissza hiba esetén
    });

    it('should return null if the city is not found', async () => {
        fetchMock.mock(
            'https://api.openweathermap.org/geo/1.0/direct?q=NonExistentCity&limit=1&appid=your_api_key',
            [] // Üres válasz (city nem található)
        );

        const city = 'NonExistentCity';
        const result = await GetCountryByCity(city);

        expect(result).toBeNull(); // Elvárjuk, hogy null-t adjon vissza, ha a város nem található
    });
});
