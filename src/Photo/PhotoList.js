import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import PhotoDelegate from './PhotoDelegate.js'
import ToList from '../ToList.js'

import { getPhotos } from '../appService.js'

const PhotoDelegateList = ToList(PhotoDelegate)

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: theme.spacing(2)
  }
}));

const PhotoList = () => {

  const classes = useStyles();

  const [photos, setPhotos] = useState([])

  const {albumId} = useParams()

  useEffect(async () => {
    const result = await getPhotos(albumId)
    const resultJson = await result.json()

    setPhotos(resultJson);
  }, [albumId]);

  return (
    <React.Fragment>
      <Typography align="center" variant="h4">Photos {albumId ? `of album ${albumId}` : ""}</Typography>
      <div className={classes.spacer}/>
      <PhotoDelegateList items={photos}/>
    </React.Fragment>
  );
}

export default PhotoList;
