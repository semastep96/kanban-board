import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import { BoardCard } from './BoardCard';
import { CreateBoardCard } from './CreateBoardCard';

interface BoardCardsProps {
  title: string;
  boards: Board[];
  CardCreator?: boolean;
}

export const BoardCards: FC<BoardCardsProps> = ({
  boards,
  title,
  CardCreator,
}) => {
  return (
    <Grid container spacing={3} mt="0.5rem" marginBottom="2rem">
      <Grid item xs={12}>
        <Typography variant="h4" textAlign={'center'}>
          {title}
        </Typography>
      </Grid>
      {CardCreator && (
        <Grid item xs={12} md={6} lg={4}>
          <CreateBoardCard />
        </Grid>
      )}
      {boards.map((board) => (
        <Grid item xs={12} md={6} lg={4} key={board.id}>
          <BoardCard board={board} />
        </Grid>
      ))}
    </Grid>
  );
};
