import { Box, Button, Dialog, DialogTitle, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC, useState } from 'react';
import { BoardsHelper } from '../../helpers/BoardsHelper';
import Store from '../../store/Store';
import { CreateTaskValidationSchema } from '../forms/validation/validations';

interface CreateTaskButtonProps {
  board: Board;
  column: Column;
}

export const CreateTaskButton: FC<CreateTaskButtonProps> = ({
  board,
  column,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClose = () => setIsDialogOpen(false);

  const onOpen = () => setIsDialogOpen(true);

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: CreateTaskValidationSchema,
    onSubmit,
  });

  function onSubmit(values: { text: string }) {
    const task = BoardsHelper.createTask(values.text);
    Store.createTask(board.id, column.id, task);
    formik.resetForm();
    handleClose();
  }
  return (
    <>
      <Button
        variant="contained"
        sx={{ my: '0.5rem', fontSize: '10px' }}
        onClick={onOpen}
      >
        Create task
      </Button>
      <Dialog open={isDialogOpen} onClose={handleClose}>
        <Box sx={{ p: '1rem' }}>
          <DialogTitle>Create task</DialogTitle>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              variant="standard"
              name={'text'}
              label={'Text'}
              value={formik.values.text}
              type={'text'}
              onChange={formik.handleChange}
              error={formik.touched.text && Boolean(formik.errors.text)}
              helperText={formik.touched.text && formik.errors.text}
              margin="normal"
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
      </Dialog>
    </>
  );
};
