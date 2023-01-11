import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from './UserProvider';

const ProtectedRouter = ({children}) => {

  const {user} = useUserContext()
  if(!user){
    return <Navigate to="/login" />
  }
  return (
    <Outlet />
  );
}

export default ProtectedRouter;
