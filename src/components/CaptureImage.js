import React, { useState } from "react";
import ClassifyButton from "./ClassifyButton";
import { Grid } from "@material-ui/core";

const CaptureImage = ({ setPredictions, setIsLoading, isLoading, model }) => {
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [image, setImage] = useState(null);
  const [isFacingUser, setIsFacingUser] = useState(true);
  const [isMirrored, setIsMirrored] = useState(true);
  const [videoConstraints, setVideoConstraints] = useState("user");

  const handleImageChange = event => {
    console.log("handleimage", URL.createObjectURL(event.target.files[0]))
    // this.setState({
    //   image: URL.createObjectURL(event.target.files[0])
    // });
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
    if (isFacingUser) {
      setVideoConstraints("environment");
    } else {
      setVideoConstraints("user");
    }
    setIsMirrored(!isMirrored);
    setIsFacingUser(!isFacingUser);
  };

  return (
    <Grid>
      <Grid>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          capture={videoConstraints}
          onChange={handleImageChange}
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

export default CaptureImage;
