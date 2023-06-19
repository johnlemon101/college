import React from 'react';
import './dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete, AiFillFileAdd } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RiDeleteBinFill } from 'react-icons/ri';
import { BiSolidMessageAdd } from 'react-icons/bi';
import { MdSpaceDashboard } from 'react-icons/md';
import { BiShowAlt } from 'react-icons/bi';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { GiHospitalCross } from 'react-icons/gi';
import { adminInstance } from '../configs/axiosConfig';
import { adminTokenLogout } from '../redux/apiCalls/adminApi';
import { useDispatch, useSelector } from 'react-redux';
import AddNote from './AddNote';
import toast, { Toaster } from 'react-hot-toast';
import { FaPeopleArrows } from 'react-icons/fa';
export default function Dashviewappoint() {
  const dispatch = useDispatch();
  const { refreshToken } = useSelector(state => state.admin.admin);
  let navigate = useNavigate();
  const logout = () => {
    adminTokenLogout(dispatch, refreshToken);
    navigate('/');
  };
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('t'),
    },
  };
  const [editId, setEditId] = useState('');
  const [viewdata, setViewdata] = useState([]);
  const [addActive, setAddActive] = useState(false);

  useEffect(() => {
    adminInstance
      .get('/appointments/')
      .then(result => {
        console.log(result.data);
        setViewdata(result.data);
      })

      .catch(e => {
        console.log('something went wrong');
      });
  }, []);

  const deleteAppointment = async id => {
    toast.loading('Deleting the appointment', {
      id: 'delete-appoint-toast',
    });
    try {
      await adminInstance.delete(`/appointments/${id}`);
      toast.success('Successfully deleted the appointment', {
        id: 'delete-appoint-toast',
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong!', {
        id: 'delete-appoint-toast',
      });
    }
  };

  return (
    <>
      <div>
        <div id='viewport'>
          <div id='sidebar'>
            <header>
              <a href='#'>
                WeCare <GiHospitalCross></GiHospitalCross>{' '}
              </a>
            </header>
            <ul className='nav'>
              <li className='space'>
                <Link to='/dashboard'>
                  <i className='zmdi zmdi-view-dashboard spacetext'>
                    <MdSpaceDashboard></MdSpaceDashboard> Dashboard
                  </i>
                </Link>
              </li>

              <li className='space2'>
                <Link to='/dashboard'>
                  <i className='zmdi zmdi-view-dashboard spacetext'>
                    <BiShowAlt></BiShowAlt> View patient
                  </i>
                </Link>
              </li>

              <li className='space3'>
                <Link to='/dashview'>
                  <i className='zmdi zmdi-view-dashboard spacetext '>
                    <AiTwotoneCalendar></AiTwotoneCalendar> View Appointment{' '}
                  </i>
                </Link>
              </li>
              <li className='space4'>
                <Link to='/doctors'>
                  <i className='zmdi zmdi-view-dashboard spacetext '>
                    <FaPeopleArrows></FaPeopleArrows> Doctors{' '}
                  </i>
                </Link>
              </li>
              <li className='space5'>
                <Link to='#' onClick={logout}>
                  <i className='zmdi zmdi-view-dashboard spacetext '>
                    <HiOutlineLogout></HiOutlineLogout> logout{' '}
                  </i>
                </Link>
              </li>
            </ul>
          </div>

          <div id='content'>
            <nav className='navbar navbar-default'>
              <div className='container-fluid'>
                <ul className='nav navbar-nav navbar-right'>
                  <li>
                    <a href='#'>
                      <i className='zmdi zmdi-notifications text-danger'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className='container-fluid'>
              <div className=' p-5'>
                <h3 className='text-center'>
                  <BsFillCalendarCheckFill size={20}></BsFillCalendarCheckFill> Appointments
                </h3>

                <div className='container pt-3'>
                  <div className='table-responsive'>
                    <table className='table custom-table'>
                      <thead>
                        <tr>
                          {/* <th scope="col">ID</th> */}
                          <th scope='col'>FullName</th>

                          <th scope='col'>Email</th>
                          <th scope='col'>Address</th>
                          {/* <th scope="col">Image</th> */}
                          <th scope='col'>Problem</th>
                          <th scope='col'>Doctor</th>
                          <th scope='col'>Doctor's Note</th>
                          <th scope='col'>Add Note</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr />
                        {viewdata.map((singleData,index) => {
                          console.log(singleData);

                          return (
                            <tr key={index}>
                              <td>{singleData.fullName}</td>
                              <td>{singleData.email}</td>
                              <td>{singleData.address}</td>
                              <td>{singleData.problem}</td>
                              <td>{singleData.doctorName}</td>
                              <td>{singleData.doctorNote}</td>
                              <td>
                                {' '}
                                <div className='d-flex '>
                                  <div>
                                    <AiFillFileAdd
                                      size={20}
                                      onClick={() => {
                                        setEditId(singleData._id);
                                        setAddActive(true);
                                      }}
                                    ></AiFillFileAdd>
                                  </div>
                                  {/* <div className='ml-4'>
                                  <GrMail size={20}></GrMail>
                                </div> */}
                                  <div className='ml-4'>
                                    <RiDeleteBinFill size={20} onClick={() => deleteAppointment(singleData._id)}></RiDeleteBinFill>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <script src='js/jquery-3.3.1.min.js'></script>
              <script src='js/popper.min.js'></script>
              <script src='js/bootstrap.min.js'></script>
              <script src='js/main.js'></script>
            </div>
          </div>
        </div>
      </div>
      {addActive && <AddNote setState={setAddActive} id={editId} />}
      <Toaster />
    </>
  );
}
