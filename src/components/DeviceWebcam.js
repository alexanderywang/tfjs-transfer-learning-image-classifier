import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import ClassifyButtons from "./ClassifyButtons";
import { Grid, Snackbar } from "@material-ui/core";

const userVideo = {
  width: 300,
  height: 300,
  facingMode: "user"
};

const facingOutVideo = {
  width: 300,
  height: 300,
  facingMode: { exact: "environment" }
};

const DeviceWebcam = ({ setPredictions, setIsLoading, isLoading, model }) => {
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [image, setImage] = useState(null);
  const [isFacingUser, setIsFacingUser] = useState(true);
  const [isMirrored, setIsMirrored] = useState(true);
  const [videoConstraints, setVideoConstraints] = useState(userVideo);
  const [open, setOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const webcamRef = useRef(null);
  const imageRef = useRef(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const takePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageURL(imageSrc);
    createImage(imageSrc);
  };

  const createImage = url => {
    const newImage = new Image();
    newImage.src = url;
    newImage.crossOrigin = "anonymous";
    setImage(newImage);
  };

  const makePrediction = async () => {
    if (imageURL === null) {
      setSnackBarMessage("Take another picture");
      setOpen(true);
      return;
    }
    setIsLoading(true);
    try {
      const predictions = await model.classify(image);
      console.log("mobileNet model predictions:", predictions);
      setIsLoading(false);

      setPredictions(predictions);
    } catch (err) {
      setSnackBarMessage("No predictions can be made. Take another picture");
      setOpen(true);
      console.error("error:", err);
    }
  };

  const flipCamera = () => {
    if (isFacingUser) {
      setVideoConstraints(facingOutVideo);
    } else {
      setVideoConstraints(userVideo);
    }
    setIsMirrored(!isMirrored);
    setIsFacingUser(!isFacingUser);
    console.log(videoConstraints);
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
      <ClassifyButtons
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setIsPhotoTaken={setIsPhotoTaken}
        isPhotoTaken={isPhotoTaken}
        takePhoto={takePhoto}
        setImageURL={setImageURL}
        makePrediction={makePrediction}
        setPredictions={setPredictions}
        flipCamera={flipCamera}
      />
    </Grid>
  );
};

export default DeviceWebcam;
