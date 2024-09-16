import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarForm from '../components/CarForm';
import { postCar } from '../services/api';

jest.mock('../services/api');

test('renders CarForm and submits data', async () => {
  postCar.mockResolvedValueOnce({ data: {} });
  
  render(<CarForm onSuccess={() => {}} />);
  
  fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Carro Teste' } });
  fireEvent.change(screen.getByLabelText(/Marca/i), { target: { value: 'Marca Teste' } });
  fireEvent.change(screen.getByLabelText(/Cor/i), { target: { value: 'Cor Teste' } });
  fireEvent.change(screen.getByLabelText(/Ano/i), { target: { value: '2024' } });
  
  fireEvent.click(screen.getByText(/Adicionar/i));
  
  await waitFor(() => {
    expect(postCar).toHaveBeenCalledWith({
      name: 'Carro Teste',
      brand: 'Marca Teste',
      color: 'Cor Teste',
      year: '2024',
    });
  });
});