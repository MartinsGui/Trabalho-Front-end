import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarDetail from '../components/CarDetail';

test('renders CarDetail with car details', () => {
  const car = {
    name: 'Carro Teste',
    brand: 'Marca Teste',
    color: 'Cor Teste',
    year: '2024',
  };

  render(<CarDetail open={true} onClose={() => {}} car={car} />);
  
  expect(screen.getByText(/Nome:/i)).toBeInTheDocument();
  expect(screen.getByText(/Carro Teste/i)).toBeInTheDocument();
  expect(screen.getByText(/Marca:/i)).toBeInTheDocument();
  expect(screen.getByText(/Marca Teste/i)).toBeInTheDocument();
  expect(screen.getByText(/Cor:/i)).toBeInTheDocument();
  expect(screen.getByText(/Cor Teste/i)).toBeInTheDocument();
  expect(screen.getByText(/Ano:/i)).toBeInTheDocument();
  expect(screen.getByText(/2024/i)).toBeInTheDocument();
});