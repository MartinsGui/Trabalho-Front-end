// src/pages/Cars.js
import React from 'react';
import CarList from '../components/CarList';
import { Container, Typography } from '@mui/material';

const Cars = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Carros
      </Typography>
      <CarList />
    </Container>
  );
};

export default Cars;
