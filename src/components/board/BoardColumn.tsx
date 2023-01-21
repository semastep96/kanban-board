import { Box, IconButton, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';
import { BoardTask } from './BoardTask';
import DeleteIcon from '@mui/icons-material/Delete';

interface BoardColumnProps {
  column: Column;
}

export const BoardColumn: FC<BoardColumnProps> = ({ column }) => {
  const isManyTasks = column.max && column.max < column.tasks.length;

  return (
    <Paper
      elevation={4}
      sx={{
        p: '0.5rem',
        width: '272px',
        maxHeight: '100%',
        overflowY: 'scroll',
        bgcolor: isManyTasks ? 'error.main' : 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6">{column.title}</Typography>
        <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Typography variant="body2">
            {column.max ? `${column.tasks.length}/${column.max}` : undefined}
          </Typography>
          <Box>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {column.tasks.map((task) => (
        <BoardTask task={task} key={task.id} />
      ))}
    </Paper>
  );
};
