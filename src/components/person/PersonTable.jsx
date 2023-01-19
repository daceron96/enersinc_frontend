import {
  Chip,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ConfirmDelete from "../dialog/ConfirmDelete";
import { usePerson } from "../containers/PersonProvider";
import PersonRetrieve from "./retrieve/PersonRetrieve";
import ItemTable from "./table/ItemTable";

const PersonTable = () => {
  const { personData } = usePerson();
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [idUser, setIdUser] = useState(null);
  const [openModalRetrieve, setOpenModalRetrieve] = useState(false);

  const handleOpenModalDelete = (idUser) => {
    setIdUser(idUser);
    setOpenModalDelete(true);
  };

  const handleOpenModalRetrieve = (idUser) => {
    setIdUser(idUser);
    setOpenModalRetrieve(true);
  };

  const handleCloseModalDelete = () => {
    setIdUser(null);
    setOpenModalDelete(false);
  };

  const handleCloseModalRetrieve = () => {
    setIdUser(null);
    setOpenModalRetrieve(false);
  };

  return (
    <Box py={2} mt={2} px={3}>
      <Grid container spacing={2} component={Paper}>
        <Grid item xs={12}>
          <Divider textAlign="center">
            <Chip
              color="primary"
              label={
                <Typography variant="subtitle1">Lista de usuarios</Typography>
              }
            />
          </Divider>
        </Grid>
        <Grid item xs={12}>
          <TableContainer >
            <Table sx={{ minWidth: 450 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre de usuario</TableCell>
                  <TableCell>Nombres</TableCell>
                  <TableCell>Apellidos</TableCell>
                  <TableCell>Correo</TableCell>
                  <TableCell>Opciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {personData.dataList.map((data, index) => (
                  <ItemTable
                    data={data}
                    key={index}
                    handleOpenModalRetrieve={handleOpenModalRetrieve}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {openModalDelete && (
          <ConfirmDelete
            open={openModalDelete}
            handleCloseModalDelete={handleCloseModalDelete}
            handleCloseModalRetrieve={handleCloseModalRetrieve}
            idUser={idUser}
          />
        )}
        {openModalRetrieve && (
          <PersonRetrieve
            open={openModalRetrieve}
            handleCloseModalRetrieve={handleCloseModalRetrieve}
            handleOpenModalDelete={handleOpenModalDelete}
            idUser={idUser}
          />
        )}
      </Grid>
    </Box>
  );
};

export default PersonTable;
