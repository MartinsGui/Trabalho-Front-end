import React, { useState } from 'react';
import { useCars } from '../context/CarContext';
import { Container, Typography, List, ListItem, ListItemText, IconButton, Snackbar, Alert, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cars = () => {
  const { cars, setCars } = useCars();
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleDelete = (id) => {
    const updatedCars = cars.filter(car => car.id !== id);
    setCars(updatedCars);
    setMessage('Carro excluído com sucesso!');
    setOpen(true);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Lista de Carros
      </Typography>
      {cars.length === 0 ? (
        <Typography variant="h6" color="textSecondary" align="center">
          A sua lista ainda está vazia.
        </Typography>
      ) : (
        <List>
          {cars.map(car => (
            <ListItem key={car.id} divider>
              <ListItemText
                primary={`${car.name} - ${car.brand} - ${car.color} - ${car.year}`}
              />
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(car.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Cars;
