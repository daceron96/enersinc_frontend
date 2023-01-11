import { useState } from "react";

export const useForm = (data) => {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});

  const handleData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  
  return { formData, formError, handleData, setFormError };
};
