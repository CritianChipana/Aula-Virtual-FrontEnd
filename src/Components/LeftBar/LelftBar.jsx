import React, { useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { Home } from "@mui/icons-material";

import BookIcon from "@mui/icons-material/Book";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import LogoutIcon from "@mui/icons-material/Logout";

import {
    Container,
    makeStyles,
    List,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@material-ui/core";
import { ListItemButton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        color: "black",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: "#555",
            borderRight: "1px solid #ece7e7",
        },
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px",
        },
    },
    text: {
        fontWeight: 500,
        textDecoration: "none",
        color: "black",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));

const LelftBar = ({ setViewOpen }) => {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setViewOpen(index);
    };

    return (
        <Container>
            <List
                component="nav"
                aria-label="main mailbox folders"
                className={classes.container}
            >
                <NavLink to="/inicio">
                    <ListItemButton
                        className={classes.item}
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <Home className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Inicio"
                            color="primary"
                            className={classes.text}
                        />
                    </ListItemButton>
                </NavLink>

                <NavLink to="/biblia">
                    <ListItemButton
                        className={classes.item}
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <BookIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Biblia"
                            className={classes.text}
                        />
                    </ListItemButton>
                </NavLink>

                <NavLink to="/actividades">
                    <ListItemButton
                        className={classes.item}
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <DesktopWindowsIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Actividades"
                            className={classes.text}
                        />
                    </ListItemButton>
                </NavLink>

                <NavLink to="/videos">
                    <ListItemButton
                        className={classes.item}
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon>
                            <OndemandVideoIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Videos"
                            className={classes.text}
                        />
                    </ListItemButton>
                </NavLink>

                <NavLink to="/videos-propios">
                    <ListItemButton
                        className={classes.item}
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <ListItemIcon>
                            <VideoCameraFrontIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Videos Propios"
                            className={classes.text}
                        />
                    </ListItemButton>
                </NavLink>

                <NavLink to="/inicio">
                    <ListItemButton
                        className={classes.item}
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}
                    >
                        <ListItemIcon>
                            <LogoutIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Cerrar sesion"
                            className={classes.text}
                        />
                    </ListItemButton>
                </NavLink>
            </List>

            {/* <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Inicio</Typography>
      </div>

      <div className={classes.item}>
        <BookIcon className={classes.icon} />
        <Typography className={classes.text}>La biblia</Typography>
      </div>

      <div className={classes.item}>
        <DesktopWindowsIcon className={classes.icon} />
        <Typography className={classes.text}>Actividades</Typography>
      </div>

      <div className={classes.item}>
        <OndemandVideoIcon className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>

      <div className={classes.item}>
        <VideoCameraFrontIcon className={classes.icon} />
        <Typography className={classes.text}>Videos Producidos</Typography>
      </div>

      <div className={classes.item}>
        <LogoutIcon className={classes.icon} />
        <Typography className={classes.text}>Cerrar sesion</Typography>
      </div> */}
        </Container>
    );
};

export default LelftBar;
