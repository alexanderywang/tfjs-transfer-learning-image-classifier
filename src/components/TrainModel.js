import React, { useState } from "react";
import {
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  Tooltip,
  Zoom,
  Typography,
  Grid
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AssignmentIcon from "@material-ui/icons/Assignment";
import useKNNClassifier from "../utilities/useKNNClassifier";
import format from "../utilities/helperFunctions";
import useMobileNetModel from "../utilities/useMobileNetModel";

const helpfulTip =
  "Try taking at least three pictures to help train me. More data will help my accuracy";
const deleteTip =
  "If you feel I'm poorly trained, or just want to get rid of everything I've learned...";

const TrainModel = ({ model, image, classifier }) => {
  const { addExample } = useKNNClassifier(classifier, model);
  const { deleteClassifier } = useMobileNetModel();
  const [suggestion, setSuggestion] = useState("");
  const [isTraining, setIsTraining] = useState(false);
  const [message, setMessage] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  const handleChange = e => {
    setSuggestion(e.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const label = format(suggestion);
    addExample(label, image);
    setMessage(
      `Very interesting, I'll try to remember this is a ${label}. Taking a few more pictures from different angles will help me more...`
    );
    setIsTraining(true);
    setSuggestion("");
  };
  const handleDeleteClassifier = () => {
    deleteClassifier();
    setIsTraining(false);
    setMessage("");
    setIsDeleted(true);
  };

  return (
    <Grid>
      {!isTraining ? (
        <form onSubmit={handleSubmit}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">
              what do you think this is?
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={suggestion}
              onChange={handleChange}
              label="suggestion"
            />
          </FormControl>
          {suggestion && (
            <Tooltip
              title={helpfulTip}
              TransitionComponent={Zoom}
              disableFocusListener
            >
              <IconButton onClick={handleSubmit}>
                <AssignmentIcon />
                teach me
              </IconButton>
            </Tooltip>
          )}
        </form>
      ) : (
        <>
          <Typography>{message}</Typography>
        </>
      )}
      <Tooltip
        title={deleteTip}
        TransitionComponent={Zoom}
        disableFocusListener
      >
        <IconButton onClick={handleDeleteClassifier}>
          <DeleteOutlineIcon />
          {isDeleted ? (
            <Typography>Trained Classifier deleted.</Typography>
          ) : (
            <Typography>
              Delete my training. Refresh the page, I'll forget everything
              you've taught me.
            </Typography>
          )}
        </IconButton>
      </Tooltip>
    </Grid>
  );
};

export default TrainModel;
