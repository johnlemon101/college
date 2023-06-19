import React, { useEffect } from 'react';
import { useState } from 'react';
import axiosInstance from '../configs/axiosConfig';
import './appoint.css';
import { Dropdown } from 'bootstrap';
import { BsPeopleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import Header from './Header';
import toast, { Toaster } from 'react-hot-toast';
import { storage } from '../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';

export default function Bookappoint() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [problem, setProblem] = useState('');
  const [message, setMessage] = useState('');
  const [pimage, setPimage] = useState('');
  const [doctor, setDoctor] = useState('');
  const patientId = useSelector(state => state.auth.patient._id);
  const [doctors, setDoctors] = useState();

  const uploadImage = () => {
    return new Promise((resolve, reject) => {
      const fileName = new Date().getTime() + 'avatar' + pimage?.name;
      const postRef = ref(storage, `/patients/${fileName}`);
      const uploadTask = uploadBytesResumable(postRef, pimage);
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        err => {
          console.log(err);
          toast.error('Something went wrong!', {
            id: 'add-appointment-toast',
          });
          reject(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(url => {
            console.log(url);
            resolve(url);
          });
        }
      );
    });
  };

  const appbook = e => {
    e.preventDefault();
    toast.loading('Creating an appointment', {
      id: 'add-appointment-toast',
    });

    uploadImage().then(async link => {
      try {
        await axiosInstance.post('/appointments/', {
          fullName: fullname,
          email,
          address,
          phone,
          gender,
          date,
          pimage: link,
          problem,
          patientId,

          doctor: '6490642b8e7e0ddd196b7980',
        });
        emailjs.send(
          'service_5cjxv5k',
          'template_9604eqr',
          {
            fullname,
            email,
            address,
            phone,
            gender,
            date,
          },
          '1ee4RvMteXEkJR_WP'
        );
        toast.success('Successfully Created the appointment', {
          id: 'add-appointment-toast',
        });
        setFullname('');
        setAddress('');
        setDate('');
        setEmail('');
        setGender('');
        setPhone('');
        setPimage();
        setProblem('');
        setDoctor('');
      } catch (error) {
        if (error.response.status) {
          toast.error('Maximum appointments reached', {
            id: 'add-appointment-toast',
          });
        } else {
          toast.error('Something went wrong please try again', {
            id: 'add-appointment-toast',
          });
        }
      }
    });
  };

  useEffect(() => {
    const getDoctorOptions = async () => {
      const res = await axiosInstance.get('/doctors/');
      setDoctors(res.data);
      return;
    };
    getDoctorOptions();
  }, []);

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
                      Gender : {gender}
                      {message}

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
                            <option value='Male' selected>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Others'>Others</option>
                          </select>
                        </div>

                        <div className='form-floating mb-3'>
                          <label htmlFor='floatingdoctor' className='gender1'>
                            Select Doctor
                          </label>
                          <select type='doctor' className='form-control' value={doctor} onChange={e => setDoctor(e.target.value)} id='floatingdoctor'>
                            {/* <option defaultValue={}> </option> */}
                            {doctors?.map((item, index) => (
                              <option value={item._id} key={index} defaultValue={'6490642b8e7e0ddd196b7980'}>
                                {item.name}&nbsp;({item.type})
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className='form-floating mb-3'>
                          <input type='date' className='form-control' value={date} onChange={e => setDate(e.target.value)} id='floatingdate' min={new Date().toISOString().split('T')[0]} />

                          <label htmlFor='floatingdate'>Date</label>
                        </div>

                        <div className='form-floating mb-3'>
                          <input type='file' className='form-control' onChange={e => setPimage(e.target.files[0])} id='floatingimage' />
                          <label htmlFor='floatingimage' className='img1'>
                            Select image
                          </label>
                        </div>

                        <div className='form-floating mb-3'>
                          <input type='problem' className='form-control' value={problem} onChange={e => setProblem(e.target.value)} id='floatingproblem' />
                          <label htmlFor='floatingproblem '>Problem</label>
                        </div>

                        <div className='d-grid'>
                          <button className='btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2' type='submit' onClick={appbook}>
                            Apply
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
