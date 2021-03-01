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
    height: 510,
    width: 380,
    padding: 6,
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

const SalaryConvertAndChangeFrequency = (props) => {
  const classes = useStyles();

  const [fieldName, setFieldName] = useState("");
  const [frequencyTarget, setFrequencyTarget] = useState("annum");
  const [fromOrTo, setFromOrTo] = useState("from");
  const [currencyMapping, setCurrencyMapping] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  const handleFieldName = (event) => {
    setFieldName(event.target.value);
  };

  const handleFrequencyTarget = (event) => {
    setFrequencyTarget(event.target.value);
  };

  const handleFromOrTo = (event) => {
    setFromOrTo(event.target.value);
  };

  const handleCurrencyMapping = (event) => {
    setCurrencyMapping(event.target.value);
  };

  const handleSubmit = () => {
    let data = {
      id: props.id,
      Descriptor: props.descriptor,
      FieldName: fieldName,
      FrequencyTarget: frequencyTarget,
      FromOrTo: fromOrTo,
      CurrencyMapping: currencyMapping,
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
            name="convertSalaryFreqFieldName"
            label="Field Name"
            id="convert-salary-freq-field-name"
            value={fieldName}
            onChange={handleFieldName}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.textField}>
          <FormControl className={classes.formControl}>
            <InputLabel id="target-select-label">Frequency Target</InputLabel>
            <Select
              labelId="target-select"
              id="target-select"
              value={frequencyTarget}
              onChange={handleFrequencyTarget}
            >
              <MenuItem value={"annum"}>Annum</MenuItem>
              <MenuItem value={"month"}>Month</MenuItem>
              <MenuItem value={"week"}>Week</MenuItem>
              <MenuItem value={"day"}>Day</MenuItem>
              <MenuItem value={"hour"}>Hour</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.textField}>
          <FormControl className={classes.formControl}>
            <InputLabel id="from-select-label">From or To</InputLabel>
            <Select
              labelId="from-select"
              id="from-select"
              value={fromOrTo}
              onChange={handleFromOrTo}
            >
              <MenuItem value={"from"}>From</MenuItem>
              <MenuItem value={"to"}>To</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            fullWidth
            name="currencyMapping"
            label="Currency Mapping"
            id="currency-mapping"
            value={currencyMapping}
            onChange={handleCurrencyMapping}
            disabled={isDisabled}
          />
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

export default SalaryConvertAndChangeFrequency;
