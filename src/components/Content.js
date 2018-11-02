import React from 'react';
import { withStyles } from '@material-ui/core';

const Content = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

const styles = theme => ({
  root: {
    margin: 'auto',
    maxWidth: '1100px',
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
  }
});

export default withStyles(styles)(Content);
