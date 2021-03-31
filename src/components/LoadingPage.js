import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  Backdrop,
  LinearProgress,
  Card,
  Grid
} from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import whatisthis from "./whatisthis.png";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  root: {
    width: "100%"
  }
}));

const LoadingPage = ({ open }) => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 100);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid>
      <Backdrop className={classes.backdrop} open={open}>
        <Grid>
          <Grid>
            <Typography>What Is This??</Typography>
          </Grid>
          <Grid>
            <Card>
              <img
                src={whatisthis}
                alt="what is this"
                width="250px"
                height="40%"
              />
            </Card>
          </Grid>
          <Grid>
            <Grid className={classes.root}>
              <LinearProgress variant="determinate" value={progress} />
            </Grid>
            <Grid>
              <Typography>Loading Model...</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Backdrop>
    </Grid>
  );
};

export default LoadingPage;
