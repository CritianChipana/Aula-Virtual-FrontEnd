import { createTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { blue, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      // main: grey[50],
      main: blue[50],

    },
  },
  myButton: {
    backgroundColor: "red",
    color: "white",
    border: "1px solid black",
  },
  otro:{
    // backgroundColor: theme.palette.main
  }
});
