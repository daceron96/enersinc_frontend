import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from './UserProvider';

const ProtectedRouter = () => {

  const {isAuthenticated} = useUserContext()
  if(!isAuthenticated){
    return <Navigate to="/login" />
  }
  return (
    <Outlet />
  );
}

export default ProtectedRouter;
