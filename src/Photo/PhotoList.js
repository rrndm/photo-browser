import React, { useState } from 'react';
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

  if (photos.length === 0) {
    getPhotos()
    .then((res) => res.json())
    .then((jsonRes) => setPhotos(jsonRes))
  }

  return (
    <React.Fragment>
      <Typography variant="h4">Photos</Typography>
      <div className={classes.spacer}/>
      <PhotoDelegateList items={photos}/>
    </React.Fragment>
  );
}

export default PhotoList;
