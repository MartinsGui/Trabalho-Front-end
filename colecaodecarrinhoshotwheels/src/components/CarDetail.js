import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const CarDetail = ({ open, onClose, car }) => {
  if (!car) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Detalhes do Carro</DialogTitle>
      <DialogContent>
        <Typography variant="h6">Nome:</Typography>
        <Typography variant="body1">{car.name}</Typography>
        <Typography variant="h6">Marca:</Typography>
        <Typography variant="body1">{car.brand}</Typography>
        <Typography variant="h6">Cor:</Typography>
        <Typography variant="body1">{car.color}</Typography>
        <Typography variant="h6">Ano:</Typography>
        <Typography variant="body1">{car.year}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CarDetail;