import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';
import { BoardTask } from './BoardTask';
import DeleteIcon from '@mui/icons-material/Delete';
import Store from '../../store/Store';

interface BoardColumnProps {
  board: Board;
  column: Column;
}

export const BoardColumn: FC<BoardColumnProps> = ({ column, board }) => {
  const isManyTasks = column.max && column.max < column.tasks.length;
  const onDelete: React.MouseEventHandler<HTMLDivElement> = () => {
    Store.deleteColumn(board.id, column.id);
  };
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
        <Typography
          variant="h6"
          sx={{
            maxWidth: '80%',
            maxHeight: '3em',
            overflow: 'hidden',
          }}
        >
          {column.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Typography variant="body2">
            {column.max ? `${column.tasks.length}/${column.max}` : undefined}
          </Typography>
          <Box onClick={onDelete}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {column.tasks.map((task) => (
        <BoardTask task={task} key={task.id} />
      ))}
      <Button variant="contained" sx={{ my: '0.5rem', fontSize: '10px' }}>
        Create task
      </Button>
    </Paper>
  );
};
