import React, { useState, useEffect } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import { Container, CircularProgress, Grid, Snackbar } from "@material-ui/core";
import Navbar from "./components/Navbar";
import LoadingPage from "./components/LoadingPage";
import PredictionsTable from "./components/PredictionsTable";
import DeviceWebcam from "./components/DeviceWebcam";
import useMobileNetModel from "./utilities/useMobileNetModel";

function App() {
  const [isLoadingModel, setIsLoadingModel] = useState(true);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    model,
    loadModel,
    snackBarMessage,
    open,
    handleClose
  } = useMobileNetModel();

  // simulating model load even though mobilenet is light and fast, other models might be longer load times. mostly to test out some css, otherwise isLoadingModel goes in async/await function :)
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
