import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import { BsPeopleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import axiosInstance from '../configs/axiosConfig';
import toast, { Toaster } from 'react-hot-toast';

export default function Update() {
  const { vid } = useParams();

  const [updata, setUpdata] = useState([]);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [problem, setProblem] = useState('');

  // const config= {
  //       headers :{
  //           Authorization : 'Bearer '+localStorage.getItem('t')
  //       }
  //   }

  useEffect(() => {
    axiosInstance
      .get('/appointments/' + vid)
      .then(result => {
        console.log(result.data);
        setUpdata(result.data);
        setFullname(result.data.fullName);
        setEmail(result.data.email);
        setAddress(result.data.address);
        setPhone(result.data.phone);
        setGender(result.data.gender);
        setDate(result.data.date);
        setProblem(result.data.problem);
      })
      .catch();
  }, []);

  const updateInfo = async e => {
    e.preventDefault();
    toast.loading('Updating Appointment', {
      id: 'update-appointment-toast',
    });
    const pdata = {
      vid,
      fullName: fullname,
      email,
      address,
      phone,
      gender,
      date,
      problem,
    };
    try {
      await axiosInstance.put(`/appointments/${vid}`, pdata);
      toast.success('Successfully updated the appointment', {
        id: 'update-appointment-toast',
      });
    } catch (error) {
      toast.error('Failed to update the appointment', {
        id: 'update-appointment-toast',
      });
    }
  };
  return (
    <div>
      <Header />
      <div className='container-fluid ps-md-0 '>
        <div className='row g-0 p-5'>
          <div className='design d-flex  '>
            <div className='d-none d-md-flex col-md-4 col-lg-6 appoint-image'></div>
            <div className='col-md-8 col-lg-6'>
              <div className='login d-flex align-items-center py-5'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-9 col-lg-8 mx-auto'>
                      <h4 className='text-center mb-4'>BOOK NEW APPOINTMENT!</h4>

                      <form>
                        <div className='form-floating mb-3'>
                          <input type='fullname' className='form-control' value={fullname} onChange={e => setFullname(e.target.value)} id='floatingInput' />
                          <label htmlFor='floatingInput'>
                            {' '}
                            <BsPeopleFill></BsPeopleFill> Fullname
                          </label>
                        </div>
                        <div className='form-floating mb-3'>
                          <input type='email' className='form-control' value={email} onChange={e => setEmail(e.target.value)} id='floatingemail' />
                          <label htmlFor='floatingemail'>
                            <MdEmail></MdEmail> E-mail
                          </label>
                        </div>

                        <div className='form-floating mb-3'>
                          <input type='address' className='form-control' value={address} onChange={e => setAddress(e.target.value)} id='floatingaddress' />
                          <label htmlFor='floatingaddress'>
                            <FaHome></FaHome> Address
                          </label>
                        </div>

                        <div className='form-floating mb-3'>
                          <input type='phone' className='form-control' value={phone} onChange={e => setPhone(e.target.value)} id='floatingphone' />
                          <label htmlFor='floatingphone'>
                            <BsPhoneVibrateFill></BsPhoneVibrateFill> Phone
                          </label>
                        </div>

                        <div className='form-floating mb-3'>
                          <label htmlFor='floatingender' className='gender1'>
                            Select Gender
                          </label>
                          <select type='gender' className='form-control' value={gender} onChange={e => setGender(e.target.value)} id='floatinggender'>
                            {/* <option selected> </option> */}
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Others'>Others</option>
                          </select>
                        </div>

                        <div className='form-floating mb-3'>
                          <input type='date' className='form-control' value={date} onChange={e => setDate(e.target.value)} id='floatingdate' />
                          <label htmlFor='floatingdate'>Date</label>
                        </div>

                        {/* <div className='form-floating mb-3'>
                          <input type='file' className='form-control' onChange={e => setPimage(e.target.files[0])} id='floatingimage' />
                          <label htmlFor='floatingimage' className='img1'>
                            Select image
                          </label>
                        </div> */}

                        <div className='form-floating mb-3'>
                          <input type='problem' className='form-control' value={problem} onChange={e => setProblem(e.target.value)} id='floatingproblem' />
                          <label htmlFor='floatingproblem '>Problem</label>
                        </div>

                        <div className='d-grid'>
                          <button className='btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2' type='submit' onClick={updateInfo}>
                            Update
                          </button>
                          <div className='text-center'></div>
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
      <Toaster />
    </div>
  );
}
