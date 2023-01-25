import React from 'react';
import { Box, Paper } from '@mui/material';
import { usePreview } from 'react-dnd-preview';
import { dragTypes } from '../../types/dragTypes';

export const DndPreview = () => {
  const preview = usePreview();
  if (!preview.display) {
    return null;
  }
  const { itemType, item, style } = preview as {
    itemType: string;
    item: { taskText: string };
    style: React.CSSProperties;
  };
  if (itemType === dragTypes.task) {
    return (
      <Paper
        className={'item-list__item'}
        style={style}
        sx={{
          p: '1rem',
          m: '0.5rem',
          bgcolor: '#b7b6b6',
          opacity: '0.8',
          width: '240px',
          rotate: '3deg',
        }}
      >
        {item.taskText}
      </Paper>
    );
  }
  return (
    <Box
      className={'item-list__item'}
      style={style}
      sx={{
        opacity: '0.8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {itemType}
    </Box>
  );
};
