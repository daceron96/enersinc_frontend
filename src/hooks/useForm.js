import { useState } from "react";

export const useForm = () => {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});

  const handleData = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return { formData, formError, handleData, setFormError, setFormData };
};
