import React from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import FlipCameraIosIcon from "@material-ui/icons/FlipCameraIos";

const Buttons = ({
  isLoading,
  isPhotoTaken,
  makePrediction,
  flipCamera,
  handleClick
}) => {
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
    </Grid>
  );
};

export default Buttons;
