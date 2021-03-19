import React from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { Button } from "@material-ui/core";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";

const ClassifyButton = ({
  setPredictions,
  setIsLoading,
  isLoading,
  setIsPhotoTaken,
  isPhotoTaken,
  takePhoto,
  setImageURL,
  imageURL,
  model
  // image
}) => {
  // hardcoded image
  const image = new Image();
  image.src =
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  image.crossOrigin = "anonymous";

  // we should load model in app once. and make this loadPredictions instead
  const makePrediction = async () => {
    setIsLoading(true);
    // Make prediction through the model on our image
    // const image = document.getElementById("img");
    const predictions = await model.classify(image);
    console.log("mobileNet model predictions:", predictions);
    setIsLoading(false);

    setPredictions(predictions);
  };

  const handleClick = e => {
    if (!isPhotoTaken) takePhoto(e);
    else setImageURL("");

    setIsPhotoTaken(!isPhotoTaken);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        variant="contained"
        color="secondary"
        disableElevation
      >
        {isPhotoTaken ? "Retake" : "Take Photo"}
      </Button>
      <Button
        onClick={makePrediction}
        variant="contained"
        color="primary"
        disableElevation
      >
        {isLoading ? "Loading..." : "Classify"}
      </Button>
      {isPhotoTaken && (
        <div>
          <SystemUpdateAltIcon>
            <a href={imageURL} download="selfie.png">
              <i></i>
            </a>
          </SystemUpdateAltIcon>
        </div>
      )}
    </div>
  );
};

export default ClassifyButton;
