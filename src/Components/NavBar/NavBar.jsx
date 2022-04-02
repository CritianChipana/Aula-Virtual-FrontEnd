import React, { useState } from "react";

import { alpha } from '@mui/material/styles';

import { AppBar,Toolbar, Typography, makeStyles, InputBase, Badge, Avatar } from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";



const useStyles = makeStyles((theme) => ({

  toolbar:{
    display:'flex',
    justifyContent:'space-between'
  },
  logoLg:{
    display:"none",
    [theme.breakpoints.up('sm')]:{
      display:"block",
    }
  },
  logoSm:{
    display:"block",
    [theme.breakpoints.up('sm')]:{
      display:"none",
    }
  },
  search:{
    display: 'flex',
    alignItems:"center",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down('sm')]:{
      display:(props)=> props.open ? 'flex': 'none',
      with: "70%"
    }
  },
  input:{
      color: "white",
      width: "100%",
      paddingLeft: theme.spacing(1),
      marginLeft: theme.spacing(1)
  },
  cancel:{
    [theme.breakpoints.up('sm')]:{
      display:"none",

    }
  },
  searchButton:{
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
      display:"none",
    }
  },
  icons:{
    alignItems : "center",
    display:(props)=> props.open ? 'none': 'flex',

  },
  badge:{
    marginRight: theme.spacing(2),
  }
}));

const NavBar = () => {

  const [open, setOpen] = useState(false)

  const classes = useStyles({open});

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar className={classes.toolbar} >
        <Typography variant="h6" className={classes.logoLg} >Menu</Typography>
        <Typography variant="h6" className={classes.logoSm} >Menu</Typography>
        <div
          className={classes.search}
        >
          <Search/>
          <InputBase className={classes.input} placeholder="buscar ..." />
          <Cancel className={classes.cancel} onClick={ ()=> setOpen(false) } />
        </div>
        <div className={classes.icons} >
          <Search className={classes.searchButton} onClick={( ()=> setOpen(true) )}/>
          <Badge
            badgeContent={4}
            color = "secondary"
            className={classes.badge}
          >
          <Mail/>
          </Badge>
          <Badge
            badgeContent={2}
            color = "secondary"
            className={classes.badge}
          >
            <Notifications/>
          </Badge>
          <Avatar alt="image" src="https://i.pinimg.com/564x/af/01/62/af0162b99904620752a0593d6353148f.jpg" />
        </div>

        {/* <p class="parrafo20" >hol mundo</p>
        .parrafo20{
          textcolor:"red";
        } */}

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
