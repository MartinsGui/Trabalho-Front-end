import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const GithubWidget = () => {
  return (
    <Tooltip title="Visite o GitHub do projeto">
      <IconButton
        href="https://github.com/MartinsGui/Trabalho-Front-eng"
        target="_blank"
        color="primary"
        style={{ position: 'fixed', bottom: '16px', right: '16px' }}
      >
        <GitHubIcon />
      </IconButton>
    </Tooltip>
  );
};

export default GithubWidget;