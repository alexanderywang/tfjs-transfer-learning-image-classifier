import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import Buttons from "./Buttons";
import { Grid, Snackbar } from "@material-ui/core";
import useCameraHook from "../utilities/useCameraHook";
import useSnackBarHook from "../utilities/useSnackBarHook";

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
  // const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  // const [imageURL, setImageURL] = useState("");
  // const [image, setImage] = useState(null);

  // const [isFacingUser, setIsFacingUser] = useState(true);
  // const [isMirrored, setIsMirrored] = useState(true);
  // const [videoConstraints, setVideoConstraints] = useState(userVideo);

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
  } = useCameraHook();

  const {
    handleClose,
    open,
    setOpen,
    snackBarMessage,
    setSnackBarMessage
  } = useSnackBarHook();

  const handleClick = e => {
    if (!isPhotoTaken) takePhoto(webcamRef);
    else {
      setIsLoading(false);
      setImageURL("");
    }
    setPredictions([]);
    setIsPhotoTaken(!isPhotoTaken);
  };

  // const takePhoto = () => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setImageURL(imageSrc);
  //   createImage(imageSrc);
  // };
  // const createImage = url => {
  //   const newImage = new Image();
  //   newImage.src = url;
  //   newImage.crossOrigin = "anonymous";
  //   setImage(newImage);
  // };

  // abstract?
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
