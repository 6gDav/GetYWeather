import GetCountryByCity from './GetCountryByCity'; 
import fetchMock from 'fetch-mock';

const mockApiResponse = [
    {
        country: 'Hungary',
        name: 'Budapest',
    },
];

describe('GetCountryByCity', () => {
    beforeEach(() => {
        fetchMock.mock(
            'https://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=your_api_key',
            mockApiResponse
        );
    });

    afterEach(() => {
        fetchMock.restore();
    });

    it('should return the correct country for a valid city', async () => {
        const city = 'London';
        const result = await GetCountryByCity(city);

        expect(result).toBe('England');
    });

    it('should handle API errors gracefully', async () => {
        fetchMock.mock(
            'https://api.openweathermap.org/geo/1.0/direct?q=NonExistentCity&limit=1&appid=your_api_key',
            500 
        );

        const city = 'NonExistentCity';
        const result = await GetCountryByCity(city);

        expect(result).toBeNull(); 
    });

    it('should return null if the city is not found', async () => {
        fetchMock.mock(
            'https://api.openweathermap.org/geo/1.0/direct?q=NonExistentCity&limit=1&appid=your_api_key',
            [] 
        );

        const city = 'NonExistentCity';
        const result = await GetCountryByCity(city);

        expect(result).toBeNull(); 
    });
});
