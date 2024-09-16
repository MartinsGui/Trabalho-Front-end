import React from 'react';
import { Container, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Página Não Encontrada
      </Typography>
      <Typography variant="body1">
        A página que você está tentando acessar não existe. Verifique o URL e tente novamente.
      </Typography>
    </Container>
  );
};

export default NotFound;