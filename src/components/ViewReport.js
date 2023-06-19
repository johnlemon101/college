import { useEffect, useRef, useState } from 'react';
import { adminInstance } from '../configs/axiosConfig';

const ViewReport = ({ setState, id, name }) => {
  const ModalRef = useRef(null);
  const [viewData, setViewData] = useState();
  const useOutsideAlerter = ref => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setState(false);
        }
      }
      document.addEventListener('mousedown', e => handleClickOutside(e));

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideAlerter(ModalRef);
  useEffect(() => {
    const getViewData = async () => {
      const res = await adminInstance.get('/doctors/report/' + id);
      console.log(res.data);
      setViewData(res.data);
    };
    getViewData();
  }, [id]);

  return (
    <div className='popup-container'>
      <div className='popup-wrapper' ref={ModalRef}>
        <h3 className='popup-header'>Dr. {name}'s Report</h3>
        <p>Month: {viewData?.currentMonth}</p>
        <p style={{ marginTop: 25 }}>
          {' '}
          <span>Day</span>:<span style={{ marginLeft: 10 }}>Total Appointments</span>{' '}
        </p>
        {viewData?.report?.map((item, index) => (
          <p key={index}>
            <span style={{ marginRight: 4 }}>
              {item?.date} {viewData?.currentMonth}
            </span>
            :<span style={{ marginLeft: 10 }}> {item?.totalAppointments} </span>
          </p>
        ))}
        {/* <p>Email: {singledata.email}</p>
            <p>Address: {singledata.address}</p>
            <p>Phone : {singledata.phone}</p>
            <p>Gender : {singledata.gender}</p>
            <p>Doctor: {singledata.doctorName}</p>
            <p>Problem: {singledata.problem}</p>
            <p>Date: {singledata.date}</p>
            <p>Doctor's Note: {singledata.doctorNote}</p> */}
      </div>
    </div>
  );
};
export default ViewReport;
