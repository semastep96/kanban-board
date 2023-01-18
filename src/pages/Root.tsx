import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../components/TopBar';
import { useScrollToTop } from '../hooks/useScrollToTop';

export const Root: FC = () => {
  useScrollToTop();
  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <TopBar />
      <h1>Root page</h1>
      <Outlet />
    </div>
  );
};
