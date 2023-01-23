import { Container } from '@mui/system';
import React, { FC } from 'react';
import { BoardCards } from '../components/boards/BoardCards';
import Store from '../store/Store';

export const Boards: FC = () => {
  const { boards } = Store;
  const lastThreeBoards = [...boards]
    .sort((a, b) => {
      return new Date(a.lastOpen).getTime() - new Date(b.lastOpen).getTime();
    })
    .reverse()
    .slice(0, 3);

  return (
    <Container maxWidth="xl">
      <BoardCards title="Recently watched boards" boards={lastThreeBoards} />
      <BoardCards title="All boards" boards={boards} CardCreator />
    </Container>
  );
};
