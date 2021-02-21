import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
}));

function AlbumDelegate(props) {

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="primary">
          Open
        </Button>
      </CardActions>
    </Card>
  );
}

export default AlbumDelegate;
