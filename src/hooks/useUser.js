import axios from "axios";
import { useEffect, useState } from "react";
import { setAuthToken, urlBase } from "../app/config";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      validateToken()
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          localStorage.clear();
          setIsAuthenticated(false);
        });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const validateToken = () => {
    return axios.get(`${urlBase}/validateToken/`).then(({ data }) => {
      return data;
    });
  };

  const login = (formData) => {
    return axios.post(`${urlBase}/login/`, formData).then(({ data }) => {
      setAuthToken(data.token);
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setIsAuthenticated(true);
    });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};
