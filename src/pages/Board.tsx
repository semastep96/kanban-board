import { Box } from '@mui/material';

import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BoardContainer } from '../components/board/BoardContainer';
import { BoardTopBar } from '../components/board/BoardTopBar';
import Store from '../store/Store';
import { BoardColumn } from '../components/board/BoardColumn';
import { observer } from 'mobx-react-lite';
import { CreateColumn } from '../components/board/CreateColumn';

export const Board: FC = observer(() => {
  const { boardId } = useParams();
  const { boards } = Store;
  const board = boards.find((board) => board.id === boardId);

  if (!board) {
    throw new Error(`Board ${boardId} not found`);
  }

  useEffect(() => {
    Store.openBoard(board.id);
  });

  return (
    <BoardContainer board={board}>
      <BoardTopBar board={board} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '2rem',
          overflow: 'scroll',
          height: '85%',
          padding: '1rem',
          '& div': { flexGrow: 0, flexShrink: 0 },
        }}
      >
        {board.columns.map((column) => {
          return <BoardColumn key={column.id} column={column} board={board} />;
        })}
        <CreateColumn board={board}></CreateColumn>
      </Box>
    </BoardContainer>
  );
});
