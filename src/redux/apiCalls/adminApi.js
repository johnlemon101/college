import { unverifiedInstance } from '../../configs/axiosConfig';
import { adminLogoutAction, adminInforError, adminInfoStart, adminInfoSuccess } from '../features/adminSlice';

export const adminLogin = async (dispatch, admin) => {
  dispatch(adminInfoStart());
  try {
    const res = await unverifiedInstance.post('/admin/login', admin);
    dispatch(adminInfoSuccess(res.data));
  } catch (err) {
    dispatch(adminInforError());
    console.log(err);
    return err?.response?.status;
  }
};

export const adminRegister = async admin => {
  try {
    const res = await unverifiedInstance.post('/admin/register', admin);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const adminTokenLogout = async (dispatch, refreshToken) => {
  await unverifiedInstance.post('/admin/logout', { token: refreshToken });
  dispatch(adminLogoutAction());
  console.log('Completed');
};
