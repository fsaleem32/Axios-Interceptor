import axios from 'axios';
import { BASE_URL } from './config';
import { store } from '../redux-toolkit';

const AuthApi = axios.create({
  baseURL: BASE_URL,
});

const Api = axios.create({
  baseURL: BASE_URL,
});

Api.interceptors.request.use(function (config) {
  const token = store.getState().AuthSlice.token;
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export { AuthApi, Api };
