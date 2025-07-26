import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navigation', () => {
  test('renders all navigation links', () => {
    renderWithRouter(<Navigation />);
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  test('navigation links navigate to correct routes', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Navigation />);
    
    const aboutLink = screen.getByRole('link', { name: /about/i });
    await user.click(aboutLink);
    
    // Test that clicking about link has correct href
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  test('navigation is responsive', () => {
    renderWithRouter(<Navigation />);
    
    // Check for mobile menu toggle button
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
  });
});