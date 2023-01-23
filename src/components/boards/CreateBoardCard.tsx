import { Box, Card, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostAddIcon from '@mui/icons-material/PostAdd';

export const CreateBoardCard = () => {
  const navigate = useNavigate();
  const onClickHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    navigate('new');
  };
  return (
    <Card sx={{ height: '200px', bgcolor: '#8d8fff69' }}>
      <Box
        onClick={onClickHandler}
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6" color={'white'} textAlign={'center'} mt={'-1rem'} mb={'0.5rem'}>
          Create new
        </Typography>
        <IconButton
          sx={{ transition: '1s', '&:hover': { transform: 'scale(1.2)' } }}
        >
          <PostAddIcon sx={{ color: 'white', fontSize: 50 }} />
        </IconButton>
      </Box>
    </Card>
  );
};
