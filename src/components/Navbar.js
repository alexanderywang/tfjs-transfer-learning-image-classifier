import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AboutModal from "./AboutModal";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <AboutModal />
          <Typography variant="h6">Test Classify Image</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
