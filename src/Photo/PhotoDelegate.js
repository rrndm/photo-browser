import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 150
  }
}));

function PhotoDelegate(props) {

  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.thumbnailUrl}/>
        <CardContent>
          <Typography variant="h6">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PhotoDelegate;
