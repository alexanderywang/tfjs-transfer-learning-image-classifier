import React from "react";
import { IconButton } from "@material-ui/core";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import useGoogleTextToSpeechAPI from "../utilities/useGoogleTextToSpeechAPI";

const AudioButton = ({ text, languageCode }) => {
  const { textToSpeech } = useGoogleTextToSpeechAPI();

  return (
    <>
      <IconButton
        variant="contained"
        color="secondary"
        disableElevation
        onClick={() => textToSpeech(text, languageCode)}
      >
        <RecordVoiceOverIcon />
      </IconButton>
    </>
  );
};

export default AudioButton;
