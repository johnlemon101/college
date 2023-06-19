import { unverifiedInstance } from '../../configs/axiosConfig';
import { patientLogoutAction, patientInfoError, patientInfoStart, patientInfoSuccess } from '../features/patientSlice';

export const login = async (dispatch, patient) => {
  dispatch(patientInfoStart());
  try {
    const res = await unverifiedInstance.post('/patients/login', patient);
    dispatch(patientInfoSuccess(res.data));
  } catch (err) {
    dispatch(patientInfoError());
    console.log(err);
    return err.response.status;
  }
};

export const register = async patient => {
  try {
    const res = await unverifiedInstance.post('/patients/register', patient);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const tokenLogout = async (dispatch, refreshToken) => {
  await unverifiedInstance.post('/patients/logout', { token: refreshToken });
  dispatch(patientLogoutAction());
  console.log('Completed');
};
