import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(8),
  },
  paper: {
    height: 550,
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
    marginBottom: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 170,
  },
}));

const MatchMapping = (props) => {
  const classes = useStyles();

  const [fieldName, setFieldName] = useState("");
  const [defaultToken, setDefaultToken] = useState("");
  const [valueToMatch, setValueToMatch] = useState("");
  const [returnMatch, setReturnMatch] = useState("");
  const [returnOtherwise, setReturnOtherwise] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  const handleFieldName = (event) => {
    setFieldName(event.target.value);
  };

  const handleDefaultToken = (event) => {
    setDefaultToken(event.target.value);
  };

  const handleValueToMatch = (event) => {
    setValueToMatch(event.target.value);
  };

  const handleReturnToMatch = (event) => {
    setReturnMatch(event.target.value);
  };

  const handleReturnOtherwise = (event) => {
    setReturnOtherwise(event.target.value);
  };

  const handleSubmit = () => {
    let data = {
      id: props.id,
      Descriptor: props.descriptor,
      FieldName: fieldName,
      DefaultToken: defaultToken,
      ValueToMatch: valueToMatch,
      ReturnMatch: returnMatch,
      ReturnOtherwise: returnOtherwise,
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
            name="defaultToken"
            label="Default Token"
            id="default-token"
            value={defaultToken}
            onChange={handleDefaultToken}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            fullWidth
            name="valueToMatch"
            label="Value to Match"
            id="value-to-match"
            value={valueToMatch}
            onChange={handleValueToMatch}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            fullWidth
            name="returnMatch"
            label="Return Match"
            id="return-match"
            value={returnMatch}
            onChange={handleReturnToMatch}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            fullWidth
            name="returnOtherwise"
            label="Return Otherwise"
            id="return-otherwise"
            value={returnOtherwise}
            onChange={handleReturnOtherwise}
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

export default MatchMapping;
