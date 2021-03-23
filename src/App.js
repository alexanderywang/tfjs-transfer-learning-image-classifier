import React, { useState, useEffect } from "react";
import "./App.css";
import * as mobilenet from "@tensorflow-models/mobilenet";
import {
  makeStyles,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Grid,
  Snackbar
} from "@material-ui/core";
import Navbar from "./components/Navbar";
import LoadingPage from "./components/LoadingPage";
import retry from "../src/utilities/retryFunction";

import DeviceWebcam from "./components/DeviceWebcam";

function App() {
  const [isLoadingModel, setIsLoadingModel] = useState(true);
  const [open, setOpen] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState(null);

  useEffect(() => {
    loadModel();
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

const PredictionsTable = ({ predictions }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: window.width
    }
  });

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Predictions</TableCell>
            <TableCell align="right">Probability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {predictions.map(prediction => (
            <TableRow key={prediction.className}>
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold", width: "20%" }}
              >
                {prediction.className}
              </TableCell>
              <TableCell align="right" style={{ width: "20%" }}>
                {Math.round(prediction.probability * 100, 5)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
