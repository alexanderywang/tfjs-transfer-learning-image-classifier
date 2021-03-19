import React from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";

const ClassifyButton = ({ setPredictions }) => {
  // hardcoded image
  const image = new Image();
  image.src =
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  image.crossOrigin = "anonymous";

  const loadModel = async () => {
    console.log("Loading mobilenet...");
    //load the model
    const model = await mobilenet.load();
    console.log("Successfully loaded model", model);

    // Make prediction through the model on our image
    // const image = document.getElementById("img");

    console.log(image);
    const predictions = await model.classify(image);
    console.log("predictions:", predictions);

    setPredictions(predictions);
  };

  return (
    <div>
      <button onClick={loadModel}>Classify</button>
    </div>
  );
};

export default ClassifyButton;
