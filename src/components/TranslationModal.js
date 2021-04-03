import React from "react";
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
import AudioButton from "./AudioButton";
import SUPPORTED_LANGUAGES from "../utilities/supportedLanguages";
import useGoogleTranslateAPI from "../utilities/useGoogleTranslateAPI";

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

  const {
    handleChange,
    language,
    translatedWords,
    languageCode
  } = useGoogleTranslateAPI(words);

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
        <DialogContent dividers>
          <TextContent
            text={words}
            language={"English"}
            languageCode={"en-US"}
          />
        </DialogContent>
        <DialogContent dividers>
          <TextContent
            text={translatedWords}
            language={language}
            languageCode={languageCode}
          />
        </DialogContent>
        {languageCode.split('-')[0] === "zh" &&<DialogContent dividers>
          <TextContent
            text={translatedWords}
            language={"Cantonese"}
            languageCode={"yue-HK"}
          />
        </DialogContent>}
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default TranslationModal;

const TextContent = ({ text, language, languageCode }) => {
  return (
    <DialogContentText>
      <Typography
        component={"span"}
        gutterBottom
        style={{ fontWeight: "bold" }}
        display="inline"
      >
        {text}
        <AudioButton text={text} languageCode={languageCode} />
      </Typography>
      <br></br>
      <Typography component={"span"} display="inline" gutterBottom>
        {language}
      </Typography>
    </DialogContentText>
  );
};
