import axios from "axios";
import { useEffect, useState } from "react";
import { setAuthToken, urlBase } from "../app/config";

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    setAuthToken(token);
    setUser(user);
  }, []);

  const login = (formData) => {
    return axios.post(`${urlBase}/login/`, formData).then(({ data }) => {
      setAuthToken(data.token);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    });
  };

  const logout = () =>{
    localStorage.clear()
    setUser(null)
  }

  return {
    user,
    login,
    logout
  };
};
