import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Portfolio from './Portfolio';

describe('Portfolio', () => {
  test('renders all main sections', () => {
    render(<Portfolio />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header/Hero
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test('hero section has name and title', () => {
    render(<Portfolio />);
    
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/developer|engineer|designer/i)).toBeInTheDocument();
  });

  test('projects section displays project cards', () => {
    render(<Portfolio />);
    
    const projectsSection = screen.getByTestId('projects-section');
    expect(projectsSection).toBeInTheDocument();
    
    // Should have at least one project card
    const projectCards = screen.getAllByTestId(/project-card/i);
    expect(projectCards.length).toBeGreaterThan(0);
  });

  test('contact section has form or contact information', () => {
    render(<Portfolio />);
    
    const contactSection = screen.getByTestId('contact-section');
    expect(contactSection).toBeInTheDocument();
    
    // Should have either a contact form or contact links
    const hasForm = screen.queryByRole('form');
    const hasEmail = screen.queryByText(/email|@/i);
    
    expect(hasForm || hasEmail).toBeTruthy();
  });

  test('resume download link is present', () => {
    render(<Portfolio />);
    
    const resumeLink = screen.getByRole('link', { name: /resume|download|cv/i });
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute('href');
  });
});