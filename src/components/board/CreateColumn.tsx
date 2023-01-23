import { Button, Dialog } from '@mui/material';
import React, { FC, useState } from 'react';
import { BoardsHelper } from '../../helpers/BoardsHelper';
import Store from '../../store/Store';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { CreateColumnForm } from '../forms/CreateColumnForm';

interface CreateColumnProps {
  board: Board;
}

export const CreateColumn: FC<CreateColumnProps> = ({ board }) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const openCreateColumnDialog = () => {
    setIsOpenDialog(true);
  };

  const onCreateColumn = (columnName: string, max: number) => {
    const column = BoardsHelper.createColumn(columnName, max);
    Store.createColumn(board.id, column);
    setIsOpenDialog(false);
  };
  return (
    <>
      <Button
        variant="contained"
        sx={{ width: '272px', flexShrink: '0' }}
        onClick={openCreateColumnDialog}
      >
        create column
        {<ControlPointIcon sx={{ ml: '5px', fontSize: '1.1rem' }} />}
      </Button>
      <Dialog open={isOpenDialog} onClose={() => setIsOpenDialog(false)}>
        <CreateColumnForm onCreate={onCreateColumn} />
      </Dialog>
    </>
  );
};
