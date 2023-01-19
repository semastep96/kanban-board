import React from 'react';
import { useParams } from 'react-router-dom';
import { boards } from './Boards';

export const Board = () => {
  const { boardId } = useParams();
  const board = boards.find((board => board.id === boardId));
  if (!board) {
    throw new Error(`Board ${boardId} not found`);
  }
  return <div>{board.name}</div>;
};
