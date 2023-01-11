import React, { createContext, useContext } from "react";
import { useAlert } from "../../hooks/useAlert";
import { useData } from "../../hooks/useData";

const personContext = createContext();
export const usePerson = () => useContext(personContext);

const PersonProvider = ({children}) => {

  const personData = useData("person/person/")

  const alertData = useAlert()

  return(
  <personContext.Provider value={{personData, alertData}}>
    {children}
  </personContext.Provider>
)
};

export default PersonProvider;
