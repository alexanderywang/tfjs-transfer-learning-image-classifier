import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  IconButton,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import CloseIcon from "@material-ui/icons/Close";
import useModalHook from "../utilities/useModalHook";

// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { useTheme } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const TranslationModal = ({ words }) => {
  const classes = useStyles();
  const { open, handleClickOpen, handleClose } = useModalHook();
  const [language, setLanguage] = useState("");
  const [translatedWords, setTranslatedWords] = useState("palabras");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = event => {
    setLanguage(event.target.value);
    // check local storage for memoized language, word
    // else make throttled api call, set translation to be displayed, set local storage
  };

  return (
    <Grid>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <GTranslateIcon />
      </IconButton>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google Translate"}
          <IconButton
            align="right"
            variant="outlined"
            color="primary"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              onChange={handleChange}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={"chinese"}>Mandarin</MenuItem>
              <MenuItem value={"spanish"}>Spanish</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogContent dividers>
          <DialogContentText>
            <Typography gutterBottom style={{ fontWeight: "bold" }}>
              {words}
            </Typography>
            <Typography gutterBottom>English</Typography>
          </DialogContentText>
        </DialogContent>
        {translatedWords && (
          <DialogContent dividers>
            <DialogContentText>
              <Typography gutterBottom style={{ fontWeight: "bold" }}>
                {translatedWords}
              </Typography>
              <Typography gutterBottom>{language}</Typography>
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions></DialogActions>
      </Dialog>
    </Grid>
  );
};

export default TranslationModal;
