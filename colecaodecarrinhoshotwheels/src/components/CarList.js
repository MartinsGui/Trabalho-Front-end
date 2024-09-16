// src/components/CarList.js
import React from 'react';

const CarList = ({ cars, onDelete }) => (
  <ul>
    {cars.map(car => (
      <li key={car.id}>
        {car.name} - {car.brand} - {car.color} - {car.year}
        <button onClick={() => onDelete(car.id)}>Excluir</button>
      </li>
    ))}
  </ul>
);

export default CarList;
