import React from "react";
import { Button } from "@material-ui/core";
// import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";

const ClassifyButton = ({
  isLoading,
  setIsPhotoTaken,
  isPhotoTaken,
  takePhoto,
  setImageURL,
  imageURL,
  makePrediction,
  setPredictions
}) => {
  const handleClick = e => {
    if (!isPhotoTaken) takePhoto(e);
    else setImageURL("");
    setPredictions([]);
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
          {/* <div>
            <SystemUpdateAltIcon>
              <a href={imageURL} download="selfie.png">
                <i></i>
              </a>
            </SystemUpdateAltIcon>
          </div> */}
        </>
      )}
    </div>
  );
};

export default ClassifyButton;
