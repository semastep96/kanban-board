import React, { FC } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Container } from '@mui/system';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { SigninForm, SigninFormProps } from '../components/forms/SigninForm';

export const SignIn: FC = () => {
  const { user, signin } = useAuth();
  const navigate = useNavigate();
  useScrollToTop();

  if (user) {
    return <Navigate to={'/'}></Navigate>;
  }

  const onFormSubmit: SigninFormProps['onSubmit'] = (values) => {
    console.dir({ values });
    signin(
      {
        username: 'walterwhite',
        img: 'https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png',
      },
      () => navigate('/')
    );
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <SigninForm onSubmit={onFormSubmit} />
    </Container>
  );
};
