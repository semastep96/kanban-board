import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

interface BoardTopBarProps {
  board: Board
}

export const BoardTopBar: FC<BoardTopBarProps> = ({board}) => {
  return (
    <Box sx={{ display: 'flex', p: '1rem', bgcolor: 'rgba(0, 0, 0, 0.3)' }}>
      <Typography variant="h6" color={'white'}>
        {board.name}
      </Typography>
    </Box>
  );
};
