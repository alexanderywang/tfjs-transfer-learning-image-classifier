import React from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import FlipCameraIosIcon from "@material-ui/icons/FlipCameraIos";
// import useGoogleTextToSpeechAPI from "../utilities/useGoogleTextToSpeechAPI";

const Buttons = ({
  isLoading,
  isPhotoTaken,
  makePrediction,
  flipCamera,
  handleClick
}) => {
  // const { textToSpeech } = useGoogleTextToSpeechAPI();

  //abstract buttons?
  return (
    <Grid>
      <Grid>
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          
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
            
          >
            {isLoading ? "Loading..." : "Classify"}
          </Button>
        )}
      </Grid>
      {/* <Button
        onClick={() =>
          textToSpeech(
            "i live for you i love for you Oliver, don't let me go-o-o-o-o. I also love miss EMMA"
          )
        }
        variant="contained"
        color="secondary"
        
      >
        SING
      </Button> */}
    </Grid>
  );
};

export default Buttons;
