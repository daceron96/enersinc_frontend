import { Grid, Typography } from "@mui/material";
import React from "react";

const ItemRetrieve = ({ label, data }) => {
  return (
    <>
      <Grid item xs={5}>
        <Typography variant="subtitle1">{label}</Typography>
      </Grid>
      <Grid item xs={7}>
        <Typography variant="subtitle2">{data}</Typography>
      </Grid>
    </>
  );
};

export default ItemRetrieve;
