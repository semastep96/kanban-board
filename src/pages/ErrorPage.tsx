import { Button, Container, styled, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useRouteError } from 'react-router-dom';
import WarningIcon from '@mui/icons-material/Warning';
import { Link } from 'react-router-dom';

interface routeError {
  statusText: string;
  message: string;
}

const StyledWarningIcon = styled(WarningIcon)`
  ${({ theme }) => `
  color: ${theme.palette.error.main};
  font-size: ${'100px'};
  margin: ${'1rem'};
  transition: ${theme.transitions.create(['transform'], {
    duration: '1s',
    easing: theme.transitions.easing.easeInOut,
  })};
  &:hover {
    transform: scale(1.8);
  }
  `}
`;

export const ErrorPage: FC = () => {
  const error = useRouteError() as routeError;

  return (
    <Container
      sx={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      maxWidth={'md'}
    >
      <StyledWarningIcon />
      <Typography variant={'h1'} component={'h1'} mb={'1.5rem'}>
        Oops!
      </Typography>
      <Typography
        variant="h5"
        component={'h2'}
        mb={'1rem'}
        textAlign={'center'}
      >
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant={'h6'} component={'p'}>
        {error.statusText || error.message}
      </Typography>
      <Link to={'/'} replace>
        <Button variant="outlined" sx={{ mt: '1rem' }}>
          Back to app start page
        </Button>
      </Link>
    </Container>
  );
};
