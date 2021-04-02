import React from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import FlipCameraIosIcon from "@material-ui/icons/FlipCameraIos";
import useGoogleTextToSpeechAPI from "../utilities/useGoogleTextToSpeechAPI";

const Buttons = ({
  isLoading,
  isPhotoTaken,
  makePrediction,
  flipCamera,
  handleClick
}) => {
  const { textToSpeech } = useGoogleTextToSpeechAPI();

  //abstract buttons?
  return (
    <Grid>
      <Grid>
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          disableElevation
        >
          {isPhotoTaken ? "Retake" : "Take Photo"}
        </Button>
        {!isPhotoTaken && (
          <IconButton onClick={flipCamera}>
            <FlipCameraIosIcon />
          </IconButton>
        )}
      </Grid>
      <Grid>
        {isPhotoTaken && (
          <Button
            onClick={makePrediction}
            variant="contained"
            color="primary"
            disableElevation
          >
            {isLoading ? "Loading..." : "Classify"}
          </Button>
        )}
      </Grid>
      <Button
        onClick={() => textToSpeech("encyclopedia britannica")}
        variant="contained"
        color="secondary"
        disableElevation
      >
        SPEEK
      </Button>
    </Grid>
  );
};

export default Buttons;
