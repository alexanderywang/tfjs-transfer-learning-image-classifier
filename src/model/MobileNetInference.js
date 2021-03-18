import * as mobilenet from "@tensorflow-models/mobilenet";

const loadModel = async image => {
  console.log("Loading mobilenet...");
  //load the model
  const model = await mobilenet.load();
  console.log("Successfully loaded model", model);

  // Make prediction through the model on our image
  // const image = document.getElementById("img");

  console.log(image);
  const predictions = await model.classify(image);
  console.log("predictions:", predictions);
};

export default loadModel;
