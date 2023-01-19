import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { usePerson } from "../../containers/PersonProvider";
import ItemRetrieve from "./ItemRetrieve";
import { documentType } from "../../../models/documentType.enum";
import { useNavigate } from "react-router-dom";

const itemRetrieve = [
  {
    label: "Tipo de documento",
    name: "documentType",
  },
  {
    label: "Número de documento",
    name: "documentNumber",
  },
  {
    label: "Nombres",
    name: "name",
  },
  {
    label: "Apellidos",
    name: "lastName",
  },
  {
    label: "Número de teléfono",
    name: "phone",
  },
  {
    label: "Correo electrónico",
    name: "email",
  },
  {
    label: "Pasa tiempos",
    name: "hobbie",
  },
  {
    label: "Nombre de usuario",
    name: "username",
  },
];

const PersonRetrieve = ({
  idUser,
  open,
  handleCloseModalRetrieve,
  handleOpenModalDelete,
}) => {
  const { retrieveData } = usePerson().personData;
  const [data, setData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    retrieveData(idUser).then((data) => {
      setData(data);
    });
  }, [idUser,retrieveData]);

  return (
    <Dialog open={open} onClose={handleCloseModalRetrieve} fullWidth>
      <DialogTitle>Informacion de usuario</DialogTitle>
      <Divider />
      <DialogContent>
        <Box>
          <Grid container>
            {itemRetrieve.map((item, index) => (
              <ItemRetrieve
                key={index}
                label={item.label}
                data={
                  item.name !== "documentType"
                    ? data[item.name]
                    : `${data[item.name]} - ${documentType[data[item.name]]}`
                }
              />
            ))}
          </Grid>
        </Box>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Stack
          direction="row"
          spacing={1}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Button
            color="error"
            variant="contained"
            size="small"
            onClick={() => handleOpenModalDelete(idUser)}
          >
            Eliminar
          </Button>
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={() => navigate(`/update/${idUser}`)}
          >
            Actualizar
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default PersonRetrieve;
