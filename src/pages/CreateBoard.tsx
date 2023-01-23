import { Container } from '@mui/material';
import React, { useState } from 'react';
import { CreateBoardForm } from '../components/forms/CreateBoardForm';

export const CreateBoard = () => {
  return (
    <Container maxWidth={'sm'}>
      <CreateBoardForm />
    </Container>
  );
};
