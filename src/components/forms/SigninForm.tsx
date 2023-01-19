import React, { FC } from 'react';
import { useFormik } from 'formik';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { signinValidationSchema } from './validation/validations';

export interface SigninFormProps {
  onSubmit: (values: { username: string; password: string }) => void;
}

export const SigninForm: FC<SigninFormProps> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: signinValidationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
        textAlign={'center'}
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
    </form>
  );
};
