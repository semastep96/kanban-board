import { Box, IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { BoardTopBarMenu } from './BoardTopBarMenu';

interface BoardTopBarProps {
  board: Board;
}

export const BoardTopBar: FC<BoardTopBarProps> = ({ board }) => {
  const navigate = useNavigate();
  const handleGoBack: React.MouseEventHandler<HTMLButtonElement> = () =>
    navigate('/boards');

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: '1rem',
        bgcolor: 'rgba(0, 0, 0, 0.3)',
      }}
    >
      <Typography variant="h6" color={'white'}>
        {board.name}
      </Typography>

      <Box>
        <IconButton onClick={handleGoBack}>
          <ArrowBackIcon
            sx={{
              color: 'white',
              transition: '0.5s',
              transform: 'rotate(-180deg)',
              '&:hover': { transform: 'scale(1.3) rotate(-180deg)' },
            }}
          />
        </IconButton>
        <BoardTopBarMenu />
      </Box>
    </Box>
  );
};
