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
  console.dir({ error });

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
      <StyledWarningIcon
        color={'error'}
        sx={{ fontSize: '100px', marginBottom: '1rem' }}
      />
      <Typography variant={'h1'} component={'h1'} mb={'1.5rem'}>
        Oops!
      </Typography>
      <Typography variant="h5" component={'h2'} mb={'1rem'}>
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
