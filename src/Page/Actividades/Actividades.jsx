import React from "react";

import {
    Container,
    makeStyles,
    Typography,
} from "@material-ui/core";
import Activity from "./Components/Activity";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        // backgroundColor: "red",
    },
    curso: {
        marginBottom: theme.spacing(2),
    },
}));

const Actividades = () => {
    const classes = useStyles();

    const handleClick = () => { 
        console.log('click')
    }

    return (
        <Container className={classes.container}>
            <Activity onClick={handleClick} />
            <Activity/>
            <Activity/>
            <Activity/>
        </Container>
    );
};

export default Actividades;
