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
    height: 400,
    width: 250,
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

const DefaultTokenMapped = (props) => {
  const classes = useStyles();

  const [fieldName, setFieldName] = useState("");
  const [mappedToken, setMappedToken] = useState("");
  const [keyPairs, setKeyPairs] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  const handleFieldName = (event) => {
    setFieldName(event.target.value);
  };

  const handleMappedToken = (event) => {
    setMappedToken(event.target.value);
  };

  const handleKeyPairs = (event) => {
    setKeyPairs(event.target.value);
  };

  const handleSubmit = () => {
    let data = {
      id: props.id,
      Descriptor: props.descriptor,
      FieldName: fieldName,
      MappedToken: mappedToken,
      KeyPairs: keyPairs,
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
            name="tokenFieldName"
            label="Field Name"
            id="token-field-name"
            value={fieldName}
            onChange={handleFieldName}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            fullWidth
            name="tokenMapped"
            label="Mapped Token"
            id="token-mapped-name"
            value={mappedToken}
            onChange={handleMappedToken}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.textField}>
          <TextField
            variant="outlined"
            fullWidth
            name="kvp"
            label="Key Value Pairs"
            id="kvp"
            placeholder="i.e. week|annum"
            value={keyPairs}
            onChange={handleKeyPairs}
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

export default DefaultTokenMapped;
