import React from 'react';
import { withStyles } from '@material-ui/core';

const Rule = ({ classes }) => (
  <hr className={classes.root}/>
);

const styles = theme => ({
  root: {
    border: 0,
    height: '1px',
    backgroundColor: theme.palette.grey[200],
    margin: 0,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: 0,
  }
});

export default withStyles(styles)(Rule);
