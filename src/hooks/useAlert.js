import { useState } from "react";


export const useAlert = () => {

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleOpenAlert = (severity, message) =>{
    setMessage(message)
    setSeverity(severity)
    setOpen(true)
    console.log("entre")
  }

  const handleCloseAlert = () =>{
    setOpen(false)
  }

  return {handleOpenAlert,handleCloseAlert, message, open, severity}
}