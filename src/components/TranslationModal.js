import React, { useEffect, useState } from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  makeStyles,
  useTheme,
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
import CloseIcon from "@material-ui/icons/Close";
import SUPPORTED_LANGUAGES from "../utilities/supportedLanguages";
import translateText from "../utilities/googleTranslateAPI";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const TranslationModal = ({ words, open, handleClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [language, setLanguage] = useState("");
  const [languageCode, setLanguageCode] = useState("");
  const [translatedWords, setTranslatedWords] = useState("");

  const handleChange = (event, action) => {
    setLanguageCode(action.props.name);
    setLanguage(event.target.value);
    setTranslatedWords("");
  };

  useEffect(() => {
    const translate = async () => {
      const translation = await translateText(words, languageCode, language);
      setTranslatedWords(translation);
    };
    translate();
  }, [words, languageCode, language]);

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google Translate         "}
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
              {SUPPORTED_LANGUAGES.map(lang => (
                <MenuItem
                  key={lang.id}
                  name={lang.languageCode}
                  value={lang.language}
                >
                  {lang.language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <Content text={words} language={"English"} />
        {translatedWords && (
          <Content text={translatedWords} language={language} />
        )}
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default TranslationModal;

const Content = ({ text, language }) => {
  return (
    <DialogContent dividers>
      <DialogContentText>
        <Typography gutterBottom style={{ fontWeight: "bold" }}>
          {text}
        </Typography>
        <Typography gutterBottom>{language}</Typography>
      </DialogContentText>
    </DialogContent>
  );
};
