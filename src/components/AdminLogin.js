import React from 'react';

import { useState } from 'react';
import axios, { Axios } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
import { BsPeopleFill } from 'react-icons/bs';
import { ImKey } from 'react-icons/im';
import Header from './Header';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { login } from '../redux/apiCalls/patientApi';
import toast, { Toaster } from 'react-hot-toast';
import { adminLogin } from '../redux/apiCalls/adminApi';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const loginAdmin = async e => {
    e.preventDefault();
    toast.loading('Logging In', {
      id: 'admin-login-toast',
    });
    const adminData = {
      username,
      password,
    };
    const data = await adminLogin(dispatch, adminData);
    if (data === 401) {
      toast.error('Wrong Credentials', {
        id: 'admin-login-toast',
      });
    } else {
      toast.success('Successfully Logged In', {
        id: 'admin-login-toast',
      });
      navigate('/dashboard');
    }
  };

  return (
    <div>
      {/* <Header /> */}

      <div className='container-fluid ps-md-0'>
        <div className='row g-0 p-5'>
          <div className='design d-flex  '>
            <div className=' d-flex col-md-4 col-lg-6 bg-image '></div>
            <div className='col-md-8 col-lg-6'>
              <div className='login d-flex align-items-center py-5 '>
                <div className='container '>
                  <div className='row'>
                    <div className='col-md-9 col-lg-8 mx-auto'>
                      <h4 className='text-center mb-4'>Welcome Admin!</h4>

                      <form>
                        <div className='form-floating mb-3'>
                          <input type='username' className='form-control' value={username} onChange={e => setUsername(e.target.value)} id='floatingInput' />
                          <label htmlFor='floatingInput'>
                            <BsPeopleFill></BsPeopleFill> Username
                          </label>
                        </div>
                        <div className='form-floating mb-3'>
                          <input type='password' className='form-control' value={password} onChange={e => setPassword(e.target.value)} id='floatingPassword' />
                          <label htmlFor='floatingPassword'>
                            <ImKey></ImKey> Password
                          </label>
                        </div>

                        <div className='form-check mb-3'>
                          <input className='form-check-input' type='checkbox' value='' id='rememberPasswordCheck' />
                          <label className='form-check-label' htmlFor='rememberPasswordCheck'>
                            Remember password
                          </label>
                        </div>

                        <div className='d-grid'>
                          <button className='btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2' type='submit' onClick={loginAdmin}>
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
