import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsletterSignup from '../NewsletterSignup';

describe('NewsletterSignup Component', () => {
  it('renders the newsletter signup form', () => {
    render(<NewsletterSignup />);

    // Check if the component renders the title
    expect(screen.getByText(/Free Communication Mini-Challenge/i)).toBeInTheDocument();

    // Check if the form and its elements are present
    expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });

  it('displays an error when submitting an empty form', async () => {
    render(<NewsletterSignup />);

    // Submit the form without entering an email
    fireEvent.click(screen.getByRole('button', { name: /get started/i }));

    // Check if the error message appears
    await waitFor(() => {
      expect(screen.getByText(/please enter your email/i)).toBeInTheDocument();
    });
  });

  it('displays an error when submitting an invalid email', async () => {
    render(<NewsletterSignup />);

    // Enter an invalid email and submit the form
    fireEvent.change(screen.getByPlaceholderText(/your email/i), {
      target: { value: 'invalid-email' },
    });
    fireEvent.click(screen.getByRole('button', { name: /get started/i }));

    // Check if the error message appears
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    });
  });

  it('displays success message when submitting a valid email', async () => {
    render(<NewsletterSignup />);

    // Enter a valid email and submit the form
    fireEvent.change(screen.getByPlaceholderText(/your email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.click(screen.getByRole('button', { name: /get started/i }));

    // Check if the success message appears
    await waitFor(() => {
      expect(screen.getByText(/thanks for signing up/i)).toBeInTheDocument();
    });
  });
}); 