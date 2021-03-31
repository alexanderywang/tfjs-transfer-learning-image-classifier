import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import ClassifyButtons from "./ClassifyButtons";
import { Grid, Snackbar } from "@material-ui/core";
import useFlipCameraHook from "../utilities/useFlipCameraHook";
// const userVideo = {
//   width: 240,
//   height: 240,
//   facingMode: "user"
// };

// const facingOutVideo = {
//   width: 240,
//   height: 240,
//   facingMode: { exact: "environment" }
// };

const DeviceWebcam = ({ setPredictions, setIsLoading, isLoading, model }) => {
  const { flipCamera,isMirrored, videoConstraints } = useFlipCameraHook();
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [image, setImage] = useState(null);

  // const [isFacingUser, setIsFacingUser] = useState(true);
  // const [isMirrored, setIsMirrored] = useState(true);
  // const [videoConstraints, setVideoConstraints] = useState(userVideo);

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

  // abstract
  const makePrediction = async () => {
    if (imageURL === null) {
      setSnackBarMessage("Take another picture");
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
      setSnackBarMessage("No predictions can be made. Take another picture");
      setOpen(true);
      console.error("error:", err);
    }
  };

  // const flipCamera = () => {
  //   // if (isFacingUser) {
  //   //   setVideoConstraints(facingOutVideo);
  //   // } else {
  //   //   setVideoConstraints(userVideo);
  //   // }
  //   setVideoConstraints(isFacingUser ? facingOutVideo : userVideo);
  //   setIsMirrored(!isMirrored);
  //   setIsFacingUser(!isFacingUser);
  // };

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
