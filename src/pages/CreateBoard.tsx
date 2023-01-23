import { Container } from '@mui/material';
import React from 'react';
import { CreateBoardForm } from '../components/forms/CreateBoardForm';

export const CreateBoard = () => {
  return (
    <Container maxWidth={'sm'}>
      <CreateBoardForm />
    </Container>
  );
};
