import React, { FC } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Container } from '@mui/material';

import { useScrollToTop } from '../hooks/useScrollToTop';
import { SignupFormProps, SignupFrom } from '../components/forms/SignupForm';

export const SignUp: FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useScrollToTop();

  if (user) {
    return <Navigate to={'/'} replace></Navigate>;
  }

  const onFormSubmit: SignupFormProps['onSubmit'] = (values) => {
    console.dir({ values });
    navigate('/signin', { replace: true });
  };

  return (
    <Container
      maxWidth={'xs'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <SignupFrom onSubmit={onFormSubmit} />
    </Container>
  );
};
