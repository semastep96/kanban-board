import { Box, Paper } from '@mui/material';
import React, { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import Store from '../../store/Store';
import { dragTaskItem, dragTypes } from '../../types/dragTypes';

interface BoardTaskProps {
  board: Board;
  column: Column;
  task: Task;
}

export const BoardTask: FC<BoardTaskProps> = ({ task, board, column }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dragTypes.task,
    item: {
      taskId: task.id,
      taskText: task.text,
      boardId: board.id,
      columnId: column.id,
    },
    options: { dropEffect: 'move' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: dragTypes.task,
    drop(item: dragTaskItem) {
      Store.dragTask(item, column.id, task.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  drag(drop(ref));
  return (
    <>
      <Paper
        ref={ref}
        key={task.id}
        sx={{
          p: '1rem',
          m: '0.5rem',
          bgcolor: '#d8d8d8',
          opacity: `${isDragging ? '0.5' : '1'}`,
          cursor: 'grab',
          userSelect: 'none',
        }}
      >
        {task.text}
      </Paper>
      {isOver ? (
        <Box
          sx={{
            height: '30px',
            bgcolor: 'secondary.main',
            m: '0.5rem',
            borderRadius: '5px',
          }}
        />
      ) : undefined}
    </>
  );
};
