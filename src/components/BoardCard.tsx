import { Card, CardActionArea, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface BoardCardProps {
  board: Board;
}

export const BoardCard: FC<BoardCardProps> = ({ board }) => {
  const navigate = useNavigate();

  const handleCardClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(board.id);
  };

  return (
    <Card
      sx={{
        height: '200px',
        background: `url(${board.backgroundImg}), linear-gradient(90deg, rgba(81,70,255,1) 0%, rgba(180,180,255,1) 83%, rgba(100,0,255,0.9094231442577031) 100%), #bd4cc9a7`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <CardActionArea
        onClick={handleCardClick}
        sx={{
          height: '100%',
          padding: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'rgba(0,0,0,0.3)',
        }}
      >
        <Typography variant="h6" color="white">
          {board.name}
        </Typography>
      </CardActionArea>
    </Card>
  );
};
