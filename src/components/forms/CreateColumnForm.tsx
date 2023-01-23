import { Button, DialogTitle, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { CreateColumnValidationSchema } from './validation/validations';

interface CreateColumnForm {
  onCreate: (title: string, max: number) => void;
}

export const CreateColumnForm: FC<CreateColumnForm> = ({ onCreate }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      max: 0,
    },
    validationSchema: CreateColumnValidationSchema,
    onSubmit,
  });

  function onSubmit(values: { title: string; max: number }) {
    onCreate(values.title, values.max);
  }

  return (
    <Box sx={{p: '1rem'}}>
      <DialogTitle id="scroll-dialog-title">Create column</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          variant="standard"
          name={'title'}
          label={'Column title'}
          value={formik.values.title}
          type={'text'}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          margin="normal"
        />
        <TextField
          fullWidth
          variant="standard"
          name={'max'}
          label={'Maximum tasks'}
          value={formik.values.max}
          type={'text'}
          onChange={formik.handleChange}
          error={formik.touched.max && Boolean(formik.errors.max)}
          helperText={formik.touched.max && formik.errors.max}
          margin={'normal'}
        />
        <Button
          variant="contained"
          sx={{ width: '100%', marginBottom: '0.5rem' }}
          type={'submit'}
        >
          Create
        </Button>
      </form>
    </Box>
  );
};
