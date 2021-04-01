import React, { useRef } from "react";
import Webcam from "react-webcam";
import Buttons from "./Buttons";
import { Grid, Snackbar } from "@material-ui/core";
import useCamera from "../utilities/useCamera";
import useSnackBar from "../utilities/useSnackBar";

const DeviceWebcam = ({ setPredictions, setIsLoading, isLoading, model }) => {
  const webcamRef = useRef(null);
  const imageRef = useRef(null);

  const {
    flipCamera,
    isMirrored,
    videoConstraints,
    imageURL,
    setImageURL,
    image,
    takePhoto,
    isPhotoTaken,
    setIsPhotoTaken
  } = useCamera();

  const {
    handleClose,
    open,
    setOpen,
    snackBarMessage,
    setSnackBarMessage
  } = useSnackBar();

  const handleClick = e => {
    if (!isPhotoTaken) takePhoto(webcamRef);
    else {
      setIsLoading(false);
      setImageURL("");
    }
    setPredictions([]);
    setIsPhotoTaken(!isPhotoTaken);
  };

  // abstract into useMobileNetModel hook?
  const makePrediction = async () => {
    if (imageURL === null) {
      setSnackBarMessage("Take another picture please");
      setOpen(true);
      return;
    }
    setIsLoading(true);
    try {
      const predictions = await model.classify(image, 5);
      // console.log("mobileNet model predictions:", predictions);
      setIsLoading(false);

      setPredictions(predictions);
    } catch (err) {
      setSnackBarMessage(
        "No predictions can be made. Take another picture. Check out the tips"
      );
      setOpen(true);
      console.error("error:", err);
    }
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
      <Grid>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          hidden={isPhotoTaken}
          videoConstraints={videoConstraints}
          mirrored={isMirrored}
        />
      </Grid>
      {isPhotoTaken && <img src={imageURL} ref={imageRef} alt="selfie" />}
      <Buttons
        isLoading={isLoading}
        isPhotoTaken={isPhotoTaken}
        makePrediction={makePrediction}
        flipCamera={flipCamera}
        handleClick={handleClick}
      />
    </Grid>
  );
};

export default DeviceWebcam;
