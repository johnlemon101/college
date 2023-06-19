import { GiHospitalCross } from 'react-icons/gi';
import './dashboard.css';
import { MdSpaceDashboard } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { BiShowAlt } from 'react-icons/bi';
import { AiFillFileAdd, AiTwotoneCalendar } from 'react-icons/ai';
import { FaPeopleArrows } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { adminTokenLogout } from '../redux/apiCalls/adminApi';
import { HiOutlineLogout } from 'react-icons/hi';
import { RiDeleteBinFill } from 'react-icons/ri';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import AddDoctor from './AddDoctor';
import { Toaster, toast } from 'react-hot-toast';
import { adminInstance } from '../configs/axiosConfig';
import ViewReport from './ViewReport';

const Doctors = () => {
  const [addDoctorActive, setAddDoctorActive] = useState(false);
  const [viewReportActive, setViewReportActive] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDoctorName, setSelectedDoctorName] = useState('');
  const [viewdata, setViewdata] = useState();
  const dispatch = useDispatch();
  const { refreshToken } = useSelector(state => state.admin.admin);
  let navigate = useNavigate();
  const logout = () => {
    adminTokenLogout(dispatch, refreshToken);
    navigate('/');
  };
  const deleteDoctor = async id => {
    toast.loading('Deleting the doctor', {
      id: 'delete-doctor-toast',
    });
    try {
      await adminInstance.delete(`/doctors/${id}`);
      toast.success('Successfully deleted the doctor', {
        id: 'delete-doctor-toast',
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong!', {
        id: 'delete-doctor-toast',
      });
    }
  };

  useEffect(() => {
    adminInstance
      .get('/doctors/')
      .then(result => {
        console.log(result.data);
        setViewdata(result.data);
      })

      .catch(e => {
        console.log('something went wrong');
      });
  }, []);

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
                  <FaPeopleArrows size={24}></FaPeopleArrows> Doctors
                </h3>

                <div className='container pt-3'>
                  <div className='table-responsive'>
                    <button
                      type={'Submit'}
                      className='create-submit'
                      onClick={() => {
                        setAddDoctorActive(true);
                      }}
                    >
                      Create New Doctor
                    </button>
                    <table className='table custom-table'>
                      <thead>
                        <tr>
                          {/* <th scope="col">ID</th> */}
                          <th scope='col'>Name</th>

                          <th scope='col'>Email</th>
                          <th scope='col'>Type</th>
                          <th scope='col'>No. of Appointments</th>
                          {/* <th scope="col">Image</th> */}
                          <th scope='col'>View Report</th>
                          {/* <th scope='col'>Doctor's Note</th>
                        <th scope='col'>Add Note</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr />
                        {viewdata?.map((singleData ,index)=> {
                          console.log(singleData);

                          return (
                            <tr key={index}>
                              <td>{singleData.name}</td>
                              <td>{singleData.email}</td>
                              <td>{singleData.type}</td>
                              <td>{singleData?.total}</td>
                              {/* <td>{singleData.doctorNote}</td> */}
                              <td>
                                <button
                                  type={'View Report'}
                                  className='create-submit'
                                  onClick={() => {
                                    setSelectedDoctor(singleData._id);
                                    setSelectedDoctorName(singleData.name);
                                    setViewReportActive(true);
                                  }}
                                >
                                  View Report
                                </button>
                              </td>
                              <td>
                                <div className='flex'>
                                  <div>
                                    <RiDeleteBinFill size={20} onClick={() => deleteDoctor(singleData._id)}></RiDeleteBinFill>
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
      {viewReportActive && <ViewReport setState={setViewReportActive} id={selectedDoctor} name={selectedDoctorName} />}
      {addDoctorActive && <AddDoctor setState={setAddDoctorActive} />}
      <Toaster />
    </>
  );
};
export default Doctors;
