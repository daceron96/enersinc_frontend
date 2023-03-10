import React, { createContext, useContext, useEffect } from "react";
import { Box, Button, Chip, Divider, Grid, Typography } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import PersonalInformationForm from "../person/form/PersonalInformationForm";
import UserInformationForm from "../person/form/UserInformationForm";
import { usePerson } from "./PersonProvider";
import { useNavigate, useParams } from "react-router-dom";

const formContext = createContext();

export const usePersonForm = () => useContext(formContext);

export default function PersonForm() {
  const { idUser } = useParams();
  const { personData, alertData } = usePerson();
  const { formData, handleData, formError, setFormError, setFormData } =
    useForm();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (idUser) {
      personData
        .updateData(idUser, formData)
        .then((message) => {
          alertData.handleOpenAlert("success", message);
          navigate("/");
        })
        .catch(({ response }) => {
          alertData.handleOpenAlert("error", response.data.message);
          setFormError(response.data.errors);
        });
    } else {
      personData
        .createData(formData)
        .then((message) => {
          alertData.handleOpenAlert("success", message);
          navigate("/");
        })
        .catch(({ response }) => {
          alertData.handleOpenAlert("error", response.data.message);
          setFormError(response.data.errors);
        });
    }
  };

  useEffect(() => {
    if (idUser) {
      personData.retrieveData(idUser).then((data) => {
        setFormData(data);
      });
    } else {
      setFormData({});
      setFormError({});
    }
  }, [idUser]);

  return (
    <formContext.Provider value={{ handleData, formError, formData }}>
      <Box py={2} mt={2} px={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Divider textAlign="center">
              <Chip
                color="primary"
                label={
                  <Typography variant="subtitle1">
                    {idUser
                      ? "Actualizacion de usuario"
                      : "Registro de usuario"}
                  </Typography>
                }
              />
            </Divider>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <PersonalInformationForm />
            {!idUser && <UserInformationForm />}
            <Grid item container justifyContent="center" direction="row">
              <Button variant="contained" onClick={handleSubmit}>
                Guardar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </formContext.Provider>
  );
}
