import React, { createContext, FC, useState } from 'react';
import { Cookies } from '../helpers/Cookies';

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(Cookies.getUser());

  const signin = (newUser: User, cb: () => void) => {
    Cookies.saveUser(newUser);
    setUser(newUser);
    cb();
  };

  const signout = (cb: () => void) => {
    Cookies.removeUser();
    setUser(null);
    cb();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
