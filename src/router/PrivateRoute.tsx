import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

type AppProps = {
  authentication : boolean
}

const PrivateRoute = ({authentication} : AppProps) => {

  return authentication ? <Outlet /> : <Navigate to="/login" /> ;


};

export default PrivateRoute;