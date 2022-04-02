import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import React from "react";

const BookBiblia = ({title = "Titulo", urlImage="https://sanpabloperu.com.pe/uploads/products/ESBBB00300769-4/biblia-latinoamericana-rustica-simple-238.jpg"}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100%"
                    width="50"
                    image={ urlImage }
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small">Abrir</Button>
            </CardActions>
        </Card>
    );
};

export default BookBiblia;
