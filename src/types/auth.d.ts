interface User {
  username: string;
  img: string;
}

interface AuthContextType {
  user: User | null;
  signin: (newUser: User, cb: () => void) => void;
  signout: (cb: () => void) => void;
}