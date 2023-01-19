import { Typography } from '@mui/material';
import React from 'react';

export const Footer = () => {
  return (
    <Typography
      textAlign={'center'}
      variant={'subtitle1'}
      component={'footer'}
      color="white"
      sx={{
        position: 'fixed',
        height: '2rem',
        bottom: '0',
        textDecoration: 'underline',
        bgcolor: (theme) => `${theme.palette.primary.main}`,
        width: '100%',
      }}
    >
      <a
        href="https://github.com/semastep96"
        target={'_blank'}
        rel="noreferrer"
      >
        created by semastep96
      </a>
    </Typography>
  );
};
