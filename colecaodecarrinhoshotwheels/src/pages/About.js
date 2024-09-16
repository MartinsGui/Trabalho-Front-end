import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Sobre
        </Typography>
        <Typography variant="h5" paragraph>
          Bem-vindo à coleção de carrinhos da Hotwheels. Aqui você pode verificar a sua coleção de carrinhos e gerenciá-la de forma prática e intuitiva.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
