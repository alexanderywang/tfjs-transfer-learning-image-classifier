import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import AboutModal from "./AboutModal";

const Navbar = () => {
  return (
    <Grid>
      <AppBar position="static" style={{ background: "#171769" }}>
        <Toolbar>
          <AboutModal />
          <Typography variant="h6">Classify Image</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
