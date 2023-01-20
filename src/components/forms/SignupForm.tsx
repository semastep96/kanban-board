import React, { FC } from 'react';
import { useFormik } from 'formik';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { signupValidationSchema } from './validation/validations';

export interface SignupFormProps {
  onSubmit: (values: {
    email: string;
    username: string;
    password: string;
    passwordRepeat: string;
  }) => void;
}

export const SignupFrom: FC<SignupFormProps> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      passwordRepeat: '',
    },
    validationSchema: signupValidationSchema,
    onSubmit
  });
  return (
    <form onSubmit={formik.handleSubmit}>
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
          formik.touched.passwordRepeat && Boolean(formik.errors.passwordRepeat)
        }
        helperText={formik.touched.password && formik.errors.passwordRepeat}
        margin="normal"
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
    </form>
  );
};
