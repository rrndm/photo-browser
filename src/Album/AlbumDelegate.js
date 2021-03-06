import React, { useState } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 150
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

function AlbumDelegate(props) {

  const classes = useStyles();

  const match = useRouteMatch()

  return (
    <Card className={classes.card}>
      <Link to={`/albums/${props.id}/photos`} className={classes.link}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default AlbumDelegate;
