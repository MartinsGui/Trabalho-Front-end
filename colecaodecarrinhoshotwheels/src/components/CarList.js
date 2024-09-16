// src/components/CarList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Erro ao buscar carros', error);
      }
    };

    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      setCars(cars.filter(car => car.id !== id));
    } catch (error) {
      console.error('Erro ao excluir o carro', error);
    }
  };

  return (
    <List>
      {cars.map(car => (
        <ListItem key={car.id}>
          <ListItemText
            primary={car.name}
            secondary={`${car.brand} - ${car.color} - ${car.year}`}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(car.id)}
          >
            Excluir
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default CarList;
