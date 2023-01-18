import { Button } from '@mui/material';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Root: FC = () => {
  const navigate = useNavigate();
  const {signout} = useAuth();
  const handleSignout = () => {
    signout(() => navigate(-1));
  };
  return (
    <div className="App">
      <h1>Root page</h1>
      <Button variant='contained' onClick={handleSignout}>Logout</Button>
      <Outlet />
    </div>
  );
};
