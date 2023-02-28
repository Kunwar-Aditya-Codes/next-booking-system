'use client';

import axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';
import { getCookie } from 'cookies-next';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
}

interface State {
  loading: boolean;
  error: null | string;
  data: User | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
});

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    error: null,
    data: null,
  });

  const persistLogin = async () => {
    setAuthState({ loading: true, error: null, data: null });

    try {
      const token = getCookie('token');

      if (!token) {
        return setAuthState({
          loading: false,
          error: null,
          data: null,
        });
      }

      const response = await axios.get('http://localhost:3000/api/user/info', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setAuthState({ loading: false, error: null, data: response.data });
    } catch (error: any) {
      setAuthState({
        loading: false,
        error: error?.response?.data?.message || 'Something went wrong',
        data: null,
      });
    }
  };

  useEffect(() => {
    console.log('Persisting login');
    persistLogin();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        ...authState,
        setAuthState,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
