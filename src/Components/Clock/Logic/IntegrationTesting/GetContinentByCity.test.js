import GetContinentByCity from './path-to-your-function'; 
import fetchMock from 'jest-fetch-mock';


describe('GetContinentByCity', () => {
    beforeEach(() => {
        fetchMock.resetMocks(); 
    });

    it('should return continent for a valid city', async () => {
        // Mock válasz adat
        const mockData = {
            results: [
                {
                    components: {
                        continent: 'Europe',
                    },
                },
            ],
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockData));

        const continent = await GetContinentByCity('London');

        expect(continent).toBe('Europe');
    });

    it('should return null if no continent is found', async () => {
        const mockData = {
            results: [],
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockData));

        const continent = await GetContinentByCity('UnknownCity');

        expect(continent).toBeNull();
    });

    it('should handle API errors gracefully', async () => {
        fetchMock.mockRejectOnce(new Error('API request failed'));

        const continent = await GetContinentByCity('Budapest');

        expect(continent).toBeNull();
    });

    it('should handle empty city input', async () => {
        const continent = await GetContinentByCity('');

        expect(continent).toBeNull();
    });
});
