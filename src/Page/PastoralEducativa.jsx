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
} from "@material-ui/core";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
// import Imagen1 from './../../public/assets/Visitando el comedor/Imagen15.png'

import Imagen1 from "./../assets/visitando a la casa del adulto mayor/Imagen1.jpg";
import Imagen2 from "./../assets/visitando a la casa del adulto mayor/Imagen2.jpg";
import Imagen3 from "./../assets/visitando a la casa del adulto mayor/Imagen3.jpg";
import Imagen4 from "./../assets/visitando a la casa del adulto mayor/Imagen4.jpg";
import Imagen5 from "./../assets/visitando a la casa del adulto mayor/Imagen5.jpg";
import Imagen6 from "./../assets/visitando a la casa del adulto mayor/Imagen6.jpg";
import Imagen7 from "./../assets/visitando a la casa del adulto mayor/Imagen7.jpg";
import Imagen8 from "./../assets/visitando a la casa del adulto mayor/Imagen8.jpg";

import Imagen15 from "./../assets/Visitando el comedor/Imagen15.png";
import Imagen16 from "./../assets/Visitando el comedor/Imagen16.png";
import Imagen17 from "./../assets/Visitando el comedor/Imagen17.png";
import Imagen18 from "./../assets/Visitando el comedor/Imagen18.png";
import Imagen19 from "./../assets/Visitando el comedor/Imagen19.png";
import Imagen20 from "./../assets/Visitando el comedor/Imagen20.png";

import Imagen21 from "./../assets/Recolectando viveres/Imagen21.png";
import Imagen22 from "./../assets/Recolectando viveres/Imagen22.png";

import Retiro1 from "./../assets/Retiro/Retiro1.png";
import Retiro2 from "./../assets/Retiro/Retiro2.png";
import Retiro3 from "./../assets/Retiro/Retiro3.png";
import Retiro4 from "./../assets/Retiro/Retiro4.png";
import Retiro5 from "./../assets/Retiro/Retiro5.png";



const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
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

export const PastoralEducativa = () => {
    const classes = useStyles();

    const itemData1 = [
        {
            img: Imagen1,
            title: "",
            author: "",
            rows: 2,
            cols: 2,
            featured: true,
            type: 2,
        },
        {
            img: Imagen2,
            title: "Actúa coherentemente en razón de su fe",
            author: "@rollelflex_graphy726",
        },
        {
            img: Imagen3,
            title: "1Timoteo 5,1: No reprendas con dureza al anciano, sino aconséjalo como si fuera tu padre.",
            author: "@helloimnik",
        },
        {
            img: Imagen4,
            title: "Levítios 19, 32: « Ponte en pie ante las canas, [...] y honra a tu Dios » ",
            author: "@nolanissac",
            cols: 2,
        },
        {
            img: Imagen5,
            title: "Abrahán expiró; murió en buena vejez,colmado de años, y fue a reunirsecon sus antepasados (Gn 25, 7)",
            author: "@hjrc33",
            cols: 2,
        },
        {
            img: Imagen6,
            title: "",
            author: "@arwinneil",
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: Imagen7,
            title: "",
            author: "@",
        },
        {
            img: Imagen8,
            title: "",
            author: "",
        },
    ];

    const itemData2 = [
        {
            img: Imagen15,
            title: "Los ancianitos comiendo sus alimentos en su comedor",
            author: "@bkristastucchio",
            rows: 2,
            cols: 2,
            featured: true,
            type: 2,
        },
        {
            img: Imagen16,
            title: "La responsable (Gisela) les explica el fin y a la población que atiende el comedor",
            author: "@rollelflex_graphy726",
        },
        {
            img: Imagen17,
            title: "El ancianito Antonio se emociona, por saber que los estudiantes limpiarán su comedor",
            author: "@helloimnik",
        },
        {
            img: Imagen18,
            title: "Los estudiantes limpian el comedor de los ancianitos",
            author: "@nolanissac",
            cols: 2,
        },
        {
            img: Imagen19,
            title: "Los estudiantes limpian las lunas del comedor, que estaban con mugosidad y gran polvo",
            author: "@hjrc33",
            cols: 2,
        },
        {
            img: Imagen20,
            title: "Los estudiantes limpiando el área del comedor",
            author: "@arwinneil",
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: Imagen21,
            title: "Basketball",
            author: "@tjdragotta",
        },
        {
            img: Imagen22,
            title: "Fern",
            author: "@katie_wasserman",
        },
    ];

    const itemData3 = [
        {
            img: Imagen21,
            title: "Basketball",
            author: "@tjdragotta",
        },
        {
            img: Imagen22,
            title: "Fern",
            author: "@katie_wasserman",
        },
    ];

    const itemDataRetiro = [
        {
            img: Retiro1,
            title: "Los padres de Familia, previa coordinación el retiro de Varones",
            author: "@retiro",
            rows: 2,
            cols: 2,
            featured: true,
            type: 2,
        },
        {
            img: Retiro2,
            title: "Con los alumnos en la Casa de Retiro de Varones",
            author: "@retiro",
            rows: 2,
            cols: 2,
            featured: true,
            type: 2,
        },
        {
            img: Retiro3,
            title: "Se hace las coordinaciones para el retiro de mujeres, con autorización de los padres",
            author: "@retiro",
            rows: 2,
            cols: 2,
            featured: true,
            type: 2,
        },
        {
            img: Retiro4,
            title: "Con las alumnas en la Casa de Retiro de Mujeres",
            author: "@retiro",
            rows: 2,
            cols: 2,
            featured: true,
            type: 2,
        },
        {
            img: Retiro5,
            title: "Aquí está el Padre Guillermo y mis alumnas que iban al retiro.",
            author: "@retiro",
            rows: 2,
            cols: 2,
            featured: true,
            type: 2,
        },
    ];

    return (
        <Container className={classes.container}>
            {/* TODO  DATA 1 */}
            <Typography className={classes.title} gutterBottom variant="h4">
                Visita a la casa de la misericordia del Adulto en PLenitud.
            </Typography>
            <ImageList
                sx={{ width: 500, height: 550 }}
                rowHeight={370}
                gap={20}
            >
                {itemData1.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {/* TODO  DATA 2 */}

            <Typography className={classes.title} gutterBottom variant="h4">
                Visita al comedor San Martin de Porres
            </Typography>
            <ImageList
                sx={{ width: 500, height: 550 }}
                rowHeight={370}
                gap={20}
            >
                {itemData2.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {/* TODO  DATA 3 */}

            <Typography className={classes.title} gutterBottom variant="h4">
                Recoleccion de viveres para la casa del adulto mayor San Juan
                Pablo II
            </Typography>
            <ImageList
                sx={{ width: 500, height: 550 }}
                rowHeight={370}
                gap={20}
            >
                {itemData3.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {/* TODO  RETIRO */}

            <Typography className={classes.title} gutterBottom variant="h4">
                Retiros Realizados
            </Typography>
            <ImageList
                sx={{ width: 500, height: 550 }}
                rowHeight={370}
                gap={20}
            >
                {itemDataRetiro.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>

        </Container>
    );
};
