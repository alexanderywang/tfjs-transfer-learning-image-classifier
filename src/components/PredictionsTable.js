import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import TranslationModal from "./TranslationModal";

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
            <TableCell>Translate</TableCell>
            <TableCell>Predictions</TableCell>
            <TableCell align="right">Probability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {predictions.map(prediction => (
            <TableRow key={prediction.className}>
              <TableCell align="left" scope="row" style={{ width: "2%" }}>
                <TranslationModal words={prediction.className}/>
              </TableCell>
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

export default PredictionsTable;
