import { Grid } from "@mui/material";
import React from "react";
import DividerForm from "./DividerForm";
import InputForm from "./InputForm";
import {documentType} from '../../../models/documentType.enum'

const inputList = [
  {
    label : "Tipo de documento",
    name : "documentType",
    md : 6,
    xs : 12,
    select : true,
    options : documentType,
    defaultValue : "default",
    type :"text"
  },
  {
    label: "Número de documento",
    name: "documentNumber",
    md : 6,
    xs : 12,
    type :"text"
  },
  {
    label: "Nombres",
    name: "name",
    md : 6,
    xs : 12,
    type :"text"
  },
  {
    label: "Apellidos",
    name: "lastName",
    md : 6,
    xs : 12,
    type :"text"
  },
  {
    label: "Número de teléfono",
    name: "phone",
    md : 6,
    xs : 12,
    type :"text"
  },
  {
    label: "Correo electrónico",
    name: "email",
    md : 6,
    xs : 12,
    type :"text"
  },
  {
    label: "Pasa tiempos",
    name: "hobbie",
    md : 12,
    xs : 12,
    multiline: true,
    rows: 4,
  },
];

export default function PersonalInformationForm() {

  return (
    <Grid item container spacing={1}>
      <DividerForm text="Datos personales" />
      {inputList.map((input, index) => (
        <InputForm key={index} input={input} />
      ))}
    </Grid>
  );
}
