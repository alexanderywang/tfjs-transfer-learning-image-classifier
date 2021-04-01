import { useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import useSnackBar from "./useSnackBar";
import retry from "./retryFunction";

const useMobileNetModel = () => {
  const [isLoadingModel, setIsLoadingModel] = useState(true);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState(null);

  const {
    handleClose,
    open,
    setOpen,
    snackBarMessage,
    setSnackBarMessage
  } = useSnackBar();

  const loadModel = async () => {
    try {
      console.log("Loading mobilenet...");
      const model = await retry(mobilenet.load, 3, 2);
      setModel(model);
      console.log("Successfully loaded model", model);
      setSnackBarMessage(`Model loaded!`);
      setOpen(true);
    } catch (error) {
      console.error("Error loading model:", error);
      setSnackBarMessage("Error loading model. Please refresh and try again.");
      setOpen(true);
    }
  };

  const makePrediction = async (image, imageURL) => {
    if (imageURL === null) {
      setSnackBarMessage("Take another picture please");
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
      setSnackBarMessage(
        "No predictions can be made. Take another picture. Check out the tips"
      );
      setOpen(true);
      console.error("error:", err);
    }
  };

  return {
    model,
    loadModel,
    snackBarMessage,
    open,
    handleClose,
    isLoadingModel,
    setIsLoadingModel,
    predictions,
    setPredictions,
    isLoading,
    setIsLoading,
    makePrediction
  };
};

export default useMobileNetModel;
