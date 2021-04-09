import React, { useRef } from "react";
import Webcam from "react-webcam";
import Buttons from "./Buttons";
import { Grid, Snackbar } from "@material-ui/core";
import useCamera from "../utilities/useCamera";
import useSnackBar from "../utilities/useSnackBar";

const DeviceWebcam = ({
  model,
  classifier,
  setPredictions,
  isLoading,
  setIsLoading,
  makePrediction
}) => {
  const webcamRef = useRef(null);
  const imageRef = useRef(null);

  const {
    flipCamera,
    isMirrored,
    videoConstraints,
    imageURL,
    image,
    setImageURL,
    takePhoto,
    isPhotoTaken,
    setIsPhotoTaken
  } = useCamera();

  const { handleClose, open, snackBarMessage } = useSnackBar();

  const handleClick = e => {
    if (!isPhotoTaken) takePhoto(webcamRef);
    else {
      setIsLoading(false);
      setImageURL("");
    }
    setPredictions([]);
    setIsPhotoTaken(!isPhotoTaken);
  };

  return (
    <Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snackBarMessage}
      />
      <Grid id="webcam" item xs={12} m={8}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          hidden={isPhotoTaken}
          videoConstraints={videoConstraints}
          mirrored={isMirrored}
        />
        {isPhotoTaken && <img src={imageURL} ref={imageRef} alt="selfie" />}
      </Grid>
      <Grid id="buttons">
        <Buttons
          isLoading={isLoading}
          isPhotoTaken={isPhotoTaken}
          makePrediction={() => makePrediction(image, imageURL)}
          flipCamera={flipCamera}
          handleClick={handleClick}
          image={image}
          model={model}
          classifier={classifier}
        />
      </Grid>
    </Grid>
  );
};

export default DeviceWebcam;
