import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';

const NavLink = ({ to, children }) => {
  return (
    <Link component={RouterLink} to={to} color="inherit" style={{ textDecoration: 'none' }}>
      <Typography variant="body1">{children}</Typography>
    </Link>
  );
};

export default NavLink;