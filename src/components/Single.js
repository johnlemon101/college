import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './myappoint.css';
import Header from './Header';
import axiosInstance from '../configs/axiosConfig';

export default function Single() {
  const [singledata, setSingledata] = useState([]);

  const { vid } = useParams();

  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('t'),
    },
  };

  useEffect(() => {
    axiosInstance
      .get('/appointments/' + vid)
      .then(result => {
        setSingledata(result.data);
      })
      .catch();
  }, []);
  return (
    <div>
      <Header />
      <div className='container '>
        <div className='row p-5 '>
          <div className='design text-center'>
            <h1> Patients Details</h1>
            <p>
              <img src={singledata.pimage} style={{ objectFit: 'cover', objectPosition: 'top', width: 200, height: 200, borderRadius: '50%' }} />
            </p>
            <p>FullName: {singledata.fullName}</p>
            <p>Email: {singledata.email}</p>
            <p>Address: {singledata.address}</p>
            <p>Phone : {singledata.phone}</p>
            <p>Gender : {singledata.gender}</p>
            <p>Doctor: {singledata.doctorName}</p>
            <p>Problem: {singledata.problem}</p>
            <p>Date: {singledata.date}</p>
            <p>Doctor's Note: {singledata.doctorNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
