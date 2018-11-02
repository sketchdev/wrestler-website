import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';

const ThreeCol = ({ children, classes, className, colClassName }) => (
  <Grid container spacing={40} className={className}>
    {React.Children.map(children, (child, i) => {
      if (i <= 2) {
        return <Grid item xs={12} sm={4}>{React.cloneElement(child, { className: colClassName })}</Grid>;
      }
    })}
  </Grid>
);

export default ThreeCol;
