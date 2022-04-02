import React from "react";

import { Card, Container, Grid, makeStyles } from "@material-ui/core";
import Post from "../Components/Post/Post";
import BookBiblia from "../Components/Biblia/BookBiblia";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
}));

const Biblia = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{ justifyContent: "center" }}
            >
                <Grid item xs={3}>
                    <BookBiblia
                        title="Biblia America"
                        urlImage="https://sanpabloperu.com.pe/uploads/products/ESBBB00300769-4/biblia-latinoamericana-rustica-simple-238.jpg"
                    />
                </Grid>
                <Grid item xs={3}>
                    <BookBiblia
                        title="Biblia para jovenes"
                        urlImage="https://tienda.encristiano.com/4147-large_default/la-biblia-catolica-para-jovenes-regalo.jpg"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Biblia;
