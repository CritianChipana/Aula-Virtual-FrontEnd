import React, { useState } from "react";

import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { Alert } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    background: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

const Add = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip title="add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off" method="post">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Titulo"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Dinos algo..."
                label="Descripcion"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Publico</MenuItem>
                <MenuItem value="Privado">Privado</MenuItem>
                <MenuItem value="Protegido">Protegido</MenuItem>
              </TextField>
            </div>

            <div className={classes.item}>
              <FormLabel component="legend">Gender</FormLabel>

              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="Friends"
                  control={<Radio size="small" />}
                  label="Friends"
                />
                <FormControlLabel
                  value="No body"
                  control={<Radio size="small" />}
                  label="No body"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>

            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setOpenAlert(true)}
                styele={{ marginRight: 20 }}
              >
                Crear
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>

      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          Este es el mensaje del alerta
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
