import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('renders NavBar with links', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Cars/i)).toBeInTheDocument();
  expect(screen.getByText(/Add Car/i)).toBeInTheDocument();
});
