import { Grid, MenuItem, TextField } from "@mui/material";
import React from "react";
import { usePersonForm } from "../PersonForm";

export default function InputForm({ input }) {
  const {handleData, formError} = usePersonForm();
  return (
    <Grid item md={input.md} xs={input.xs}>
      <TextField
        error = {formError[input.name] && true}
        helperText = {formError[input.name]}
        {...input}
        onChange={handleData}
        fullWidth
      >
        {input.select &&
          Object.keys(input.options).map((key, index) =>(
            <MenuItem key={index} value={key} disabled={key === "default"} >
              {key=== "default" ?
                `${input.options[key]}`
                :
                `${key} - ${input.options[key]}`
              }
            </MenuItem>
          ))
        }
      </TextField>
    </Grid>
  );
}
