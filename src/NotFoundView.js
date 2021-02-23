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
  content: {
    maxWidth: "100%"
  },
  title: {
    margin: "auto"
  }
}));

function NotFoundView(props) {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="h3" align="center" className={classes.title}>
          Page not found!
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotFoundView;
