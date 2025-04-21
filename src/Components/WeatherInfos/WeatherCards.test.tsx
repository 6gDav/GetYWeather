import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import WeatherCards from './WeatherCards';
import Infos from '../UserDate/UserDate';

const originalConsoleError = console.error;
const originalConsoleLog = console.log;

describe('WeatherCards Component', () => {
  const mockWeatherData = {
    list: [
      {
        dt_txt: '2023-05-01 09:00:00',
        main: { temp: 20 },
        weather: [{ description: 'Sunny', icon: '01d' }]
      },
      {
        dt_txt: '2023-05-01 12:00:00',
        main: { temp: 25 },
        weather: [{ description: 'Clear sky', icon: '01d' }]
      },
      {
        dt_txt: '2023-05-02 12:00:00',
        main: { temp: 18 },
        weather: [{ description: 'Cloudy', icon: '03d' }]
      },
      {
        dt_txt: '2023-05-03 12:00:00',
        main: { temp: 15 },
        weather: [{ description: 'Light rain', icon: '10d' }]
      }
    ]
  };

  beforeEach(() => {
    console.error = vi.fn();
    console.log = vi.fn();
  });

  afterEach(() => {
    console.error = originalConsoleError;
    console.log = originalConsoleLog;

    vi.clearAllMocks();

    Infos.Data = '';
  });

  it('renders weather cards for 12:00:00 time slots only', () => {
    Infos.Data = JSON.stringify(mockWeatherData);

    render(<WeatherCards />);

    expect(screen.getAllByText(/°C/)).toHaveLength(3);

    expect(screen.getByText('Clear sky')).toBeInTheDocument();
    expect(screen.getByText('Cloudy')).toBeInTheDocument();
    expect(screen.getByText('Light rain')).toBeInTheDocument();

    expect(screen.queryByText('Sunny')).not.toBeInTheDocument();
  });

  it('displays correct temperature for each day', () => {
    Infos.Data = JSON.stringify(mockWeatherData);

    render(<WeatherCards />);

    expect(screen.getByText('25°C')).toBeInTheDocument();
    expect(screen.getByText('18°C')).toBeInTheDocument();
    expect(screen.getByText('15°C')).toBeInTheDocument();
  });

  it('handles empty data without errors', () => {
    Infos.Data = '';

    render(<WeatherCards />);

    expect(screen.queryByText(/°C/)).not.toBeInTheDocument();
  });

  it('displays correct day of the week', () => {
    Infos.Data = JSON.stringify(mockWeatherData);

    render(<WeatherCards />);

    const dayElements = screen.getAllByText(/Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/);
    expect(dayElements).toHaveLength(3);
  });

  it('renders correct image URLs for weather icons', () => {
    Infos.Data = JSON.stringify(mockWeatherData);

    render(<WeatherCards />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);

    expect(images[0]).toHaveAttribute('src', 'https://openweathermap.org/img/wn/01d@2x.png');
    expect(images[1]).toHaveAttribute('src', 'https://openweathermap.org/img/wn/03d@2x.png');
    expect(images[2]).toHaveAttribute('src', 'https://openweathermap.org/img/wn/10d@2x.png');

    expect(images[0]).toHaveAttribute('alt', 'Clear sky');
    expect(images[1]).toHaveAttribute('alt', 'Cloudy');
    expect(images[2]).toHaveAttribute('alt', 'Light rain');
  });

  it('handles JSON parsing error gracefully', () => {
    Infos.Data = 'invalid json data';

    render(<WeatherCards />);

    expect(console.error).toHaveBeenCalled();
    expect(screen.queryByText(/°C/)).not.toBeInTheDocument();
  });
});