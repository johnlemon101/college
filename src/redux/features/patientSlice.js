import { createSlice } from '@reduxjs/toolkit/dist';

const initialState = {
  patient: {},
  isFetching: false,
  error: false,
  isLogged: false,
};

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    patientInfoStart: state => {
      state.isFetching = true;
      state.error = false;
    },
    patientInfoSuccess: (state, action) => {
      state.isFetching = false;
      state.patient = action.payload;
      state.error = false;
      state.isLogged = true;
    },
    patientInfoError: state => {
      state.isFetching = false;
      state.error = true;
      state.isLogged = false;
    },
    patientLogoutAction: state => {
      state.isFetching = false;
      state.error = false;
      state.patient = {};
      state.isLogged = false;
    },
    updateAccessToken: (state, action) => {
      state.patient = { ...state.patient, accessToken: action.payload.accessToken };
    },
  },
});

export const { patientInfoStart, patientInfoError, patientInfoSuccess, patientLogoutAction, updateAccessToken } = patientSlice.actions;

export default patientSlice.reducer;
