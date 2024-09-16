import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import { Container, Typography, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Erro ao buscar carros:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      fetchCars(); // Atualiza a lista após exclusão
    } catch (error) {
      console.error('Erro ao excluir carro:', error);
    }
  };

  useEffect(() => {
    fetchCars(); // Carrega os carros ao montar o componente
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Carros
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: '20px' }}
        onClick={() => navigate('/add-car')}
      >
        Adicionar Carro
      </Button>
      <List>
        {cars.map((car) => (
          <ListItem key={car.id}>
            <ListItemText primary={`${car.name} - ${car.brand} - ${car.color} - ${car.year}`} />
            <IconButton edge="end" onClick={() => handleDelete(car.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CarsPage;
