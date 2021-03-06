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
    height: 410,
    width: 250,
    padding: 6,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(4),
  },
  descriptor: {
    padding: 10,
    margin: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: 220,
    marginBottom: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 170,
  }
}));

const ConvertSalary = (props) => {
  const classes = useStyles();

  const [fieldName, setFieldName] = useState("");
  const [currency, setCurrency] = useState("");
  const [target, setTarget] = useState("from");
  const [isDisabled, setDisabled] = useState(false);

  const handleFieldName = (event) => {
    setFieldName(event.target.value);
  };

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const handleTarget = (event) => {
    setTarget(event.target.value);
  };

  const handleSubmit = () => {
    let data = {
      id: props.id,
      Descriptor: props.descriptor,
      FieldName: fieldName,
      Currency: currency,
      Target: target,
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
            name="convertSalaryFieldName"
            label="Field Name"
            id="convert-salary-field-name"
            value={fieldName}
            onChange={handleFieldName}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            fullWidth
            name="convertSalaryCurrency"
            label="Currency Mapping"
            id="convert-salary-currency"
            value={currency}
            onChange={handleCurrency}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.textField}>
          <FormControl className={classes.formControl}>
            <InputLabel id="content-type-select-label">Target</InputLabel>
            <Select
              labelId="content-type-select"
              id="content-type-select"
              value={target}
              onChange={handleTarget}
            >
              <MenuItem value={"from"}>From</MenuItem>
              <MenuItem value={"to"}>To</MenuItem>
              <MenuItem value={"cur"}>Currency</MenuItem>
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

export default ConvertSalary;
