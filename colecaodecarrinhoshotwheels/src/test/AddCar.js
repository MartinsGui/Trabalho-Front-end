import React, { useState } from 'react';
import { useCars } from '../context/CarContext';

const AddCar = () => {
  const { cars, setCars } = useCars(); // Certifique-se de que useCars está retornando o contexto corretamente
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!cars) {
      console.error('Context "cars" is undefined');
      return;
    }

    const newCar = { id: cars.length + 1, name, brand, color, year };

    setCars([...cars, newCar]);
    setMessage('Carro adicionado com sucesso!');
    setName('');
    setBrand('');
    setColor('');
    setYear('');
  };

  return (
    <div>
      <h1>Adicionar Carro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Marca:
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required />
        </label>
        <br />
        <label>
          Cor:
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required />
        </label>
        <br />
        <label>
          Ano:
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Adicionar Carro</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddCar;
