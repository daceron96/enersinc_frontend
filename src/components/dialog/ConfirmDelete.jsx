import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
} from "@mui/material";
import React from "react";
import { usePerson } from "../containers/PersonProvider";

const ConfirmDelete = ({ open, handleCloseModalDelete, idUser, handleCloseModalRetrieve }) => {
  const { personData, alertData } = usePerson();

  const handleDeleteData = () => {
    personData
      .deleteData(idUser)
      .then((message) => {
        alertData.handleOpenAlert("success", message);
        handleCloseModalRetrieve()
      })
      .catch(({ response }) => {
        alertData.handleOpenAlert("error", response.data.message);
      })
      .then(() => {
        handleCloseModalDelete();
      });
  };

  return (
    <Dialog open={open} onClose={handleCloseModalDelete}>
      <DialogTitle>Eliminar usuario</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ¿Estás seguro que quieres eliminar este usuario?
        </DialogContentText>
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
            onClick={handleDeleteData}
          >
            Eliminar
          </Button>
          <Button variant="outlined" size="small" onClick={handleCloseModalDelete}>
            Cancelar
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDelete;
