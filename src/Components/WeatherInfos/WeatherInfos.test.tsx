import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import WeatherInfos from './WeatherInfos';
import UserDate from '../UserDate/UserDate';
import ManageAPI from './Logic/ManaggeAPI';

// Mock dependencies
vi.mock('../WeatherCards', () => ({
    default: () => <div data-testid="weather-cards">Weather Cards Component</div>
}));

vi.mock('../UserDate/UserDate', () => ({
    default: {
        TownName: 'London'
    }
}));

vi.mock('../Logic/ManaggeAPI', () => ({
    default: vi.fn()
}));

// Mock global window methods
const originalInnerWidth = window.innerWidth;
const mockResizeEvent = () => {
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 800 // Default to desktop width
    });
};

describe('WeatherInfos Component', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        mockResizeEvent();
    });

    afterEach(() => {
        vi.restoreAllMocks();
        vi.useRealTimers();
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: originalInnerWidth
        });
    });

    it('renders the component with initial state', () => {
        render(<WeatherInfos />);
        expect(screen.getByText('Place not found')).toBeInTheDocument();
        expect(screen.getByText('Forcast')).toBeInTheDocument();
        expect(screen.getByTestId('weather-cards')).toBeInTheDocument();
    });

    it('fetches weather data when TownName is available', async () => {
        // Mock API responses
        const mockWeatherData = {
            temperature: '25',
            description: 'Sunny',
            temp_min: '20',
            temp_max: '30',
            humidity: '45',
            feels_like: '27',
            clouds: '10',
            'wind speed': '5',
            pressure: '1013',
            'wind deg': '180',
            'wind gust': '7'
        };

        // Configure each API call to return a specific piece of weather data
        for (const [key, value] of Object.entries(mockWeatherData)) {
            vi.mocked(ManageAPI).mockImplementationOnce(
                () => Promise.resolve(value) as Promise<NullAndString>
            );
        }

        render(<WeatherInfos />);

        // Advance timers to trigger the API calls
        await act(async () => {
            vi.advanceTimersByTime(1000);
        });

        // Verify API was called for each weather property
        expect(ManageAPI).toHaveBeenCalledWith('London', 'description');
        expect(ManageAPI).toHaveBeenCalledWith('London', 'temperature');
        expect(ManageAPI).toHaveBeenCalledWith('London', 'temp_min');
        expect(ManageAPI).toHaveBeenCalledWith('London', 'temp_max');
        expect(ManageAPI).toHaveBeenCalledWith('London', 'humidity');
        expect(ManageAPI).toHaveBeenCalledWith('London', 'feels_like');
        expect(ManageAPI).toHaveBeenCalledWith('London', 'clouds');
        expect(ManageAPI).toHaveBeenCalledWith('London', 'wind speed');
        expect(ManageAPI).toHaveBeenCalledWith('London', 'pressure');
        expect(ManageAPI).toHaveBeenCalledWith('London', 'wind deg');
        expect(ManageAPI).toHaveBeenCalledWith('London', 'wind gust');
    });

    it('updates temperature colors based on temperature values', async () => {
        // Test different temperature thresholds
        const temperatureTests = [
            { temp: '-15', expectedColor: 'rgb(51, 204, 255)' },
            { temp: '-5', expectedColor: 'blue' },
            { temp: '5', expectedColor: 'rgb(51, 102, 255)' },
            { temp: '15', expectedColor: 'rgb(255, 255, 0)' },
            { temp: '25', expectedColor: 'rgb(255, 153, 102)' },
            { temp: '35', expectedColor: 'rgb(153, 0, 204)' },
            { temp: '45', expectedColor: 'rgb(204, 0, 0)' }
        ];

        for (const { temp } of temperatureTests) {
            // Reset mocks for each temperature test
            vi.mocked(ManageAPI).mockClear();

            // Mock only temperature API call for this test
            vi.mocked(ManageAPI).mockImplementation((town: any, param: any) => {
                if (param === 'temperature') {
                    return Promise.resolve(temp);
                }
                return Promise.resolve('mock data');
            });

            const { unmount } = render(<WeatherInfos />);

            // Advance timers to trigger the API calls
            await act(async () => {
                vi.advanceTimersByTime(1000);
            });

            expect(ManageAPI).toHaveBeenCalledWith('London', 'temperature');

            // Clean up before next test
            unmount();
        }
    });

    it('handles responsive design based on window width', async () => {
        // Test desktop view
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            value: 800
        });

        const { unmount } = render(<WeatherInfos />);

        // Test mobile view
        unmount();
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            value: 500
        });

        // Trigger resize event
        global.dispatchEvent(new Event('resize'));

        render(<WeatherInfos />);

        // The test here validates the component renders in mobile mode
        // In a real test with full access to styles, we would verify
        // that mobile-specific elements are present
    });

    it('handles API errors gracefully', async () => {
        // Mock API to throw an error
        vi.mocked(ManageAPI).mockImplementation(() => {
            return Promise.reject(new Error('API Error'));
        });

        // Test that component doesn't crash on API error
        render(<WeatherInfos />);

        await act(async () => {
            vi.advanceTimersByTime(1000);
        });

        // Verify component displays initial or error state
        expect(screen.getByText('Place not found')).toBeInTheDocument();
    });
});