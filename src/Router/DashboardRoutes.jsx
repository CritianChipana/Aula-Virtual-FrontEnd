import { Grid } from "@material-ui/core";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LelftBar from "../Components/LeftBar/LelftBar";
import NavBar from "../Components/NavBar/NavBar";
import Actividades from "../Page/Actividades";
import AprendoEnCasa from "../Page/AprendoEnCasa";
import Biblia from "../Page/Biblia";
import Inicio from "../Page/Inicio";
import { PastoralEducativa } from "../Page/PastoralEducativa";
import Videos from "../Page/Videos";
import VideosPropios from "../Page/VideosPropios";

const DashboardRoutes = () => {
    return (
        <div>
            <NavBar />
            <Grid container>

                <Grid item sm={2} xs={2}>
                    <LelftBar />
                </Grid>

                <Grid item sm={10} xs={10}>
                    <Routes>
                        <Route path="/inicio" element={<Inicio />} />
                        <Route path="/biblia" element={<Biblia />} />
                        <Route path="/biblia" element={<Biblia />} />
                        <Route path="/actividades" element={<Actividades />} />
                        <Route path="/videos" element={<Videos />} />
                        <Route path="/aprendo-en-casa" element={<AprendoEnCasa />} />
                        <Route path="/pastoral-educativa" element={<PastoralEducativa />} />
                        <Route
                            path="/videos-propios"
                            element={<VideosPropios />}
                        />
                        <Route path="/" element={<Inicio />} />
                    </Routes>
                </Grid>
                
            </Grid>
        </div>
    );
};

export default DashboardRoutes;
