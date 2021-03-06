import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import BuildIcon from '@material-ui/icons/Build';
import { v4 as uuidv4 } from "uuid";

import Descriptors from "./data/Descriptors";
import ListFromFile from "./Descriptors/ListFromFile";
import MultiListFromFile from "./Descriptors/MultiListFromFile";
import ConvertSalary from "./Descriptors/ConvertSalary";
import Basic from "./Descriptors/Basic";
import MLinkedList from "./Descriptors/MLinkedList";
import MatchMapping from "./Descriptors/MatchMapping";
import SalaryConvertAndChangeFrequency from "./Descriptors/SalaryConvertAndChangeFrequency";
import DefaultTokenMapped from "./Descriptors/DefaultTokenMapped";
import FieldValue from "./Descriptors/FieldValue";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(1),
  },
  paper: {
    height: 180,
    width: 300,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  search: {
    padding: 20,
  },
  button: {
    margin: theme.spacing(8),
  },
}));

const Descriptor = (props) => {
  const classes = useStyles();

  const [descriptor, setDescriptor] = useState();
  const [savedDescriptors, setSavedDescriptors] = useState([]);
  const [onDisplayDescriptors, setOnDisplayDescriptors] = useState([]);

  const handleSearchInput = (event, values) => {
    setDescriptor(values);
  };

  const handleAddDescriptorToDisplay = () => {
    if (descriptor === undefined) {
      return;
    } else {
      const id = uuidv4();
      const component = descriptor.componentType;
      const descriptorType = descriptor.descriptor;
      const label = descriptor.label;

      setOnDisplayDescriptors((prevData) => {
        return [
          ...prevData,
          {
            id: id,
            componentType: component,
            descriptor: descriptorType,
            label: label,
          },
        ];
      });
    }
  };

  const handleSaveDescriptor = (descriptorData) => {
    setSavedDescriptors((prevData) => {
      return [...prevData, descriptorData];
    });
  };

  const handleRemoveDescriptor = (id) => {
    setOnDisplayDescriptors((prevDisplayData) => {
      return prevDisplayData.filter((item, index) => {
        return item.id !== id;
      });
    });

    setSavedDescriptors((prevSaveData) => {
      return prevSaveData.filter((item, index) => {
        return item.id !== id;
      });
    });
  };

  const handleFinalDescriptorDataSubmit = () => {
    props.onHandleDescriptorsToBeSent(savedDescriptors);
  };

  return (
    <Grid container className={classes.root} spacing={2} justify="center">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid key={0} item>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom align="center">
                Search
              </Typography>
              <div className={classes.search}>
                <Autocomplete
                  id="combo-box-demo"
                  options={Descriptors}
                  getOptionLabel={(option) => option.descriptor}
                  style={{ width: 300 }}
                  onChange={handleSearchInput}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Descriptor"
                      variant="outlined"
                      value={descriptor}
                    />
                  )}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddTwoToneIcon />}
                onClick={handleAddDescriptorToDisplay}
              >
                Add
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={2}>
        <Grid>
          <Grid container justify="center" spacing={4}>
            {onDisplayDescriptors.map((el, index) => {
              if (el.componentType === "ListFromFile") {
                return (
                  <ListFromFile
                    key={el.id}
                    id={el.id}
                    descriptor={el.descriptor}
                    module={el.componentType}
                    onHandleSaveDescriptor={handleSaveDescriptor}
                    onHandleRemoveDescriptor={handleRemoveDescriptor}
                  />
                );
              } else if (el.componentType === "MultiListFromFile") {
                return (
                  <MultiListFromFile
                    key={el.id}
                    id={el.id}
                    descriptor={el.descriptor}
                    module={el.componentType}
                    onHandleSaveDescriptor={handleSaveDescriptor}
                    onHandleRemoveDescriptor={handleRemoveDescriptor}
                  />
                );
              } else if (el.componentType === "ConvertSalary") {
                return (
                  <ConvertSalary
                    key={el.id}
                    id={el.id}
                    descriptor={el.descriptor}
                    module={el.componentType}
                    onHandleSaveDescriptor={handleSaveDescriptor}
                    onHandleRemoveDescriptor={handleRemoveDescriptor}
                  />
                );
              } else if (el.componentType === "MLinkedList") {
                return (
                  <MLinkedList
                    key={el.id}
                    id={el.id}
                    descriptor={el.descriptor}
                    module={el.componentType}
                    onHandleSaveDescriptor={handleSaveDescriptor}
                    onHandleRemoveDescriptor={handleRemoveDescriptor}
                  />
                );
              } else if (el.componentType === "MatchMapping") {
                return (
                  <MatchMapping
                    key={el.id}
                    id={el.id}
                    descriptor={el.descriptor}
                    module={el.componentType}
                    onHandleSaveDescriptor={handleSaveDescriptor}
                    onHandleRemoveDescriptor={handleRemoveDescriptor}
                  />
                );
              } else if (
                el.componentType === "SalaryConvertAndChangeFrequency"
              ) {
                return (
                  <SalaryConvertAndChangeFrequency
                    key={el.id}
                    id={el.id}
                    descriptor={el.descriptor}
                    module={el.componentType}
                    onHandleSaveDescriptor={handleSaveDescriptor}
                    onHandleRemoveDescriptor={handleRemoveDescriptor}
                  />
                );
              } else if (el.componentType === "DefaultTokenMapped") {
                return (
                  <DefaultTokenMapped
                    key={el.id}
                    id={el.id}
                    descriptor={el.descriptor}
                    module={el.componentType}
                    onHandleSaveDescriptor={handleSaveDescriptor}
                    onHandleRemoveDescriptor={handleRemoveDescriptor}
                  />
                );
              } else if (el.componentType === "FieldValue") {
                return (
                  <FieldValue
                    key={el.id}
                    id={el.id}
                    descriptor={el.descriptor}
                    module={el.componentType}
                    label={el.label}
                    onHandleSaveDescriptor={handleSaveDescriptor}
                    onHandleRemoveDescriptor={handleRemoveDescriptor}
                  />
                );
              } else {
                return (
                  <Basic
                    key={el.id}
                    id={el.id}
                    descriptor={el.descriptor}
                    module={el.componentType}
                    onHandleSaveDescriptor={handleSaveDescriptor}
                    onHandleRemoveDescriptor={handleRemoveDescriptor}
                  />
                );
              }
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<BuildIcon />}
            onClick={handleFinalDescriptorDataSubmit}
          >
            Build Template
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Descriptor;
