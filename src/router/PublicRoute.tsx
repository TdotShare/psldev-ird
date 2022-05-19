import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';


const PublicRoute = () => {
  
  return false ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;