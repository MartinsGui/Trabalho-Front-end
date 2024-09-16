// src/pages/CarsPage.js
import React from 'react';
import CarList from '../components/CarList'; // Importa o componente CarList
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CarsPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Carros
      </Typography>
      <CarList /> {/* Usa o componente CarList */}
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/add-car"
      >
        Adicionar Carro
      </Button>
    </Container>
  );
};

export default CarsPage;
