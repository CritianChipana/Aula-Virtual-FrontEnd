import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "../Hooks/useForm";
import { MenuItem, Select } from "@material-ui/core";
import { InputLabel } from "@mui/material";
import { AuthContext } from "../auth/AuthContext";

const Register = () => {
    const navigate = useNavigate();
    const { register } = useContext(AuthContext)
    const [formValues, handleInputChange] = useForm({
        nombre: '',
        apellido: '',
        edad: 10,
        correo: '',
        password: '',
        password2: '',
        grado: '',
        seccion: '',
        rol: "ESTUDIANTE_ROLE",
        img: "as",
    });

    const [error, setError] = useState({
        nombre: null,
        apellido: null,
        edad: null,
        correo: null,
        password: null,
        grado: null,
        seccion: null,
        rol: null,
        img: null,
    });

    const {
        nombre,
        apellido,
        edad,
        correo,
        password,
        password2,
        grado,
        seccion,
    } = formValues;

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
        { label: 1 },
        { label: 2 },
        { label: 3 },
        { label: 4 },
        { label: 5 }
    ];

    const secciones = [{ label: "A" }, { label: "B" }, { label: "C" }];

    const handleLogin = () => {
        navigate("/login");
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if ( password === password2 ) {
            const payload = {
                nombre,
                apellido,
                edad:10,
                correo,
                password,
                password2,
                grado,
                seccion,
                rol: "ESTUDIANTE_ROLE",
                img: "as",
            };
            //TODO: PRIMERA MANERA DE MANDAR LOS DATOS:
            // const url = process.env.REACT_APP_BASE_URL + "/usuarios";
            // const response = await fetch(url, {
            //     method: "POST",
            //     body: JSON.stringify(payload),
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // });
            // const data = await response.json();
    
            // if (data.success) {
            //     navigate('/');
            // } else {
            //     console.log(data.errors);
            //     setError(data.errors);
            // }

            const response = await register(payload);
            if( response.success ){
                navigate('/',{ replace: true })
                // Swal.fire("Error", "Verifique el usuario y contraseña", "error");
            } else {
                setError( response.errors )
                console.log(response)
            }
        }
    };

    return (
        <>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <h2>Crear Cuenta</h2>
                        <form onSubmit={handleRegister}>
                            <TextField
                                style={typeFileStyle}
                                id="name"
                                name="nombre"
                                label="nombre"
                                variant="standard"
                                value={nombre}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                            <TextField
                                style={typeFileStyle}
                                id="firstName"
                                name="apellido"
                                value={apellido}
                                onChange={handleInputChange}
                                label="Apellido"
                                variant="standard"
                                fullWidth
                                required
                            />
                            <TextField
                                style={typeFileStyle}
                                id="email"
                                type="email"
                                name="correo"
                                value={correo}
                                onChange={handleInputChange}
                                label="Correo"
                                variant="standard"
                                fullWidth
                                required
                            />
                            <TextField
                                style={typeFileStyle}
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={handleInputChange}
                                label="Contraseña"
                                variant="standard"
                                fullWidth
                                required
                            />
                            <TextField
                                style={typeFileStyle}
                                id="password2"
                                name="password2"
                                type="password"
                                value={password2}
                                onChange={handleInputChange}
                                label="Repita Contraseña"
                                variant="standard"
                                fullWidth
                                required
                            />
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={6}
                                    sx={{ marginTop: "20px" }}
                                    lg={6}
                                >
                                    <InputLabel id="grado">Grado</InputLabel>
                                    <Select
                                        labelId="grado"
                                        name="grado"
                                        id="grado"
                                        value={grado}
                                        label="Grado"
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {grados.map((grado) => (
                                            <MenuItem key={grado.label} value={grado.label}>{grado.label}</MenuItem>
                                        ))}

                                    </Select>
                                </Grid>
                                <Grid item xs={6} sx={{ marginTop: "20px" }}>
                                    <InputLabel id="demo">Seccion</InputLabel>
                                    <Select
                                        labelId="demo"
                                        id="demo"
                                        name="seccion"
                                        value={seccion}
                                        label="Age"
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {secciones.map((seccion) => (
                                            <MenuItem key={seccion.label} value={seccion.label}>{seccion.label}</MenuItem>
                                        ))}
                                    </Select>
                                
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
                                <Link onClick={handleLogin}>
                                    Iniciar sesion
                                </Link>
                            </Typography>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </>
    );
};

export default Register;
