import React, { useState } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import AlbumList from '../Album/AlbumList.js'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

function UserDelegate(props) {

  const classes = useStyles();

  const match = useRouteMatch()

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <Link to={`${match.path}/${props.id}`} className={classes.link}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h6">
                {props.username}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </React.Fragment>
  );
}

export default UserDelegate;
