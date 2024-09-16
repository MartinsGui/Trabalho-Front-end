import React, { useState } from 'react';
import { useCars } from '../context/CarContext';
import { Container, Typography, TextField, Button, Paper, Snackbar, Alert, Box } from '@mui/material';

const AddCar = () => {
  const { cars, setCars } = useCars();
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCar = { id: cars.length + 1, name, brand, color, year };
    setCars([...cars, newCar]);
    setMessage('Carro adicionado com sucesso!');
    setOpen(true);
    setName('');
    setBrand('');
    setColor('');
    setYear('');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Adicionar Carro
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Marca"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Cor"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Ano"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Adicionar Carro
          </Button>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity="success">
            {message}
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
};

export default AddCar;
