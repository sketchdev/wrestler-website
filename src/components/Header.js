import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import { withStyles } from '@material-ui/core';

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant={'h6'}>Wrestler</Typography>
      </Toolbar>
    </AppBar>
  </div>
);

const styles = theme => ({
  root: {
    borderTop: `10px solid ${theme.palette.primary.dark}`
  }
});

export default withStyles(styles)(Header);
