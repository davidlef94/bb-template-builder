import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";

import InstantMeta from "./metaComponent/InstantMeta";
import HanuMeta from "./metaComponent/HanuMeta";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(8),
  },
  paper: {
    height: 240,
    width: 300,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    padding: 20,
  },
}));

const MetaSelection = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState("");

  const handleMetaTypeChange = (event) => {
    setValue(event.target.value);
    props.onIsMetaSelected();
  };

  const handleFinalMetaChange = (meta) => {
    props.onHandleFinalMetaToSend(meta);
  };

  let metaComponent;
  if (value === "Instant") {
    metaComponent = (
      <InstantMeta onHandleFinalMetaChange={handleFinalMetaChange} />
    );
  } else if (value === "Hanu") {
    metaComponent = (
      <HanuMeta onHandleFinalMetaChange={handleFinalMetaChange} />
    );
  }

  return (
    <Grid container className={classes.root} spacing={2} justify="center">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid key={0} item>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom align="center">
                Instant
              </Typography>
              <Radio
                checked={value === "Instant"}
                onChange={handleMetaTypeChange}
                value="Instant"
                name="instant-radio-button"
              />
              <div className={classes.typography}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Basic integrations such as WordPress, JSON and XML where logic
                  is minimal
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid key={1} item>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom align="center">
                API
              </Typography>
              <Radio
                checked={value === "API"}
                onChange={handleMetaTypeChange}
                value="API"
                name="api-radio-button"
              />
              <div className={classes.typography}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Integration with authentication, authroization and API
                  end-points
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid key={2} item>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom align="center">
                Hanu
              </Typography>
              <Radio
                checked={value === "Hanu"}
                onChange={handleMetaTypeChange}
                value="Hanu"
                name="hanu-radio-button"
              />
              <div className={classes.typography}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Email type integrations for sending job adverts via email
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid Item xs={12}>
        {metaComponent}
      </Grid>
    </Grid>
  );
};

export default MetaSelection;
