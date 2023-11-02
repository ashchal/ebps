import {createContext} from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  logIn: () => false,
  logOut: () => false,
  loading: true,
});

export {AuthContext};
