import React from "react";

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    makeStyles,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        // backgroundColor: "red",
    },
    curso: {
        marginBottom: theme.spacing(2),
    },
}));

const Inicio = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Card sx={{ maxWidth: 345 }} className={classes.curso}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Curso de Religion
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    image="https://cdn.discordapp.com/attachments/965298358375841792/965298681312083968/unknown.png"
                />
            </Card>
            <Card sx={{ maxWidth: 345 }} className={classes.curso}>
                <CardContent>
                    <Typography gutterBottom variant="body-2">
                    &copy;  Lic. YRAIDA RUIZ COLLADO
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Inicio;
