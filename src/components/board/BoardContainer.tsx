import { Box } from '@mui/material';
import React, { FC } from 'react';

interface BoardContainerProps {
  children: React.ReactNode;
  board: Board;
}

export const BoardContainer: FC<BoardContainerProps> = ({
  children,
  board,
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${board.backgroundImg}), linear-gradient(90deg, rgba(81,70,255,1) 0%, rgba(180,180,255,1) 83%, rgba(100,0,255,0.9094231442577031) 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: board.backgroundColor || '#bd4cc9a7',
        height: '100%',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
