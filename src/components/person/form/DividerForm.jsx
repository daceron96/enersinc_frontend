import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

export default function DividerForm({text}) {
  return (
    <Grid item xs={12}>
      <Divider textAlign="left">
        <Typography variant="subtitle1">{text}</Typography>
      </Divider>
    </Grid>
  );
}
