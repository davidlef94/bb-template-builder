import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(8),
  },
  paper: {
    height: 580,
    width: 250,
    padding: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(4),
  },
  descriptor: {
    padding: 10,
  },
  button: {
    margin: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(2),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 170,
  },
}));

const MLinkedList = (props) => {
  const classes = useStyles();

  const [fieldName, setFieldName] = useState("");
  const [metric, setMetric] = useState("");
  const [maxNumber, setMaxNumber] = useState("infinite");
  const [delimeter, setDelimeter] = useState("");
  const [multiListDescriptor, setMultiListDescriptor] = useState("child");
  const [isDisabled, setDisabled] = useState(false);

  const handleFieldName = (event) => {
    setFieldName(event.target.value);
  };

  const handleMetric = (event) => {
    setMetric(event.target.value);
  };

  const handleMaxNumber = (event) => {
    setMaxNumber(event.target.value);
  };

  const handleDelimeter = (event) => {
    setDelimeter(event.target.value);
  };

  const handleMultiListDescriptor = (event) => {
    setMultiListDescriptor(event.target.value);
  };

  const handleSubmit = () => {
    let data = {
      id: props.id,
      Descriptor: props.descriptor,
      FieldName: fieldName,
      Metric: metric,
      MaxNumber: maxNumber,
      Delimeter: delimeter,
      MultiListDescriptor: multiListDescriptor,
      module: props.module
    };
    props.onHandleSaveDescriptor(data);
    setDisabled(true);
  };

  const handleRemove = () => {
    props.onHandleRemoveDescriptor(props.id);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom align="center">
        {props.descriptor}
      </Typography>
      <div className={classes.descriptor}>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            fullWidth
            name="multiListFromFileFieldName"
            label="Field Name"
            id="multi-list-from-file-field-name"
            value={fieldName}
            onChange={handleFieldName}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            fullWidth
            name="multiListFromFileMetric"
            label="V4 SortMetric"
            id="multi-list-from-file-metric"
            value={metric}
            onChange={handleMetric}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.textField}>
          <FormControl className={classes.formControl}>
            <InputLabel id="max-number-select-label">Max Number</InputLabel>
            <Select
              labelId="max-number-select"
              id="max-number-select"
              value={maxNumber}
              onChange={handleMaxNumber}
            >
              <MenuItem value={"infinite"}>No Limit</MenuItem>
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            fullWidth
            name="multiLinkedListDelimeter"
            label="Delimeter"
            id="multi-linked-list-delimeter"
            value={delimeter}
            onChange={handleDelimeter}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.textField}>
          <FormControl className={classes.formControl}>
            <InputLabel id="descriptor-select-label">Descriptor</InputLabel>
            <Select
              labelId="descriptor-select"
              id="descriptor-select"
              value={multiListDescriptor}
              onChange={handleMultiListDescriptor}
            >
              <MenuItem value={"child"}>Child Only</MenuItem>
              <MenuItem value={"parent"}>Parent Only</MenuItem>
              <MenuItem value={"both"}>Both</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.button}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Save
          </Button>
        </div>
        <div className={classes.button}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleRemove}
          >
            Delete
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default MLinkedList;
