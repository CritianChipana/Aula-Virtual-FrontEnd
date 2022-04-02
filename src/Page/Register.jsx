import React from "react";


import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Autocomplete from "@mui/material/Autocomplete";

const Register = () => {
  
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: "600px",
    width: 350,
    margin: "16px auto",
  };

  const typeFileStyle = {
    margin: "20px 0 0 0",
  };

  const btnstyle = { margin: "20px 0" };

  const grados = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
  ];

  const secciones = [
    { label: "A" },
    { label: "B" },
    { label: "C" },
  ];

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Crear Cuenta</h2>
            <TextField
              style={typeFileStyle}
              id="name"
              name="name"
              label="nombre"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              style={typeFileStyle}
              id="firstName"
              name="firstName"
              label="Apellido"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              style={typeFileStyle}
              id="email"
              name="email"
              label="Correo"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              style={typeFileStyle}
              id="password"
              name="password"
              label="Contraseña"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              style={typeFileStyle}
              id="password2"
              name="password2"
              label="Repita Contraseña"
              variant="standard"
              fullWidth
              required
            />
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ marginTop: "20px" }}>
                <Autocomplete
                  // disablePortal
                  id="combo-box-grado"
                  options={grados}
                  required
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Grado"
                      id="grado"
                      name="grado"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6} sx={{ marginTop: "20px" }}>
                <Autocomplete
                  disablePortal
                  id="combo-box-seccion"
                  options={secciones}
                  // sx={{ width: 300 }}
                  required
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="seccion"
                      name="seccion"
                      label="Seccion"
                      required
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Crear
            </Button>

            <Typography>
              <Link onClick={handleLogin}>Iniciar sesion</Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Register;

