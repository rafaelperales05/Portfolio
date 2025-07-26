import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio app', () => {
  render(<App />);
  const portfolioElement = screen.getByRole('banner'); // Hero section
  expect(portfolioElement).toBeInTheDocument();
});

test('renders main navigation', () => {
  render(<App />);
  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument();
});
