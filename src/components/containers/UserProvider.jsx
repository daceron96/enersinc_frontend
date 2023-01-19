import React, { createContext, useContext } from 'react'
import { useUser } from '../../hooks/useUser';


const userContext = createContext();

export const useUserContext = () => useContext(userContext)

export default function UserProvider({children}) {

  const {user, login, logout, isAuthenticated} = useUser()

  return (
    <userContext.Provider value={{user,login, logout, isAuthenticated}}>
      {children}
    </userContext.Provider>
  )
}
