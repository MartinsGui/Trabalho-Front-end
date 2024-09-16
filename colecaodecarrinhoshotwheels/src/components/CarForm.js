import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CarContext } from '../context/CarContext';

const CarForm = () => {
  const { addCar } = useContext(CarContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    addCar(data);
    alert('Carro adicionado com sucesso!');
    reset();
    navigate('/cars');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input {...register('name', { required: true })} />
      </div>
      <div>
        <label>Marca:</label>
        <input {...register('brand', { required: true })} />
      </div>
      <div>
        <label>Cor:</label>
        <input {...register('color', { required: true })} />
      </div>
      <div>
        <label>Ano:</label>
        <input type="number" {...register('year', { required: true })} />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default CarForm;
