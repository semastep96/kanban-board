import { Paper } from '@mui/material';
import React, { FC } from 'react';

interface BoardTaskProps {
  task: Task;
}

export const BoardTask: FC<BoardTaskProps> = ({ task }) => {
  return (
    <Paper key={task.id} sx={{ p: '1rem', m: '0.5rem', bgcolor: '#d8d8d8' }}>
      {task.text}
    </Paper>
  );
};
