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
        height: 640,
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
        minWidth: 120,
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

const BatchMeta = (props) => {
    const classes = useStyles();

    const [jiraTicket, setJiraTicket] = useState("");
    const [boardId, setBoardId] = useState("");
    const [niceName, setNiceName] = useState("");
    const [templateName, setTemplateName] = useState("");
    const [feedType, setFeedType] = useState("Client Feed");
    const [supportHTML, setSupportHTML] = useState("yes");
    const [salaryBanding, setSalaryBanding] = useState("no");
    const [contentType, setContentType] = useState("text/xml");
    const [batchType, setBatchType] = useState("allClients");
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

    const handleFeedTypeChange = (event) => {
        setFeedType(event.target.value);
    };

    const handleHtmlSupportChange = (event) => {
        setSupportHTML(event.target.value);
    };

    const handleSalaryBandingChange = (event) => {
        setSalaryBanding(event.target.value);
    };

    const handleContentTypeChange = (event) => {
        setContentType(event.target.value);
    };

    const handleBatchTypeChange = (event) => {
      setBatchType(event.target.value)
    }

    const handleSubmit = (event) => {
        if (!isSet) {
            let data = {
                TypeOfMeta: "BatchMeta",
                JiraTicketNumber: jiraTicket,
                BoardId: boardId,
                NiceName: niceName,
                TemplateName: templateName,
                FeedType: feedType,
                SupportHtml: supportHTML,
                SalaryBanding: salaryBanding,
                ContentType: contentType,
                BatchType: batchType,
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
                  <Grid item xs={12} sm={3}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="feed-type-select-label">
                        Feed Type
                      </InputLabel>
                      <Select
                        labelId="feed-type-select"
                        id="feed-type-select"
                        value={feedType}
                        onChange={handleFeedTypeChange}
                      >
                        <MenuItem value={"Client Feed"}>Client Feed</MenuItem>
                        <MenuItem value={"Job Board"}>Job Board</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3}>
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
                  <Grid item xs={12} sm={3}>
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
                  <Grid item xs={12} sm={3}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="content-type-select-label">
                        Content Type
                      </InputLabel>
                      <Select
                        labelId="content-type-select"
                        id="content-type-select"
                        value={contentType}
                        onChange={handleContentTypeChange}
                      >
                        <MenuItem value={"text/xml"}>XML</MenuItem>
                        <MenuItem value={"application/json"}>JSON</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="batch-type-select-label">
                        Batch Client
                      </InputLabel>
                      <Select
                        labelId="batch-type-select"
                        id="batch-type-select"
                        value={batchType}
                        onChange={handleBatchTypeChange}
                      >
                        <MenuItem value={"allClients"}>All Clients</MenuItem>
                        <MenuItem value={"perClient"}>Per Client</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
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

}

export default BatchMeta;