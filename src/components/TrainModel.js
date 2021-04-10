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
import useIndexedDB from "../utilities/useIndexedDB";

const helpfulTip =
  "Try taking at least three pictures to help train me. More data will help my accuracy";
const deleteTip =
  "If you feel I'm poorly trained, or just want to get rid of everything I've learned...";

const TrainModel = ({ model, image, classifier }) => {
  const { addExample } = useKNNClassifier(classifier, model);
  const { deleteModel } = useIndexedDB();
  const [suggestion, setSuggestion] = useState("");
  const [isTraining, setIsTraining] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = e => {
    setSuggestion(e.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    addExample(suggestion, image);
    setMessage(
      `Very interesting, I'll try to remember this is a ${suggestion}. Taking a few more pictures from different angles will help me more...`
    );
    setIsTraining(true);
    setSuggestion("");
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
        <IconButton onClick={deleteModel}>
          <DeleteOutlineIcon />
          Delete all my training
        </IconButton>
      </Tooltip>
    </Grid>
  );
};

export default TrainModel;
