import React, { FC } from 'react';
import * as yup from 'yup';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useFormik } from 'formik';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup.string().email('Enter valid email').required('Enter username'),
  username: yup.string().min(3, 'Min 3 symbols').required('Enter username'),
  password: yup.string().min(6, 'Min 6 symbols').required('Enter password'),
  passwordRepeat: yup.string().when('password', {
    is: (val: string) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref('password')], 'Both password need to be the same'),
  }),
});

export const SignUp: FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to={'/'} replace></Navigate>;
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      passwordRepeat: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.dir({ values });
      navigate('/signin', { replace: true });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
        <Box sx={{ borderRadius: '10px', overflow: 'hidden' }}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5913ad373e00be4e120a7764/1610901107860-5L93J8CHDDY3LW4L6I9L/Join+Us+Gif.gif"
            alt="join us"
          />
        </Box>
        <Typography variant="h5" component={'h1'} textAlign="center">
          We are glad to see you in Kanban board app!
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          name={'email'}
          label={'Email'}
          value={formik.values.email}
          type={'email'}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
        />
        <TextField
          fullWidth
          variant="standard"
          name={'username'}
          label={'Username'}
          value={formik.values.username}
          type={'username'}
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
          margin="normal"
        />
        <TextField
          fullWidth
          variant="standard"
          name={'passwordRepeat'}
          label={'Repeat password'}
          value={formik.values.passwordRepeat}
          type={'password'}
          onChange={formik.handleChange}
          error={
            formik.touched.passwordRepeat &&
            Boolean(formik.errors.passwordRepeat)
          }
          helperText={formik.touched.password && formik.errors.passwordRepeat}
          sx={{ marginBottom: '20px' }}
        />
        <Button
          variant="contained"
          sx={{ width: '100%', marginBottom: '0.5rem' }}
          type={'submit'}
        >
          Register
        </Button>
        <Link to="/signin" style={{ width: '100%' }}>
          <Button color="secondary" sx={{ width: '100%' }} type={'button'}>
            Login
          </Button>
        </Link>
      </Container>
    </form>
  );
};
