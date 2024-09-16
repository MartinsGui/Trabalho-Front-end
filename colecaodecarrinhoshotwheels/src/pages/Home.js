import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Trabalho de Desenvolvimento Front-End com ReactJS
        </Typography>
        <Typography variant="h5" paragraph>
          Aqui você pode explorar e gerenciar sua coleção de carrinhos Hotwheels.
        </Typography>
        <Box mt={4} display="flex" justifyContent="center">
          <img
            src = "/images/hot_wheels.jpg"
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
