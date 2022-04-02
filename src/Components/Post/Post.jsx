import React from "react";
import {
    Card,
    CardMedia,
    CardActionArea,
    makeStyles,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        media: {
            height: 250,
            [theme.breakpoints.down("sm")]: {
                height: 150,
            },
        },
    },
}));

const Post = ({
    title = "El Nuevo Post",
    paragraph = "este es el parrafo lorem15",
    urlImage = "https://phantom-marca.unidadeditorial.es/3fd1dba8c5d757d135b1d79db0685d3c/crop/0x82/2048x1232/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/31/16224614946841.jpg",
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    height="400"
                    component="img"
                    className={classes.media}
                    image={urlImage}
                    title="imagen"
                ></CardMedia>

                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="body2">{paragraph}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" size="small" color="primary">
                    Compartir
                </Button>
                <Button size="small" color="primary" variant="contained">
                    Abrir
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
