import { useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import useSnackBarHook from "./useSnackBarHook";
import retry from "./retryFunction";

const useMobileNetModelHook = () => {
  const [model, setModel] = useState(null);

  const {
    handleClose,
    open,
    setOpen,
    snackBarMessage,
    setSnackBarMessage
  } = useSnackBarHook();

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

  return {
    model,
    loadModel,
    snackBarMessage,
    open,
    handleClose
  };
};

export default useMobileNetModelHook;
