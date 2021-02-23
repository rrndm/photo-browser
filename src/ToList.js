import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

const ToList = (Delegate) => (props) => {

  return (
    <Grid justify="center" container spacing={2}>
      {props.items.map((item, index) => (
        <Grid item key={index} xs={20}>
          <Delegate {...item}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default ToList;
