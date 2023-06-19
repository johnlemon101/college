import { createSlice } from '@reduxjs/toolkit/dist';

const initialState = {
  admin: {},
  isFetching: false,
  error: false,
  isLogged: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    adminInfoStart: state => {
      state.isFetching = true;
      state.error = false;
    },
    adminInfoSuccess: (state, action) => {
      state.isFetching = false;
      state.admin = action.payload;
      state.error = false;
      state.isLogged = true;
    },
    adminInforError: state => {
      state.isFetching = false;
      state.error = true;
      state.isLogged = false;
    },
    adminLogoutAction: state => {
      state.isFetching = false;
      state.error = false;
      state.patient = {};
      state.isLogged = false;
    },
    updateAdminAccessToken: (state, action) => {
      state.patient = { ...state.patient, accessToken: action.payload.accessToken };
    },
  },
});

export const { adminInfoStart, adminInforError, adminInfoSuccess, adminLogoutAction, updateAdminAccessToken } = adminSlice.actions;

export default adminSlice.reducer;
