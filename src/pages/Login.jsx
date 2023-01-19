import {
  Alert,
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../components/containers/UserProvider";
const Login = () => {
  const { handleData, formData } = useForm();
  const { login } = useUserContext();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = () => {
    login(formData)
      .then(() => {
        navigate("/");
      })
      .catch(({ response }) => {
        setError(response.data.error);
      });
  };

  return (
    <Box py={2}>
      <Grid container spacing={2} component={Paper}>
        <Grid item xs={12}>
          <Divider textAlign="center">
            <Chip
              color="primary"
              label={
                <Typography variant="subtitle1">Inicio de sesion</Typography>
              }
            />
          </Divider>
        </Grid>
        <Grid item container md={4} justifyContent="center">
          <Card>
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              image="https://enersinc.com/wp-content/uploads/2021/08/logoe-min.png"
            />
          </Card>
        </Grid>
        <Grid item container md={8} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              label="Nombre de usuario"
              name="username"
              type="text"
              onChange={handleData}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contraseña"
              name="password"
              type="password"
              onChange={handleData}
              fullWidth
              margin="normal"
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )}

          <Grid item pb={2} pt={2}>
            <Button variant="contained" onClick={handleLogin}>
              iniciar sesion
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
