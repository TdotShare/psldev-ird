import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { HOST } from '../../config/host';
import { deleteUser, setLoginfail } from '../../store/reducer/User';


const Logout = () => {

  const dispatch = useDispatch()

  document.body.removeAttribute('class')

  React.useEffect(() => {
    dispatch(deleteUser())
    dispatch(setLoginfail())


    //window.location.href = `https://mis-ird.rmuti.ac.th/sso/auth/logout?url=${HOST}`
    // eslint-disable-next-line 
  }, [])


  return <Navigate to="/login" />
};

export default Logout;