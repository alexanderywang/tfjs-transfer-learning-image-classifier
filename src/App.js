import React, { useState } from "react";
import "./App.css";
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
// import loadModel from "./model/MobileNetInference";
import ClassifyButton from "./components/ClassifyButton";
import Webcam from "./components/Webcam";

function App() {
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Container>
        <Navbar />
        <Webcam />
        <ClassifyButton
          setPredictions={setPredictions}
          setIsLoading={setIsLoading}
        />
        {isLoading && (
          <div>
            <CircularProgress />
          </div>
        )}
        {predictions && <PredictionsTable predictions={predictions} />}
      </Container>
    </div>
  );
}

export default App;

const PredictionsTable = ({ predictions }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650
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
