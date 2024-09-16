import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ variant = 'contained', color = 'primary', onClick, children }) => {
  return (
    <MuiButton variant={variant} color={color} onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;