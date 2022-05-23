import React from "react";

import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
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

const DetalleActivity = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Card sx={{ maxWidth: 345 }} className={classes.curso}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            *pregunta
                            *imagen
                            *campo de respuesta
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
};

export default DetalleActivity;
