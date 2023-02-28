import { AuthenticationContext } from '@/context/AuthContext';
import axios from 'axios';
import { useContext } from 'react';
import toast from 'react-hot-toast';

export default function useAuth() {
  const { data, setAuthState, error, loading } = useContext(
    AuthenticationContext
  );

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuthState({ loading: true, error: null, data: null });

    toast.loading('Signing in...', { id: 'signIn' });

    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/login',
        {
          email,
          password,
        }
      );

      setAuthState({ loading: false, error: null, data: response.data });
      toast.success('Signed in successfully', { id: 'signIn' });
    } catch (error: any) {
      console.log(error);
      setAuthState({
        loading: false,
        error: error?.response?.data?.message || 'Something went wrong',
        data: null,
      });
      toast.error('Something went wrong', { id: 'signIn' });
    }
  };

  const signUp = async ({
    firstName,
    lastName,
    email,
    password,
    phone,
    city,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    city: string;
  }) => {
    setAuthState({ loading: true, error: null, data: null });

    toast.loading('Signing up...', { id: 'signUp' });

    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/register',
        {
          firstName,
          lastName,
          email,
          password,
          phone,
          city,
        }
      );

      setAuthState({ loading: false, error: null, data: response.data });
      toast.success('Signed up successfully', { id: 'signUp' });
    } catch (error: any) {
      console.log(error);
      setAuthState({
        loading: false,
        error: error?.response?.data?.message || 'Something went wrong',
        data: null,
      });
      toast.error(error?.response?.data?.message || 'Something went wrong', {
        id: 'signUp',
      });
    }
  };

  return { signIn, signUp };
}
