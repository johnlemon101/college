import { Popover } from 'react-bootstrap';
import './AddNote.css';
import { useEffect, useRef, useState } from 'react';
import { adminInstance } from '../configs/axiosConfig';

const AddNote = ({ setState, id }) => {
  const [doctorNote, setDoctorNote] = useState('');
  const ModalRef = useRef(null);
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

  const handleSubmit = async () => {
    try {
      await adminInstance.put(`/appointments/${id}`, { doctorNote });
      window.location.reload();
      setState(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='popup-container'>
      <div className='popup-wrapper' ref={ModalRef}>
        <h3 className='popup-header'>Add a note</h3>
        <textarea type={'text'} value={doctorNote} onChange={e => setDoctorNote(e.target.value)} className='popup-textarea' rows={7} />
        <button type={'Submit'} className='popup-submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default AddNote;
