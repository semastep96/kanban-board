import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { FC } from 'react';
import { BoardCard } from '../components/BoardCard';
import { CreateBoardCard } from '../components/CreateBoardCard';

export const boards: Board[] = [
  {
    id: 'b1',
    name: 'My Kanban board 1',
    lastOpen: '2023-01-01T01:30:00',
    backgroundImg:
      'https://img.freepik.com/free-photo/gray-kitty-with-monochrome-wall-behind-her_23-2148955130.jpg?w=2000',
    columns: [
      {
        id: 'b1c1',
        title: 'column 1',
        order: 1,
        min: 0,
        max: 0,
        tasks: [
          { id: 'b1c1t1', order: 0, text: 'task1' },
          { id: 'b1c1t2', order: 1, text: 'task2' },
          { id: 'b1c1t3', order: 2, text: 'task3' },
        ],
      },
      {
        id: 'b1c2',
        title: 'column 2',
        order: 0,
        min: 0,
        max: 0,
        tasks: [
          { id: 'b1c2t1', order: 0, text: 'task1' },
          { id: 'b1c2t2', order: 1, text: 'task2' },
          { id: 'b1c2t3', order: 2, text: 'task3' },
        ],
      },
    ],
  },
  {
    id: 'b2',
    name: 'My Kanban board 2',
    lastOpen: '2023-01-01T02:30:00',
    backgroundImg:
      'https://img.freepik.com/free-vector/pastel-ombre-background-pink-purple_53876-120750.jpg?w=2000',
    columns: [
      {
        id: 'b2c1',
        title: 'column 1',
        order: 0,
        min: 0,
        max: 0,
        tasks: [
          { id: 'b2c1t1', order: 0, text: 'task1' },
          { id: 'b2c1t2', order: 1, text: 'task2' },
          { id: 'b2c1t3', order: 2, text: 'task3' },
        ],
      },
      {
        id: 'b2c2',
        title: 'column 2',
        order: 1,
        min: 0,
        max: 0,
        tasks: [
          { id: 'b2c2t1', order: 0, text: 'task1' },
          { id: 'b2c2t2', order: 1, text: 'task2' },
          { id: 'b2c2t3', order: 2, text: 'task3' },
        ],
      },
    ],
  },
  {
    id: 'b3',
    name: 'My Kanban board 3',
    lastOpen: '2023-01-01T01:30:00',
    columns: [
      {
        id: 'b3c1',
        title: 'column 1',
        order: 0,
        min: 0,
        max: 0,
        tasks: [
          { id: 'b3c1t1', order: 0, text: 'task1' },
          { id: 'b3c1t2', order: 1, text: 'task2' },
          { id: 'b3c1t3', order: 2, text: 'task3' },
        ],
      },
      {
        id: 'b1c2',
        title: 'column 2',
        order: 1,
        min: 0,
        max: 0,
        tasks: [
          { id: 'b3c2t1', order: 0, text: 'task1' },
          { id: 'b3c2t2', order: 1, text: 'task2' },
          { id: 'b3c2t3', order: 2, text: 'task3' },
        ],
      },
    ],
  },
  {
    id: 'b4',
    name: 'My Kanban board 4',
    lastOpen: '2023-01-01T04:30:00',
    backgroundImg: 'https://wallpaperaccess.com/full/3652762.jpg',
    columns: [
      {
        id: 'b4c1',
        title: 'column 1',
        order: 0,
        min: 0,
        max: 0,
        tasks: [
          { id: 'b4c1t1', order: 0, text: 'task1' },
          { id: 'b4c1t2', order: 1, text: 'task2' },
          { id: 'b4c1t3', order: 2, text: 'task3' },
        ],
      },
      {
        id: 'b4c2',
        title: 'column 2',
        order: 1,
        min: 0,
        max: 0,
        tasks: [
          { id: 'b4c2t1', order: 0, text: 'task1' },
          { id: 'b4c2t2', order: 1, text: 'task2' },
          { id: 'b4c2t3', order: 2, text: 'task3' },
        ],
      },
    ],
  },
];

export const Boards: FC = () => {
  const lastThreeBoards = [...boards]
    .sort((a, b) => {
      return new Date(a.lastOpen).getTime() - new Date(b.lastOpen).getTime();
    })
    .reverse()
    .slice(0, 3);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt="0.5rem" mb={'2rem'}>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={'center'}>
            Recently watched
          </Typography>
        </Grid>
        {lastThreeBoards.map((board) => (
          <Grid item xs={12} md={6} lg={4} key={board.id}>
            <BoardCard board={board} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} marginBottom="2rem">
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={'center'}>
            All Boards
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CreateBoardCard />
        </Grid>
        {boards.map((board) => (
          <Grid item xs={12} md={6} lg={4} key={board.id}>
            <BoardCard board={board} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
