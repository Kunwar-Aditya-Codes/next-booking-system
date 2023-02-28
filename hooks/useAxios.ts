import axios from 'axios';
import { getCookie } from 'cookies-next';

export default function useAxios() {
  axios.interceptors.request.use((config) => {
    const token = getCookie('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return axios;
}
