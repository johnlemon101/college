import React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import './myappoint.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import axiosInstance from '../configs/axiosConfig';
import { useSelector } from 'react-redux';

export default function Myappointment() {
  const [viewdata, setViewdata] = useState([{ test: 'test' }]);

  const patientId = useSelector(state => state.auth.patient._id);

  useEffect(() => {
    // axios.get("http://localhost:90/appointment/myappoint")
    // .then(result=>{
    //     console.log(result.data)
    //     setViewdata(result.data);

    // })
    const getAppointments = async () => {
      const res = await axiosInstance.get(`/appointments/patient/${patientId}`);
      console.log(res.data);
      setViewdata(res.data);
    };
    getAppointments();
  }, [patientId]);

  return (
    <div>
      <Header />
      <div className='design p-5 '>
        <Table>
          <thead>
            <tr>
              <th>Image</th>
              <th>FullName </th>
              <th>E-mail</th>
              <th>Address</th>
              <th>Doctor</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {viewdata?.map((singleData,index) => {
              console.log(singleData);
              console.log("I am here")

              return (
                <tr key={index}>
                  <td> 
                    <img src={singleData?.pimage} style={{ objectFit: 'cover', objectPosition: 'top', width: 80, height: 80, borderRadius: '50%' }} />
                  </td>

                  <td>{singleData?.fullName}</td>
                  <td>{singleData?.email}</td>
                  <td>{singleData?.address}</td>
                  <td>{singleData?.doctorName}</td>

                  <td>
                    <div className='d-flex'>
                      <Link to={'/updateinfo/' + singleData?._id}>
                        <div>
                          <FaEdit size={20}></FaEdit>{' '}
                        </div>
                      </Link>

                      <div className='ml-4'>
                        <Link to={'/single/' + singleData?._id}>
                          <button type='button' className='btn btn-success '>
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
}
