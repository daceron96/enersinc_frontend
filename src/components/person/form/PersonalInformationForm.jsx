import { Grid } from "@mui/material";
import React from "react";
import DividerForm from "./DividerForm";
import InputForm from "./InputForm";
import { documentType } from "../../../models/documentType.enum";
import { usePersonForm } from "../../containers/PersonFormProvider";

const generateList = (formData) => [
  {
    label: "Tipo de documento",
    name: "documentType",
    md: 6,
    xs: 12,
    select: true,
    options: documentType,
    value: formData.documentType ||  "default",
    type: "text",
  },
  {
    label: "Número de documento",
    name: "documentNumber",
    md: 6,
    xs: 12,
    type: "text",
    value : formData.documentNumber || ''
  },
  {
    label: "Nombres",
    name: "name",
    md: 6,
    xs: 12,
    type: "text",
    value : formData.name || ''
  },
  {
    label: "Apellidos",
    name: "lastName",
    md: 6,
    xs: 12,
    type: "text",
    value : formData.lastName || ''
  },
  {
    label: "Número de teléfono",
    name: "phone",
    md: 6,
    xs: 12,
    type: "text",
    value : formData.phone || ''
  },
  {
    label: "Correo electrónico",
    name: "email",
    md: 6,
    xs: 12,
    type: "text",
    value : formData.email || '',
  },
  {
    label: "Pasa tiempos",
    name: "hobbie",
    md: 12,
    xs: 12,
    multiline: true,
    rows: 4,
    value : formData.hobbie || '',
  },
];
export default function PersonalInformationForm() {
  const { formData } = usePersonForm();

  const inputList = generateList(formData);
  return (
    <Grid item container spacing={1}>
      <DividerForm text="Datos personales" />
      {inputList.map((input, index) => (
        <InputForm key={index} input={input} />
      ))}
    </Grid>
  );
}
