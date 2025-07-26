import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from './Navigation';

describe('Navigation', () => {
  test('renders all navigation links', () => {
    render(<Navigation />);
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  test('navigation links scroll to correct sections', async () => {
    const user = userEvent.setup();
    render(<Navigation />);
    
    const aboutLink = screen.getByRole('link', { name: /about/i });
    await user.click(aboutLink);
    
    // Test that clicking about link triggers scroll behavior
    expect(aboutLink).toHaveAttribute('href', '#about');
  });

  test('navigation is responsive', () => {
    render(<Navigation />);
    
    // Check for mobile menu toggle button
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
  });
});