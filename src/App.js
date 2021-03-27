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

function App() {
  const [isLoadingModel, setIsLoadingModel] = useState(true);
  const [open, setOpen] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState(null);

  // simulating model load even though mobilenet is light and fast, other models might be longer load times
  useEffect(() => {
    tf.ready().then(() => loadModel());
    setTimeout(() => {
      setIsLoadingModel(false);
    }, 3000);
  }, []);

  const loadModel = async () => {
    try {
      console.log("Loading mobilenet...");
      const model = await retry(mobilenet.load, 3, 2);
      setModel(model);
      console.log("Successfully loaded model", model);
    } catch (error) {
      setOpen(true);
      console.error("Error loading model:", error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  // console.log(process.env.REACT_APP_GOOGLE_API_KEY);

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
          vertical: "center",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={9000}
        onClose={handleClose}
        message="Model having trouble loading. Please refresh and try again"
      />
    </Grid>
  );
}

export default App;
