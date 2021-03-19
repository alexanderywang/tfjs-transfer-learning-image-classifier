import React from "react";
import { Button } from "@material-ui/core";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";

const ClassifyButton = ({
  isLoading,
  setIsPhotoTaken,
  isPhotoTaken,
  takePhoto,
  setImageURL,
  imageURL,
  makePrediction
}) => {
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
