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
  CircularProgress
} from "@material-ui/core";
import Navbar from "./components/Navbar";
import LoadingPage from "./components/LoadingPage";
// import loadModel from "./model/MobileNetInference";

import CaptureImage from "./components/CaptureImage";

function App() {
  const [isLoadingModel, setIsLoadingModel] = useState(true);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState(null);

  useEffect(() => {
    loadModel();
    setTimeout(() => {
      setIsLoadingModel(false);
    }, 4000);
  }, []);

  // make this a retry function and setIsLoadingModel in here
  const loadModel = async () => {
    try {
      console.log("Loading mobilenet...");
      const model = await mobilenet.load();
      setModel(model);
      console.log("Successfully loaded model", model);
    } catch (error) {
      console.error("Error loading model:", error);
    }
  };

  return (
    <div>
      {isLoadingModel ? (
        <div>
          <LoadingPage open={isLoadingModel} />
        </div>
      ) : (
        <div className="App">
          <Container>
            <Navbar />
            <CaptureImage
              setPredictions={setPredictions}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              model={model}
            />

            {isLoading && (
              <div>
                <CircularProgress />
              </div>
            )}
            {predictions && <PredictionsTable predictions={predictions} />}
          </Container>
        </div>
      )}
    </div>
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
