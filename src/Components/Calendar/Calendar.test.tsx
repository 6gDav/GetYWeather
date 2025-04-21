import { render, screen, fireEvent } from '@testing-library/react';
import Calendar from './Calendar';
import { vi } from 'vitest';
import sendEmail from '../EmailSend';


// Mock a sendEmail függvényt
vi.mock('../EmailSend', () => ({
    default: vi.fn(),
}));

describe('Calendar Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders calendar and form inputs', () => {
        render(<Calendar />);

        expect(screen.getByText(/set an alert/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/discription/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /set alart/i })).toBeInTheDocument();
    });

    test('shows alert if email or date is missing', () => {
        // Mock alert
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => { });

        render(<Calendar />);

        const setButton = screen.getByRole('button', { name: /set alart/i });

        fireEvent.click(setButton);

        expect(alertMock).toHaveBeenCalledWith('Please enter a valid email address or a valid date.');
    });

    test('calls sendEmail on valid input', () => {
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => { });

        render(<Calendar />);

        const emailInput = screen.getByPlaceholderText(/email/i);
        const descInput = screen.getByPlaceholderText(/discription/i);
        const setButton = screen.getByRole('button', { name: /set alart/i });

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(descInput, { target: { value: 'Weather update' } });

        expect(sendEmail).not.toHaveBeenCalled();
    });

});
