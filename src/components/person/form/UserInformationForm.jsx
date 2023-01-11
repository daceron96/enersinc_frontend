import { Grid } from '@mui/material';
import React from 'react';
import DividerForm from './DividerForm';
import InputForm from './InputForm';


const inputList = [
  {
    label : "Nombre de usuario",
    name : "username",
    md : 12,
    xs : 12,
  },
  {
    label : "Contraseña",
    name : "password",
    md : 6,
    xs : 12,
    type :"password"
  },
  {
    label : "Repita la contraseña",
    name : "password2",
    md : 6,
    xs : 12,
    type :"password"
  }
]

const UserInformationForm = () => {
  return (
    <Grid item container spacing={1} xs={12}>
      <DividerForm text="Datos de usuario"/>
      {inputList.map((input, index) => (
        <InputForm key={index} input={input}/>
      ))}
    </Grid>
  );
}

export default UserInformationForm;
