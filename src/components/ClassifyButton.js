import React from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import FlipCameraIosIcon from "@material-ui/icons/FlipCameraIos";
// import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";

const ClassifyButton = ({
  isLoading,
  setIsPhotoTaken,
  isPhotoTaken,
  takePhoto,
  setImageURL,
  makePrediction,
  setPredictions,
  flipCamera
}) => {
  const handleClick = e => {
    if (!isPhotoTaken) takePhoto(e);
    else setImageURL("");
    setPredictions([]);
    setIsPhotoTaken(!isPhotoTaken);
  };

  return (
    <Grid>
      <Button
        onClick={handleClick}
        variant="contained"
        color="secondary"
        disableElevation
      >
        {isPhotoTaken ? "Retake" : "Take Photo"}
      </Button>
      <IconButton onClick={flipCamera}>
        <FlipCameraIosIcon />
      </IconButton>
      {isPhotoTaken && (
        <>
          <Button
            onClick={makePrediction}
            variant="contained"
            color="primary"
            disableElevation
          >
            {isLoading ? "Loading..." : "Classify"}
          </Button>
          {/* <Grid>
            <SystemUpdateAltIcon>
              <a href={imageURL} download="selfie.png">
                <i></i>
              </a>
            </SystemUpdateAltIcon>
          </Grid> */}
        </>
      )}
    </Grid>
  );
};

export default ClassifyButton;
