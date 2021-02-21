import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

const ToList = (Delegate) => (props) => {

  return (
    <Grid container spacing={2}>
      {props.items.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Delegate {...item}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default ToList;
