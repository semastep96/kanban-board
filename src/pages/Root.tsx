import { Box } from '@mui/system';
import React, { FC, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { TopBar } from '../components/TopBar';
import { useScrollToTop } from '../hooks/useScrollToTop';

export const Root: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/boards');
    }
  }, [location]);

  useScrollToTop();
  return (
    <div className="App">
      <TopBar />
      <Box sx={{ p: '1rem 24px 2rem', minHeight: '100%' }}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};
