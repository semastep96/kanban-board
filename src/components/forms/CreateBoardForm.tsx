import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { CreateBoardValidationSchema } from './validation/validations';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { BoardsHelper } from '../../helpers/BoardsHelper';
import Store from '../../store/Store';

export const CreateBoardForm: FC = () => {
  const navigate = useNavigate();
  const [columnName, setColumnName] = useState('');
  const [columns, setColumns] = useState<string[]>([]);

  const onColumnNameInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setColumnName(e.currentTarget.value);
  };
  const onAddColumn: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!columnName) return;
    setColumnName('');
    setColumns([...columns, columnName]);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      backgroundImage: '',
    },
    validationSchema: CreateBoardValidationSchema,
    onSubmit,
  });

  function onSubmit(values: { name: string; backgroundImage: string }) {
    console.log({
      name: values.name,
      backgroundImage: values.backgroundImage,
      columns,
    });
    const board = BoardsHelper.createBoard(values.name, values.backgroundImage, columns);
    Store.addBoard(board);
    navigate(`/boards/${board.id}`);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography
        color={'primary'}
        variant={'h5'}
        component={'h1'}
        marginTop={'1rem'}
        textAlign={'center'}
      >
        Create board
      </Typography>
      <TextField
        fullWidth
        variant="standard"
        name={'name'}
        label={'Board name'}
        value={formik.values.name}
        type={'text'}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        margin="normal"
      />
      <TextField
        fullWidth
        variant="standard"
        name={'backgroundImage'}
        label={'Background image URL'}
        value={formik.values.backgroundImage}
        type={'text'}
        onChange={formik.handleChange}
        error={
          formik.touched.backgroundImage &&
          Boolean(formik.errors.backgroundImage)
        }
        helperText={
          formik.touched.backgroundImage && formik.errors.backgroundImage
        }
        margin={'normal'}
      />
      {formik.values.backgroundImage && (
        <img
          src={formik.values.backgroundImage}
          alt="preview"
          style={{ height: '50px', width: 'auto', marginBottom: '1rem' }}
        />
      )}
      <Typography color={'primary'} variant="subtitle2" my={'1rem'}>
        Add columns
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <TextField
          label={'Column name'}
          variant="outlined"
          type={'text'}
          value={columnName}
          onChange={onColumnNameInput}
        />
        <IconButton type="button" sx={{ ml: '0.5rem' }} onClick={onAddColumn}>
          <AddIcon />
        </IconButton>
      </Box>
      <Box
        sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', mb: '1rem' }}
      >
        {columns.map((columnName, i) => (
          <Typography
            variant="body1"
            key={i}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              p: '5px',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
            onClick={() =>
              setColumns(columns.filter((name) => name !== columnName))
            }
          >
            {columnName}
          </Typography>
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{ width: '100%', marginBottom: '0.5rem' }}
        type={'submit'}
      >
        Create
      </Button>
    </form>
  );
};
