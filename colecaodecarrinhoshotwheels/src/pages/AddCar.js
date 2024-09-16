import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import axios from 'axios';

const AddCar = () => {
  const [car, setCar] = useState({ name: '', brand: '', color: '', year: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/cars', car);
      if (response.status === 201) { // Verifica se a resposta foi bem-sucedida
        alert('Carro adicionado com sucesso!');
        navigate('/cars');
      } else {
        alert('Falha ao adicionar carro');
      }
    } catch (error) {
      console.error('Erro ao adicionar o carro:', error);
      alert('Erro ao adicionar carro.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Adicionar Carro
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Modelo"
              name="name"
              value={car.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Marca"
              name="brand"
              value={car.brand}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Cor"
              name="color"
              value={car.color}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Ano"
              name="year"
              value={car.year}
              onChange={handleChange}
              required
              type="number"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          style={{ marginTop: '20px' }}
        >
          {loading ? 'Adicionando...' : 'Adicionar Carro'}
        </Button>
      </form>
    </Container>
  );
};

export default AddCar;
