import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';

const GoldenRight = ({ children, className, colClassName }) => (
  <Grid container spacing={40} className={className}>
    {React.Children.map(children, (child, i) => {
      if (i <= 1) {
        return <Grid item xs={12} sm={i === 0 ? 5 : 7}>{React.cloneElement(child, { className: colClassName })}</Grid>;
      }
    })}
  </Grid>
);

export default GoldenRight;
