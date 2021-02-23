import React, { useState } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 150
  },
  media: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: 0
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  content: {
    maxWidth: "100%"
  },
  title: {
    maxWidth: "100%"
  }
}));

function PhotoDelegate(props) {

  const classes = useStyles();

  const match = useRouteMatch()

  return (
    <Card className={classes.card}>
      <Link to={`/photos/${props.id}`} className={classes.link}>
        <CardActionArea>
          <CardMedia>
            <img src={props.thumbnailUrl} className={classes.media}/>
          </CardMedia>
          <CardContent className={classes.content}>
            <Typography variant="subtitle2" className={classes.title}>
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default PhotoDelegate;
