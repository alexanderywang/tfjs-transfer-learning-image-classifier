import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AboutModal from "./AboutModal";
import useModal from "../utilities/useModal";

const Navbar = () => {
  const { open, handleClickOpen, handleClose } = useModal();

  return (
    <Grid>
      <AppBar position="static" style={{ background: "#171769" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClickOpen}
          >
            <MenuIcon />
          </IconButton>
          <AboutModal open={open} handleClose={handleClose} />
          <Typography component={'span'} variant="h6">Classify Image</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
