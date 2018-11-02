import React from 'react';
import { withStyles } from '@material-ui/core';

const Footer = ({ classes }) => (
  <div className={classes.root}>&nbsp;</div>
);

const styles = theme => ({
  root: {
  }
});

export default withStyles(styles)(Footer);
