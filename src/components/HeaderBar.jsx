import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import logo from "../img/NELogo.png";

const useStyles = makeStyles({
  logo: {
    maxWidth: 100,
  },
});

export const HeaderBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h5">Shop</Typography>
      </Toolbar>
    </AppBar>
  );
};
