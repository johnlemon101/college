import { tokenLogout } from '../redux/apiCalls/patientApi';
import { updateAdminAccessToken } from '../redux/features/adminSlice';
import { updateAccessToken } from '../redux/features/patientSlice';
import { store } from '../redux/store';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8800/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const unverifiedInstance = axios.create({
  baseURL: 'http://localhost:8800/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const adminInstance = axios.create({
  baseURL: 'http://localhost:8800/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getToken = async (refreshToken, dispatch) => {
  console.log('Sending Refresh Token');
  const res = await axios.post('http://localhost:8800/api/patients/refresh', { token: refreshToken });
  if (res.data.logout) {
    tokenLogout(refreshToken, dispatch);
  }
  return res.data;
};
const getAdminToken = async (refreshToken, dispatch) => {
  console.log('Sending Refresh Token');
  const res = await axios.post('http://localhost:8800/api/admin/refresh', { token: refreshToken });
  if (res.data.logout) {
    tokenLogout(refreshToken, dispatch);
  }
  return res.data;
};

axiosInstance.interceptors.request.use(async config => {
  const state = store.getState();
  let currentDate = new Date();
  const decodedToken = jwt_decode(state.auth.patient.accessToken);
  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    const { accessToken } = await getToken(state.auth.patient.refreshToken, store.dispatch);
    store.dispatch(updateAccessToken({ accessToken }));
    config.headers['token'] = `Bearer ${accessToken}`;
  } else {
    config.headers['token'] = `Bearer ${state.auth.patient.accessToken}`;
  }
  config.params = config.params || {};
  return config;
});

adminInstance.interceptors.request.use(async config => {
  const state = store.getState();
  let currentDate = new Date();
  const decodedToken = jwt_decode(state.admin.admin.accessToken);
  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    const { accessToken } = await getAdminToken(state.admin.admin.refreshToken, store.dispatch);
    store.dispatch(updateAdminAccessToken({ accessToken }));
    config.headers['token'] = `Bearer ${accessToken}`;
  } else {
    config.headers['token'] = `Bearer ${state.admin.admin.accessToken}`;
  }
  config.params = config.params || {};
  return config;
});
export { adminInstance };
export default axiosInstance;
