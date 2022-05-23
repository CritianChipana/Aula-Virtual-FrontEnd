import React from "react";

import {
    Card,
    CardActionArea,
    CardContent,
    makeStyles,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    curso: {
        marginBottom: theme.spacing(2),
    },
}));

const Activity = ({onClick}) => {
    const classes = useStyles();

    return (
            <Card onClick={onClick} sx={{ maxWidth: 345 }} className={classes.curso}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Curso de actividades
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
};

export default Activity;