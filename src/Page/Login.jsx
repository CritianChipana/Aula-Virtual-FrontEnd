import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";



import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { useForm } from "../Hooks/useForm";
import { Snackbar } from "@mui/material";
import { AuthContext } from "../auth/AuthContext";

export default function Login() {

    const { login } = useContext(AuthContext)
    const navigate = useNavigate();

    const [formValues, handleInputChange] = useForm({
        correo: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        correo: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState(false);
    const [snackbarError, setSnackbarError] = useState(false);

    const { correo, password } = formValues;

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

    const handleRegister = () => {
        navigate("/register");
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (correo && password) {

            //TODO: primera manera de logearte
            // const payload = {
            //     correo,
            //     password,
            // };

            // const url = process.env.REACT_APP_BASE_URL + "/auth/login";

            // const response = await fetch(url, {
            //     method: "POST",
            //     body: JSON.stringify(payload),
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // });
            // const data = await response.json();

            // if( data.success ){

            //     setSnackbar(true);
            //     console.log("first");
            //     console.log(data);
            //     console.log(correo);
            //     console.log(password);
            //     navigate('/')
            // }else {

            //     setErrors( data.errors )
            // }

            const response = await login(correo, password);
            if( response.success ){
                console.log('ir')

                // navigate('/inicio')
                // Swal.fire("Error", "Verifique el usuario y contraseña", "error");
            } else {
                setErrors( response.errors )
                console.log(response)
            }
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setSnackbar(false);
    };

    return (
        <div className="app">
            <Grid style={gridContentStyle}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <form onSubmit={handleLogin}>
                            <Avatar style={avatarStyle}>
                                <LockOpenOutlinedIcon />
                            </Avatar>
                            <h2>Login</h2>
                            <TextField
                                style={typeFileStyle}
                                id="correo"
                                name="correo"
                                label="Correo"
                                variant="standard"
                                value={correo}
                                onChange={handleInputChange}
                                fullWidth
                                required
                                error={!!errors?.correo}
                                helperText={errors?.correo}
                            />
                            <TextField
                                style={typeFileStyle}
                                id="password"
                                name="password"
                                label="Contraseña"
                                variant="standard"
                                type="password"
                                value={password}
                                onChange={handleInputChange}
                                fullWidth
                                required
                                error={!!errors?.correo}
                                helperText={errors?.correo}
                            />
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                style={btnstyle}
                                fullWidth
                                onClick={handleLogin}
                                disabled={loading}
                            >
                                Sign in
                            </Button>
                            <Snackbar
                                open={snackbar}
                                autoHideDuration={6000}
                                onClose={handleClose}
                            >
                                <Alert
                                    onClose={handleClose}
                                    severity="success"
                                    sx={{ width: "100%" }}
                                >
                                    This is a success message!
                                </Alert>
                            </Snackbar>

                            <Snackbar
                                open={snackbarError}
                                autoHideDuration={6000}
                                onClose={handleClose}
                            >
                                <Alert
                                    onClose={handleClose}
                                    severity="error"
                                    sx={{ width: "100%" }}
                                >
                                    This is a errror message!
                                </Alert>
                            </Snackbar>

                            <Typography>
                                <Link onClick={handleRegister}>
                                    Crear Cuenta
                                </Link>
                            </Typography>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}
