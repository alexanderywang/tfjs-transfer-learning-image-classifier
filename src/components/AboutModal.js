import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid, Typography, Dialog, IconButton } from "@material-ui/core";
import useModalHook from "../utilities/useModalHook";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

// const DialogActions = withStyles(theme => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1)
//   }
// }))(MuiDialogActions);

const AboutModal = () => {
  const { open, handleClickOpen, handleClose } = useModalHook();

  return (
    <Grid>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClickOpen}
      >
        <MenuIcon />
      </IconButton>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          About
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            This is a web application where users can classify images taken with
            the webcam or a device's camera. Everything is local and stays
            private with the user. The app uses a pre-trained model converted to
            TensorFlow.js to give a probability of predictions.
          </Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography gutterBottom>
            Code can be found at
            <a
              href="https://github.com/alexanderywang/tfjs-transfer-learning-image-classifier"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              https://github.com/alexanderywang/tfjs-transfer-learning-image-classifier
            </a>
          </Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography gutterBottom>
            Loading icon illustrated by Maddy Wang
          </Typography>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default AboutModal;
