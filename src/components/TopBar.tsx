import React, { FC } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

export const TopBar: FC = () => {
  const navigate = useNavigate();
  const { user, signout } = useAuth();
  const handleSignout = () => {
    signout(() => navigate('/signin'));
  };
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Link to={'/'}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              backgroundColor: 'rgba(0,0,0, 0.2)',
              borderRadius: '15px',
              padding: '10px 20px',
              fontSize: { xs: '15px', sm: '1.25rem' },
            }}
          >
            {'Kanban Boards App'}
          </Typography>
        </Link>
        <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="subtitle1"
            component={'div'}
            sx={{
              marginRight: '1rem',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            {user?.username}
          </Typography>
          <Avatar
            src={user?.img}
            sx={{ marginY: '0.8rem', width: '46px', height: '46px' }}
          />
          <IconButton
            onClick={handleSignout}
            sx={{
              marginLeft: '0.5rem',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            <LogoutIcon
              sx={{
                color: 'white',
                fontSize: '1.5rem',
              }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
