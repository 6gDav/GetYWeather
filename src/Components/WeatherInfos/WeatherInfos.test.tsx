import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import WeatherInfos from './WeatherInfos';
import { vi } from 'vitest';

vi.mock('../WeatherCards', () => ({
    default: () => <div data-testid="weather-cards">Mocked Weather Cards</div>
}));

describe('WeatherInfos Component', () => {

    it('renders the component with initial state', () => {
        render(<WeatherInfos />);

        expect(screen.getByText(/Place not found/i)).toBeInTheDocument();
    });

    it('renders the forecast section with WeatherCards', () => {
        render(<WeatherInfos />);

        expect(screen.getByText(/Forcast/i)).toBeInTheDocument();
    });

    it('handles mobile view correctly', () => {
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));

        render(<WeatherInfos />);

        const lineDivs = document.querySelectorAll('.lineDiv');
        expect(lineDivs.length).toBeGreaterThan(0);
    });
    
    it('loads without errors', () => {
        render(<WeatherInfos />);
        
        expect(screen.getByText(/Place not found/i)).toBeInTheDocument();
    });

});
