import { render, screen } from '@testing-library/react';
import App from '../App';
import { CarProvider } from '../context/CarContext';

test('renders App and routes correctly', () => {
  render(
    <CarProvider>
      <App />
    </CarProvider>
  );

  // Add appropriate assertions based on expected behavior
});
