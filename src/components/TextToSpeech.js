import React, { useState } from "react";
import {
  Button,
  FormControl,
  TextareaAutosize,
  Select,
  MenuItem
} from "@material-ui/core";
import useGoogleTextToSpeechAPI from "../utilities/useGoogleTextToSpeechAPI";
import useGoogleTranslateAPI from "../utilities/useGoogleTranslateAPI";
import SUPPORTED_LANGUAGES from "../utilities/supportedLanguages";

const TextToSpeech = () => {
  const [phrase, setPhrase] = useState("");

  const { textToSpeech } = useGoogleTextToSpeechAPI();
  const {
    handleChange,
    language,
    translatedWords,
    languageCode
  } = useGoogleTranslateAPI(phrase);

  return (
    <FormControl>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        onChange={event => setPhrase(event.target.value)}
      />
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
      <Button
        onClick={() => textToSpeech(translatedWords, languageCode)}
        variant="contained"
        color="primary"
      >
        TEXT TO SPEECH
      </Button>
    </FormControl>
  );
};

export default TextToSpeech;
