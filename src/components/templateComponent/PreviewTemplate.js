import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 1030,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

const PreviewTemplate = (props) => {
    const classes = useStyles();

    const templateLines = props.templateData;
    const templateItems = templateLines.map((line) => {
        if (line === "") {
            return <li style={{ listStyle: "none", whiteSpace: "break-spaces" }}>&nbsp;</li>;
        } else {
            return <li style={{ listStyle: "none", whiteSpace: "break-spaces" }}>{line}</li>;
        }
    })

    return <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                    {templateItems}
                </Grid>
            </Grid>
        </Paper>
    </div>

}

export default PreviewTemplate;