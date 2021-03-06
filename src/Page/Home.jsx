import React from "react";
import { Routes, Route } from 'react-router-dom';

import { Grid } from "@material-ui/core";
import LelftBar from "../Components/LeftBar/LelftBar";
import NavBar from "../Components/NavBar/NavBar";

// import { makeStyles } from "@material-ui/core";
import Add from "../Components/Add/Add";

import Inicio from "./Inicio";
import Biblia from "./Biblia";
import Actividades from "./Actividades";
import Videos from "./Videos";
import VideosPropios from "./VideosPropios";



// const useStyles = makeStyles((theme) => ({
//     right: {
//         [theme.breakpoints.down("sm")]: {
//             display: "none",
//         },
//     },
// }));

const Home = () => {
    // const classes = useStyles();

    return (
        <div>
            <NavBar />
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <LelftBar />
                </Grid>

                <Routes>
                    <Route  path="/home/inicio" element={ <Inicio/> } />
                    <Route  path="/biblia" element={ <Biblia/>} />
                    <Route  path="/actividades" element={ <Actividades/> } />
                    <Route  path="/videos" element={ <Videos/> } />
                    <Route  path="/videos-propios" element={ <VideosPropios/> } />
                    <Route  path="/" element={ <Inicio/> } />

                </Routes>
            
            </Grid>
            <Add />
        </div>
    );
};

export default Home;
