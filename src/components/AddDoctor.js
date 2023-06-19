import { useEffect, useRef, useState } from 'react';
import { adminInstance } from '../configs/axiosConfig';

const AddDoctor = ({ setState }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
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
      await adminInstance.post(`/doctors`, { name, email, type });
      window.location.reload();
      setState(false);
    } catch (err) {
      console.log(err);
    }
  };

  const InputFields = [
    {
      name: 'name',
      label: 'Name',
      value: name,
      setValue: setName,
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      value: email,
      setValue: setEmail,
      type: 'email',
    },
    {
      name: 'type',
      label: 'Type of Doctor',
      value: type,
      setValue: setType,
      type: 'text',
    },
  ];

  return (
    <div className='popup-container'>
      <div className='popup-wrapper' ref={ModalRef}>
        <h3 className='popup-header'>Add a Doctor</h3>
        {InputFields.map((item, index) => (
          <input name={item.name} placeholder={item.label} value={item.value} key={index} onChange={e => item.setValue(e.target.value)} className='popup-input' />
        ))}
        <button type={'Submit'} className='popup-submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default AddDoctor;
