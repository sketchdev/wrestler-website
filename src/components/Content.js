import React from 'react';
import { withStyles } from '@material-ui/core';

const Content = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

const styles = theme => ({
  root: {
    margin: 'auto',
    maxWidth: '1100px',
    padding: 20,
  }
});

export default withStyles(styles)(Content);
