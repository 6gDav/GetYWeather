import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FooterSection from './FooterSection';
import { vi } from 'vitest';

vi.mock('../EmailSend', () => ({
  default: vi.fn(),
}));

test('calls sendEmail with correct parameters when valid email is entered', async () => {
  render(<FooterSection />);

  const emailInput = screen.getByPlaceholderText(/email address/i);
  const sendButton = screen.getByRole('button');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.click(sendButton);
});
