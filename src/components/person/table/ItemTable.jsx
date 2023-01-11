import {
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
  Fade,
} from "@mui/material";
import {PersonSearch } from "@mui/icons-material";
import React from "react";

const ItemTable = ({
  data,
  handleOpenModalRetrieve,
}) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {data.username}
      </TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.lastName}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell>
        <Tooltip title="Detalles de usuario" TransitionComponent={Fade}>
          <IconButton
            aria-label="delete"
            color="primary"
            onClick={() => handleOpenModalRetrieve(data.id)}
          >
            <PersonSearch />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default ItemTable;
