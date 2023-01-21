import { Box, Button } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { BoardContainer } from '../components/board/BoardContainer';
import { BoardTopBar } from '../components/board/BoardTopBar';
import { boards } from './Boards';
import { BoardColumn } from '../components/board/BoardColumn';

export const Board: FC = () => {
  const { boardId } = useParams();
  const board = boards.find((board) => board.id === boardId);
  if (!board) {
    throw new Error(`Board ${boardId} not found`);
  }

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
          return <BoardColumn key={column.id} column={column} />;
        })}
        <Button variant="contained" sx={{ width: '272px', flexShrink: '0' }}>
          create column
          {<ControlPointIcon sx={{ ml: '5px', fontSize: '1.1rem' }} />}
        </Button>
      </Box>
    </BoardContainer>
  );
};
