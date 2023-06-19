import React from 'react';
import './dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RiDeleteBinFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';
import { MdSpaceDashboard } from 'react-icons/md';
import { BiShowAlt } from 'react-icons/bi';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import { GiHospitalCross } from 'react-icons/gi';
import { FaPeopleArrows } from 'react-icons/fa';
import axiosInstance, { adminInstance } from '../configs/axiosConfig';
import toast, { Toaster } from 'react-hot-toast';
import { adminTokenLogout } from '../redux/apiCalls/adminApi';
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {
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

  const [viewdata, setViewdata] = useState([]);

  useEffect(() => {
    adminInstance
      .get('/patients/')
      .then(result => {
        console.log(result.data);
        setViewdata(result.data);
      })

      .catch(e => {
        console.log('something went wrong');
      });
  }, []);

  const deleteAppointment = async vid => {
    toast.loading('Deleting the appointment', {
      id: 'delete-patient-toast',
    });
    try {
      await adminInstance.delete(`/patients/${vid}`);
      toast.success('Successfully deleted the patient', {
        id: 'delete-patient-toast',
      });
      window.location.reload();
    } catch (err) {
      toast.error('Something went wrong!', {
        id: 'delete-patient-toast',
      });
    }
  };

  //  const deleteAppointment=(vid)=>{
  // 	//console.log(vid)

  // 	axios.delete("http://localhost:90/appointment/delete/" +vid)

  // 	.then()
  // 	.catch()

  // }

  return (
    <div>
      <div id='viewport'>
        <div id='sidebar'>
          <header>
            <a href='#'>
              WeCare <GiHospitalCross></GiHospitalCross>
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

            {/* <li className='space4'>
              <Link to='/doctors' onClick={logout}>
                <i className='zmdi zmdi-view-dashboard spacetext '>
                  <FaPeopleArrows></FaPeopleArrows> Doctors{' '}
                </i>
              </Link>
            </li> */}
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
              <p className='icon-right'>
                <h1 className='text-center'>Admin Dashboard</h1>
                <div className='float-right'>
                  <CgProfile size={40}></CgProfile>
                </div>
              </p>

              <div className='container pt-5'>
                <div className='table-responsive'>
                  <table className='table custom-table'>
                    <thead>
                      <tr>
                        {/* <th scope="col">ID</th> */}
                        <th scope='col'>Username</th>

                        <th scope='col'>Email</th>
                        <th scope='col'>Address</th>

                        <th scope='col'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr />
                      {viewdata.map((singleData,index) => {
                        console.log(singleData);

                        return (
                          <tr key={index}>
                            <td>{singleData.username}</td>
                            <td>{singleData.email}</td>
                            <td>{singleData.address}</td>
                            {/* <td><img src={'http://localhost:90/'+singleData.pimage} className="img-fluid"/></td> */}
                            <td>
                              {' '}
                              <div className='d-flex '>
                                <div>
                                  <RiDeleteBinFill size={20} onClick={() => deleteAppointment(singleData._id)}></RiDeleteBinFill>
                                </div>
                                {/* <div className='ml-4'>
                                  <GrMail size={20}></GrMail>
                                </div> */}
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
      <Toaster />
    </div>
  );
}
