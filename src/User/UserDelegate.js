import React, { useState } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import AlbumList from '../Album/AlbumList.js'

const useStyles = makeStyles((theme) => ({
}));

function UserDelegate(props) {

  const classes = useStyles();

  const match = useRouteMatch()

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant="h6">
            {props.username}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined" color="primary">
            More info
          </Button>
          <Link to={`${match.url}/${props.id}/albums`}>
            <Button size="small" variant="outlined" color="primary">
              Albums
            </Button>
          </Link>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default UserDelegate;
