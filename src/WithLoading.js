import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

const WithLoading = Component => (props) => {

  return (
    <React.Fragment>
    {
      props.loading
      ? <Typography align="center" variant="h3">Loading...</Typography>
      : props.errored
        ? <Typography align="center" variant="h3">Error while fetching resource!</Typography>
        : <React.Fragment>
            {props.titleText ? <Typography gutterBottom align="center" variant="h4">{props.titleText}</Typography> : null}
            <Component {...props}/>
          </React.Fragment>
    }
    </React.Fragment>
  );
}

export default WithLoading;
