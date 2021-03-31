import { useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import useSnackBarHook from "./useSnackBarHook";
import retry from "./retryFunction";

const useLoadModelHook = () => {
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
      setOpen(true);
      setSnackBarMessage(`Model loaded!`);
    } catch (error) {
      console.error("Error loading model:", error);
      setOpen(true);
      setSnackBarMessage("Error loading model. Please refresh and try again.");
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

export default useLoadModelHook;
