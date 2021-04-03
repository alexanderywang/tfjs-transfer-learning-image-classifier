import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import useGoogleTextToSpeechAPI from "../utilities/useGoogleTextToSpeechAPI";

const AudioButton = ({ text, languageCode }) => {
  const { textToSpeech, isDisabled } = useGoogleTextToSpeechAPI();

  return (
    <Grid component={"span"}>
      <IconButton
        variant="contained"
        color="default"
        disabled={isDisabled}
        onClick={() => textToSpeech(text, languageCode)}
      >
        <RecordVoiceOverIcon />
      </IconButton>
    </Grid>
  );
};

export default AudioButton;
