import React, { useState, useEffect } from "react";
import { Backdrop, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  root: {
    width: "55%"
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
        const diff = Math.random() * 15;
        return Math.min(prevProgress + diff, 100);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <div className={classes.root}>
          <LinearProgress variant="determinate" value={progress} />
        </div>
        <h3>Loading Model...</h3>
      </Backdrop>
    </div>
  );
};

export default LoadingPage;
