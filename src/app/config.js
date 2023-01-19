import axios from "axios";
// export const urlBase = "http://192.168.102.128:8000"; 
export const urlBase = "http://127.0.0.1:8000/"; 
// export const urlBase = "http://192.168.20.22:8000"; 

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } 
};
