import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";


export default function Login() {

  const navigate = useNavigate();

  const gridContentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const paperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: "500px",
    width: 290,
    margin: "20px auto",
  };

  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };

  const typeFileStyle = {
    margin: "20px 0 0 0",
  };

  const btnstyle = { margin: "20px 0" };

  const handleRegister = () =>{
    navigate("/register");
  }

  return (
    <div className="app">
      <Grid style={gridContentStyle}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOpenOutlinedIcon />
            </Avatar>
            <h2>Login</h2>
            <TextField
              style={typeFileStyle}
              id="email"
              label="Correo"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              style={typeFileStyle}
              id="password"
              label="Contraseña"
              variant="standard"
              type="password"
              fullWidth
              required
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Sign in
            </Button>

            <Typography>
              <Link onClick={handleRegister} >Crear Cuenta</Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
