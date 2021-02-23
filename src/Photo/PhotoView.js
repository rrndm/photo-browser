import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import { getPhoto } from '../appService.js'

const useStyles = makeStyles((theme) => ({
  card: {
    maxHeight: 800,
    maxWidth: 600,
    margin: "auto"
  },
  media: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: 0
  }
}));

function PhotoView() {

  const [photo, setPhoto] = useState()

  const classes = useStyles();

  const {photoId} = useParams()

  useEffect(async () => {
    const result = await getPhoto(photoId)
    const resultJson = await result.json()

    setPhoto(resultJson);
  }, [photoId]);

  return (
    <React.Fragment>
      {
        photo
        ? <Card className={classes.card}>
            <CardMedia>
              <img className={classes.media} src={photo.url}/>
            </CardMedia>
            <CardContent>
              <Typography variant="h6">
                {photo.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Album {photo.albumId}
              </Typography>
            </CardContent>
          </Card>
        : null
      }
    </React.Fragment>
  );
}

export default PhotoView;
