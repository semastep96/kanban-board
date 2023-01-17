import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={'/signin'} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
