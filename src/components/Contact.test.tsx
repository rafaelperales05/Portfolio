import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

describe('Contact', () => {
  test('renders contact form with required fields', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send|submit/i })).toBeInTheDocument();
  });

  test('form accepts user input', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Hello, this is a test message.');
    
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('Hello, this is a test message.');
  });

  test('displays social media links', () => {
    render(<Contact />);
    
    // Should have at least LinkedIn or GitHub
    const socialLinks = screen.getAllByRole('link');
    const hasSocialMedia = socialLinks.some(link => 
      link.getAttribute('href')?.includes('linkedin') ||
      link.getAttribute('href')?.includes('github') ||
      link.getAttribute('href')?.includes('twitter')
    );
    
    expect(hasSocialMedia).toBeTruthy();
  });
});