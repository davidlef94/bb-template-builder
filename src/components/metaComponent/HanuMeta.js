import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(8),
  },
  paper: {
    height: 620,
    width: 600,
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    padding: 10,
  },
  submit: {
    margin: theme.spacing(6, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 270,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  check: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 650,
    color: green[500],
  },
}));

const HanuMeta = (props) => {
  const classes = useStyles();

  const [jiraTicket, setJiraTicket] = useState("");
  const [boardId, setBoardId] = useState("");
  const [niceName, setNiceName] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [supportHTML, setSupportHTML] = useState("yes");
  const [salaryBanding, setSalaryBanding] = useState("no");
  const [email, setEmail] = useState("");
  const [isSet, setIsSet] = useState(false);

  const handleJiraTicketChange = (event) => {
    setJiraTicket(event.target.value);
  };

  const handleBoardIdChange = (event) => {
    setBoardId(event.target.value);
  };

  const handleNiceNameChange = (event) => {
    setNiceName(event.target.value);
  };

  const handleTemplateNameChange = (event) => {
    setTemplateName(event.target.value);
  };

  const handleHtmlSupportChange = (event) => {
    setSupportHTML(event.target.value);
  };

  const handleSalaryBandingChange = (event) => {
    setSalaryBanding(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!isSet) {
      let data = {
        TypeOfMeta: "HanuMeta",
        JiraTicketNumber: jiraTicket,
        BoardId: boardId,
        NiceName: niceName,
        TemplateName: templateName,
        SupportHtml: supportHTML,
        SalaryBanding: salaryBanding,
        ContentType: "email",
        Email: email,
      };
      props.onHandleFinalMetaChange(data);
    }
    event.preventDefault();
    setIsSet(!isSet);
  };

  return (
    <Grid container className={classes.root} spacing={2} justify="center">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              Meta
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="jira-Ticket"
                    variant="outlined"
                    required
                    fullWidth
                    id="jiraTicket"
                    label="Jira Ticket"
                    value={jiraTicket}
                    onChange={handleJiraTicketChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="board-id"
                    variant="outlined"
                    required
                    fullWidth
                    id="boardID"
                    label="Board ID"
                    value={boardId}
                    onChange={handleBoardIdChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="niceName"
                    label="Nice Name"
                    id="nice-name"
                    value={niceName}
                    onChange={handleNiceNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="templateName"
                    label="Template Name"
                    id="template-name"
                    value={templateName}
                    onChange={handleTemplateNameChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="html-support-select-label">
                      Supports HTML
                    </InputLabel>
                    <Select
                      labelId="html-support-select"
                      id="html-support-select"
                      value={supportHTML}
                      onChange={handleHtmlSupportChange}
                    >
                      <MenuItem value={"yes"}>Yes</MenuItem>
                      <MenuItem value={"no"}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="salary-banding-select-label">
                      Salary Banding
                    </InputLabel>
                    <Select
                      labelId="salary-banding-select"
                      id="salary-banding-select"
                      value={salaryBanding}
                      onChange={handleSalaryBandingChange}
                    >
                      <MenuItem value={"no"}>No</MenuItem>
                      <MenuItem value={"yes"}>Yes</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="email"
                    label="Testing Email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {isSet ? "Edit" : "Set"}
                  </Button>
                </Grid>
                <div className={classes.check}>
                  {isSet && <CheckCircleIcon />}
                </div>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HanuMeta;
