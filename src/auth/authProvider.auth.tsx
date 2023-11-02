import React, {
  PropsWithChildren,
  useState,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {RootState, useDispatch, useSelector} from '@src/store';

import {AuthContext} from './authContext.auth';
import {session, logout} from './auth.slice';

interface AuthProviderProps extends PropsWithChildren {}

const AuthProvider = ({children}: AuthProviderProps) => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state: RootState) => state.auth);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logIn = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const logOut = useCallback(() => {
    dispatch(
      logout({
        onSuccess: async () => {
          await AsyncStorage.removeItem('@token');
          setLoggedIn(false);
        },
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    (() => {
      dispatch(session({onSuccess: () => logIn()}));
    })();
  }, [logIn, dispatch]);

  return (
    <AuthContext.Provider value={{isLoggedIn, logIn, logOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider};
