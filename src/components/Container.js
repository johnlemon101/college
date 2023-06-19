import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Bookappoint from './Bookappoint';
import Myappointment from './Myappointment';
import Single from './Single';
import Update from './Update';
import Dashboard from './Dashboard';
import Dashviewappoint from './Dashviewappoint';
import { useSelector } from 'react-redux';
import AdminLogin from './AdminLogin';
import Doctors from './Doctors';

export default function Container() {
  const { isLogged } = useSelector(state => state.auth);
  const adminLogged = useSelector(state => state.admin.isLogged);
  console.log(adminLogged);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/bookappoint' element={isLogged ? <Bookappoint /> : <Navigate to='/' />} />
      <Route path='/myappointment' element={isLogged ? <Myappointment /> : <Navigate to='/' />} />
      <Route path='/single/:vid' element={isLogged ? <Single /> : <Navigate to='/' />} />
      <Route path='/updateinfo/:vid' element={isLogged ? <Update /> : <Navigate to='/' />} />
      <Route path={'/dashboard'} element={adminLogged ? <Dashboard /> : <Navigate to='/adminlogin' />} />
      <Route path={'/dashview'} element={adminLogged ? <Dashviewappoint /> : <Navigate to='/adminlogin' />} />
      <Route path={'/doctors'} element={adminLogged ? <Doctors /> : <Navigate to='/adminlogin' />} />
      <Route path={'/adminlogin'} element={<AdminLogin />} />
    </Routes>
  );
}
