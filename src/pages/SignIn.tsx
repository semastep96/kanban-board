import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
  username: yup.string().required('Enter username'),
  password: yup.string().required('Enter password'),
});

export const SignIn: FC = () => {
  const { user, signin } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to={'/'}></Navigate>;
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.dir({ values });
      signin(
        {
          username: 'semastep',
          img: 'https://cs11.pikabu.ru/post_img/2018/09/01/4/1535780956191710826.jpg',
        },
        () => navigate('/')
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
        <Box
          sx={{
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://thumbs.gfycat.com/FrayedLightheartedGrosbeak-max-1mb.gif"
            alt="Hello"
          />
        </Box>
        <Typography
          color={'primary'}
          variant={'h5'}
          component={'h1'}
          marginTop={'1rem'}
        >
          Welcome to Kanban Board App!
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          name={'username'}
          label={'Username'}
          value={formik.values.username}
          type={'text'}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          margin="normal"
        />
        <TextField
          fullWidth
          variant="standard"
          name={'password'}
          label={'Password'}
          value={formik.values.password}
          type={'password'}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ marginBottom: '20px' }}
        />
        <Button
          variant="contained"
          sx={{ width: '100%', marginBottom: '0.5rem' }}
          type={'submit'}
        >
          Login
        </Button>
        <Link to="/signup" style={{ width: '100%' }}>
          <Button color="secondary" sx={{ width: '100%' }} type={'button'}>
            Registration
          </Button>
        </Link>
      </Container>
    </form>
  );
};
