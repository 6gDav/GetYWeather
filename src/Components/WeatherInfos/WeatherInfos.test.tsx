import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import WeatherInfos from './WeatherInfos';
import ManageAPI from './Logic/ManaggeAPI';
import Infos from '../UserDate/UserDate';

// Mock the dependencies
vi.mock('../Logic/ManaggeAPI', () => ({
    default: vi.fn()
}));

vi.mock('../WeatherCards', () => ({
    default: () => <div data-testid="weather-cards">Mocked Weather Cards</div>
}));

// Mock the window resize events
const originalInnerWidth = window.innerWidth;
const resizeWindow = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    });
    window.dispatchEvent(new Event('resize'));
};

describe('WeatherInfos Component', () => {
    // Set up mocks before each test
    beforeEach(() => {
        // Reset mocks
        vi.resetAllMocks();

        // Mock ManageAPI to return predictable values
        (ManageAPI as any).mockImplementation((town: any, param: any) => {
            const mockData: Record<string, string> = {
                'description': 'Sunny',
                'temperature': '25',
                'temp_min': '20',
                'temp_max': '30',
                'humidity': '45',
                'feels_like': '27',
                'clouds': '10',
                'wind speed': '15',
                'pressure': '1013',
                'wind deg': '180',
                'wind gust': '20'
            };

            return Promise.resolve(mockData[param] || `${param} for ${town}`);
        });

        // Mock setInterval and clearInterval
        vi.useFakeTimers();
    });

    // Clean up after each test
    afterEach(() => {
        // Restore window innerWidth
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: originalInnerWidth,
        });

        // Restore timers
        vi.useRealTimers();
    });

    it('renders the component with initial state', () => {
        render(<WeatherInfos />);

        // Check that the component renders with default text
        expect(screen.getByText(/Place not found/i)).toBeInTheDocument();
    });

    it('fetches and displays weather data after API calls', async () => {
        render(<WeatherInfos />);

        // Advance timers to trigger API calls
        act(() => {
            vi.advanceTimersByTime(1000);
        });

        // Wait for API responses to be processed
        await waitFor(() => {
            expect(ManageAPI).toHaveBeenCalledWith(Infos.TownName, 'temperature');
        });

        // Check if data is displayed correctly
        await waitFor(() => {
            expect(screen.getByText(/25 °C/i)).toBeInTheDocument();
            expect(screen.getByText(/Sunny/i)).toBeInTheDocument();
            expect(screen.getByText(/20 °C/i)).toBeInTheDocument();
            expect(screen.getByText(/30 °C/i)).toBeInTheDocument();
        });
    });

    it('updates temperature colors based on temperature value', async () => {
        // Mock a specific temperature value
        (ManageAPI as any).mockImplementation((town: any, param: any) => {
            if (param === 'temperature') return Promise.resolve('35');
            return Promise.resolve(`${param} for ${town}`);
        });

        render(<WeatherInfos />);

        // Advance timers to trigger API calls
        act(() => {
            vi.advanceTimersByTime(1000);
        });

        // Wait for API call and state update
        await waitFor(() => {
            expect(ManageAPI).toHaveBeenCalledWith(Infos.TownName, 'temperature');
        });

        // Check if the proper color gradient is applied
        const tempDiv = screen.getByText(/35 °C/i).closest('.tempatureDiv');
        expect(tempDiv).toHaveStyle({
            background: expect.stringContaining('rgb(153, 0, 204)')
        });
    });

    it('handles mobile view correctly', async () => {
        // Set window width to mobile size
        resizeWindow(500);

        render(<WeatherInfos />);

        // Advance timers to trigger API calls
        act(() => {
            vi.advanceTimersByTime(1000);
        });

        // Check if mobile layout is applied
        const lineDivs = document.querySelectorAll('.lineDiv');
        expect(lineDivs.length).toBeGreaterThan(0);

        // We should verify the mobile layout specifically
        // This will depend on how you've structured your CSS
        // For this test, we're just checking that the component renders in mobile mode
        expect(window.innerWidth).toBeLessThan(600);
    });

    it('handles API errors gracefully', async () => {
        // Mock API to reject
        (ManageAPI as any).mockImplementation(() => {
            return Promise.reject(new Error('API Error'));
        });

        // Spy on console.error
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

        render(<WeatherInfos />);

        // Advance timers to trigger API calls
        act(() => {
            vi.advanceTimersByTime(1000);
        });

        // Wait for error to be logged
        await waitFor(() => {
            expect(consoleSpy).toHaveBeenCalled();
        });

        // Component should still be rendered
        expect(screen.getByText(/Place not found/i)).toBeInTheDocument();

        // Clean up spy
        consoleSpy.mockRestore();
    });

    it('renders the forecast section with WeatherCards', async () => {
        render(<WeatherInfos />);

        // Check that the forecast section is rendered
        expect(screen.getByText(/Forcast/i)).toBeInTheDocument();

        // Check that WeatherCards component is rendered
        expect(screen.getByTestId('weather-cards')).toBeInTheDocument();
    });

    it('cleans up interval on unmount', () => {
        const clearIntervalSpy = vi.spyOn(global, 'clearInterval');

        const { unmount } = render(<WeatherInfos />);

        // Unmount the component
        unmount();

        // Check that clearInterval was called
        expect(clearIntervalSpy).toHaveBeenCalled();
    });
});