import React, { useEffect } from "react";
import "./App.css";
import { Container, CircularProgress, Grid, Snackbar } from "@material-ui/core";
import Navbar from "./components/Navbar";
import LoadingPage from "./components/LoadingPage";
import PredictionsTable from "./components/PredictionsTable";
import DeviceWebcam from "./components/DeviceWebcam";
import useMobileNetModel from "./utilities/useMobileNetModel";

const App = () => {
  const {
    model,
    loadModel,
    createClassifier,
    classifier,
    snackBarMessage,
    open,
    handleClose,
    isLoadingModel,
    // setIsLoadingModel,
    predictions,
    setPredictions,
    isLoading,
    setIsLoading,
    makePrediction
  } = useMobileNetModel();

  // simulating model load even though mobilenet is light and fast, other models might be longer load times. mostly to test out some css, otherwise isLoadingModel goes in async/await function :)
  useEffect(() => {
    loadModel();
    // let timer = setTimeout(() => {
    //   setIsLoadingModel(false);
    // }, 1500);
    // return () => clearTimeout(timer);
  }, [loadModel]);

  useEffect(() => {
    createClassifier();
  }, [createClassifier]);

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
              makePrediction={makePrediction}
              model={model}
              classifier={classifier}
            />

            {isLoading && (
              <Grid component="span">
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
};

export default App;
