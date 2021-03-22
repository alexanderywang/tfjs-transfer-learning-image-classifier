import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import ClassifyButton from "./ClassifyButton";
import { Grid } from "@material-ui/core";

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

  const webcamRef = useRef(null);
  const imageRef = useRef(null);

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

  // could use a retry here
  const makePrediction = async () => {
    setIsLoading(true);
    try {
      const predictions = await model.classify(image);
      console.log("mobileNet model predictions:", predictions);
      setIsLoading(false);

      setPredictions(predictions);
    } catch (err) {
      console.error("error:", err);
    }
  };

  const flipCamera = () => {
    console.log(videoConstraints);
    if (isFacingUser) {
      setVideoConstraints(facingOutVideo);
    } else {
      setVideoConstraints(userVideo);
    }
    setIsMirrored(!isMirrored);
    setIsFacingUser(!isFacingUser);
  };

  return (
    <Grid>
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
      <ClassifyButton
        isLoading={isLoading}
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

// classify button can be modularized
