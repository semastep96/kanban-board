import React, { createContext, FC, useState } from 'react';

interface User {
  username: string;
  img: string;
}

interface AuthContextType {
  user: User | null;
  signin: (newUser: User, cb: () => void) => void;
  signout: (cb: () => void) => void;
}

const initialAuthContext = {
  user: null,
  signin(u: User, cb: () => void) {
    return { u, cb };
  },
  signout(cb: () => void) {
    return { cb };
  },
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signin = (newUser: User, cb: () => void) => {
    setUser(newUser);
    cb();
  };

  const signout = (cb: () => void) => {
    setUser(null);
    cb();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
