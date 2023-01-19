import { Box } from '@mui/system';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { TopBar } from '../components/TopBar';
import { useScrollToTop } from '../hooks/useScrollToTop';

export const Root: FC = () => {
  useScrollToTop();
  return (
    <div className="App" >
      <TopBar />
      <Box sx={{ p: '0 15px 2rem', minHeight: '100%' }}>
        <h1>Root page</h1>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};
