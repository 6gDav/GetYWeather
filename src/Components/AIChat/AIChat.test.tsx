import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import AIChat from './AIChat';

describe('AIChat component', () => {
    test('renders button with image', () => {
        render(<AIChat />);
        const buttonElement = screen.getByRole('button');
        const imageElement = screen.getByAltText('aipicture');
        expect(buttonElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('title', 'Ask our AI');
    });

    test('shows alert when button is clicked', () => {
        window.alert = vi.fn();

        render(<AIChat />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(window.alert).toHaveBeenCalledWith('Coming soon.');
    });
});
