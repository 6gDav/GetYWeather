import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppBar from './NewAppBar';
import { vi } from 'vitest';

class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
}

global.ResizeObserver = ResizeObserver;

vi.mock('./Logic/AppBarCodeBehindMenagger', () => ({
    useTheme: () => ({
        themeText: 'Light Mode',
        handleThemeChange: vi.fn(),
    }),
    useAppBar: () => ({
        handleClick: vi.fn(),
    }),
}));

vi.mock('../Clock/Logic/The-Actudal-Clcok-Of-The-Town', () => ({
    SetClokcToNull: vi.fn(),
}));

describe('AppBar Component', () => {
    test('renders navigation links', () => {
        render(<AppBar />, { wrapper: MemoryRouter });

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Feature')).toBeInTheDocument();
        expect(screen.getByText('Pricing')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    test('renders search input and button', () => {
        render(<AppBar />, { wrapper: MemoryRouter });

        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    });

    test('renders theme switcher', () => {
        render(<AppBar />, { wrapper: MemoryRouter });

        expect(screen.getByLabelText(/light mode/i)).toBeInTheDocument();
    });

    test('renders login and signup buttons', () => {
        render(<AppBar />, { wrapper: MemoryRouter });

        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByText('Sign-up')).toBeInTheDocument();
    });

    test('renders app icon image', () => {
        render(<AppBar />, { wrapper: MemoryRouter });

        const image = screen.getByAltText('GetYWeather icon.');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', expect.stringContaining('GetYWeather_appIcon.jpg'));
    });
});
