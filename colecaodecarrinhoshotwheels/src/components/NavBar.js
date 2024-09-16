// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Hotwheels
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/add-car">Add Car</Button>
        <Button color="inherit" component={Link} to="/cars">Cars</Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
