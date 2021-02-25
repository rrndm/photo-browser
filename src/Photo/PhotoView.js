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
  const [loading, setLoading] = useState(true)
  const [errored, setErrored] = useState(false)

  const classes = useStyles();

  const {photoId} = useParams()

  useEffect(async () => {
    setLoading(true)
    try {
      const result = await getPhoto(photoId)
      if (result.status >= 400 && result.status < 600)
        throw new Error()
      const resultJson = await result.json()
      setPhoto(resultJson);
    }
    catch(e) {
      setErrored(true)
    }
    finally {
      setLoading(false)
    }
  }, [photoId]);

  return (
    <React.Fragment>
    {
      loading
      ? <Typography align="center" variant="h3">Loading...</Typography>
      : errored
        ? <Typography align="center" variant="h3">Error while fetching resource!</Typography>
        : <Card className={classes.card}>
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
    }
    </React.Fragment>
  );
}

export default PhotoView;
