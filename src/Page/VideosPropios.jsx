import React from "react";
import {
    Link,
    Avatar,
    Container,
    ImageList,
    ImageListItem,
    makeStyles,
    Typography,
    Divider,
    ListSubheader,
    ImageListItemBar,
    Card,
    CardContent,
} from "@material-ui/core";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    },
    title: {
        marginBottom: "15px",
        marginTop: "25px",
        color: "#555",
    },
    link: {
        marginRight: theme.spacing(2),
        textAlign: "center",
        color: "#555",
        fontSize: 18,
    },
}));

const VideosPropios = () => {
    const classes = useStyles();

    const itemData2020 = [
        {
            video: "https://www.youtube.com/embed/NNPFGsSLBjc",
            title: "COVID-19",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        // {
        //     video: "https://www.youtube.com/embed/KqwLcmIDDrw",
        //     title: "Como Afrontar el Dolor",
        //     author: "",
        //     description: 2,
        //     ano: 2,
        //     featured: true,
        //     type: 2,
        // },
        // {
        //     video: "https://www.youtube.com/embed/B86yXzSW6EA",
        //     title: "Feliz día mamá caverina",
        //     author: "",
        //     description: 2,
        //     ano: 2,
        //     featured: true,
        //     type: 2,
        // },
        {
            video: "https://www.youtube.com/embed/w91IsYGP-KE",
            title: "CORPUS CHRISTI",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/ikFD57bLn-4",
            title: "SAN PEDRO Y SAN PABLO",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/HuK6Us_VQYk",
            title: "CONTIGO PERÚ, CON DIOS, CAMINANDO CON FE Y ESPERANZA",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/03PiR8QY744",
            title: "LA ORACIÓN, EL CAMINO PARA CONECTARNOS CON NUESTRO CREADOR",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/y23V1HfK6fw",
            title: "VIRTUDES DE SAN MARTÍN DE PORRES",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/sawlJ_hcS_M",
            title: "CELEBRANDO EL DÍA DE LA CANCIÓN CRIOLLA",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/RT9pGxhbo6M",
            title: "SEÑOR DE LOS MILAGROS.",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/M2mHge0o-fM",
            title: "LA AMISTAD Y SUS VALORES",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
    ];

    const itemData2021 = [
        {
            video: "https://www.youtube.com/embed/ylQZjdIok_Q",
            title: "VIRGEN DE LOURDES PATRONA DEL COLEGIO DOLORES CAVERO DE GRAU",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/WasdgcCmQJU",
            title: "08 DE MARZO DÍA INTERNACIONAL DE LA MUJER",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/bN1tjxfxmIQ",
            title: "MIERCOLES DE CENIZA 2021",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/t5oyAK2kp5c",
            title: "BEATIFICACION, VIRTUDES Y MILAGRO A YAZUMI POR EL DR. JOSÉ GREGORIO",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/c81csGQbLpM",
            title: "SEMANA SANTA2021, I.E DOLORES CAVERO DE GRAU",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/QJA5_f37ows",
            title: "JESÚS RESUCITÓ 2021, I.E DOLORES CAVERO DE GRAU",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/ikFD57bLn-4",
            title: "SAN PEDRO Y SAN PABLO",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
        {
            video: "https://www.youtube.com/embed/CCJxwAuBfTQ",
            title: "ORACION DE SANACION ESPONSAL",
            author: "",
            description: 2,
            ano: 2,
            featured: true,
            type: 2,
        },
    ];

    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom variant="h4">
                Videos Propios 2020
            </Typography>
            {itemData2020.map((item) => (
                <div className="content-card-video">
                    <iframe
                        width="770"
                        height="400"
                        src={item.video}
                        title={item.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                {item.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            ))}

            <Typography className={classes.title} gutterBottom variant="h4">
                Videos Propios 2021
            </Typography>
            {itemData2021.map((item) => (
                <div className="content-card-video">
                    <iframe
                        width="770"
                        height="400"
                        src={item.video}
                        title={item.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                {item.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            ))}

            
        </Container>
    );
};

export default VideosPropios;
