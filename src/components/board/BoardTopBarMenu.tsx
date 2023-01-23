import React, { FC, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/system';
import Store from '../../store/Store';
import { useNavigate } from 'react-router-dom';

interface BoardTopBarMenuProps {
  board: Board;
}

export const BoardTopBarMenu: FC<BoardTopBarMenuProps> = ({ board }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onBoardDelete = (
    boardId: string
  ): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      Store.removeBoard(boardId);
      navigate('/boards');
    };
  };

  return (
    <>
      <IconButton
        sx={{ ml: '0.5rem' }}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: 'white' }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Box
            sx={{ display: 'flex', alignItems: 'center' }}
            onClick={onBoardDelete(board.id)}
          >
            Delete board
            <DeleteIcon sx={{ ml: '0.5rem' }} />
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
};
