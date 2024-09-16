import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CarContext } from '../context/CarContext';
import AddCar from '../pages/AddCar';
import '@testing-library/jest-dom/extend-expect';

const addCar = jest.fn();

test('renders AddCar page and allows adding a car', () => {
  render(
    <CarContext.Provider value={{ addCar }}>
      <AddCar />
    </CarContext.Provider>
  );
  
  fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'Car2' } });
  fireEvent.change(screen.getByLabelText(/Model:/i), { target: { value: 'Model2' } });
  fireEvent.click(screen.getByText(/Add Car/i));

  expect(addCar).toHaveBeenCalledWith({ name: 'Car2', model: 'Model2' });
});
