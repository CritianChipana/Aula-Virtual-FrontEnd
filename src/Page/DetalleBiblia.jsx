import React from "react";

import { Card, Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
}));

const DetalleBiblia = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
           
        </Container>
    );
};

export default DetalleBiblia;
