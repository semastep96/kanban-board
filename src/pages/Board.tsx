import React from 'react';
import { useParams } from 'react-router-dom';
import { BoardContainer } from '../components/board/BoardContainer';
import { BoardTopBar } from '../components/board/BoardTopBar';
import { boards } from './Boards';

export const Board = () => {
  const { boardId } = useParams();
  const board = boards.find((board) => board.id === boardId);
  if (!board) {
    throw new Error(`Board ${boardId} not found`);
  }

  return (
    <BoardContainer board={board}>
      <BoardTopBar board={board}/>
    </BoardContainer>
  );
};
