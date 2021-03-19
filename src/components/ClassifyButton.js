import React from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { Button } from "@material-ui/core";
const ClassifyButton = ({ setPredictions, setIsLoading }) => {
  // hardcoded image
  const image = new Image();
  image.src =
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  image.crossOrigin = "anonymous";

  const loadModel = async () => {
    setIsLoading(true);
    console.log("Loading mobilenet...");

    const model = await mobilenet.load();
    console.log("Successfully loaded model", model);
    setIsLoading(false);

    // Make prediction through the model on our image
    // const image = document.getElementById("img");
    const predictions = await model.classify(image);
    console.log("mobileNet model predictions:", predictions);

    setPredictions(predictions);
  };

  return (
    <div>
      <Button
        onClick={loadModel}
        variant="contained"
        color="primary"
        disableElevation
      >
        Classify
      </Button>
    </div>
  );
};

export default ClassifyButton;
