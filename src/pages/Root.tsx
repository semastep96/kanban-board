import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Root: FC = () => {
  return (
    <div className="App">
      <h1>Root page</h1>
      <Outlet />
    </div>
  );
};
