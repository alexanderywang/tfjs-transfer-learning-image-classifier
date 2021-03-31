import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from "@material-ui/core";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import useModalHook from "../utilities/useModalHook";
import TranslationModal from "./TranslationModal";

const useStyles = makeStyles({
  table: {
    minWidth: window.width
  }
});
const PredictionsTable = ({ predictions }) => {
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
            <PredictionRow key={prediction.className} prediction={prediction} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PredictionsTable;

const PredictionRow = ({ prediction }) => {
  const { open, handleClickOpen } = useModalHook();

  return (
    <TableRow>
      <TableCell align="left" scope="row" style={{ width: "2%" }}>
        <IconButton
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          <GTranslateIcon />
        </IconButton>
        {open && <TranslationModal words={prediction.className} open={open}/>}
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
  );
};
