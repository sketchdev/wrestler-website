import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import { Link } from 'react-router-dom';
import bg from '../random-grey-variations.png';

const Masthead = ({ classes }) => (
  <div className={classes.root}>
      <Typography variant={'h3'} gutterBottom color={'inherit'}>Wrestler</Typography>
      <Typography variant={'h5'} color={'inherit'}>Express middleware that provides a dynamic RESTful API</Typography>
      <div className={classes.buttons}>
        <Button className={classes.button} variant={'contained'} component={Link} to={'/'}>Get started</Button>
        <Button className={classes.button} variant={'contained'} component={Link} to={'/'}>Learn more</Button>
      </div>
  </div>
);

const styles = theme => ({
  root: {
    backgroundImage: `url(${bg})`,
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 6,
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  buttons: {
    paddingTop: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

export default withStyles(styles)(Masthead);
