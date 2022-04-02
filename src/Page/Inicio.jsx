import React from "react";

import { Container, makeStyles } from "@material-ui/core";
import Post from "../Components/Post/Post";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
}));

const Inicio = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Post
                title="Virgen Maria"
                paragraph="Para la Iglesia católica, la Virgen María es Madre de Dios en cuanto es verdadera madre de Jesús que es Dios. María no engendró al Verbo (segunda persona de la Trinidad) ya que, como Dios, es eterno, pero sí a Jesús que es el Verbo hecho hombre."
                urlImage="https://pbs.twimg.com/profile_images/1360428498570129410/uYaDhIG5_400x400.jpg"
            />
            <Post />
        </Container>
    );
};

export default Inicio;
