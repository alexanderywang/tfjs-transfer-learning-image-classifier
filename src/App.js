import React, { useState, useEffect } from "react";
import "./App.css";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import { Container, CircularProgress, Grid, Snackbar } from "@material-ui/core";
import Navbar from "./components/Navbar";
import LoadingPage from "./components/LoadingPage";
import PredictionsTable from "./components/PredictionsTable";
import retry from "../src/utilities/retryFunction";
import DeviceWebcam from "./components/DeviceWebcam";
import useSnackBarHook from "./utilities/useSnackBarHook";

function App() {
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
  } = useSnackBarHook();

  // simulating model load even though mobilenet is light and fast, other models might be longer load times. mostly to test out some css :)
  useEffect(() => {
    const prepareModel = () => {
      tf.ready().then(() => loadModel());
    };
    prepareModel();
    let timer = setTimeout(() => {
      setIsLoadingModel(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // abstract?
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

  return (
    <Grid>
      {isLoadingModel ? (
        <Grid>
          <LoadingPage open={isLoadingModel} />
        </Grid>
      ) : (
        <Grid className="App">
          <Container>
            <Navbar />
            <DeviceWebcam
              setPredictions={setPredictions}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              model={model}
            />

            {isLoading && (
              <Grid>
                <CircularProgress />
              </Grid>
            )}
            {predictions && <PredictionsTable predictions={predictions} />}
          </Container>
        </Grid>
      )}

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snackBarMessage}
      />
    </Grid>
  );
}

export default App;
