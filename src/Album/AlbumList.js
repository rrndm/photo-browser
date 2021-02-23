import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import AlbumDelegate from './AlbumDelegate.js'
import ToList from '../ToList.js'

import { getAlbums } from '../appService.js'

const AlbumDelegateList = ToList(AlbumDelegate)

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: theme.spacing(2)
  }
}));

const AlbumList = () => {

  const classes = useStyles();

  const [albums, setAlbums] = useState([])

  const {userId} = useParams()

  useEffect(async () => {
    const result = await getAlbums(userId)
    const resultJson = await result.json()

    setAlbums(resultJson);
  }, [userId]);

  return (
    <React.Fragment>
      <Typography align="center" variant="h4">Albums {userId ? `of user ${userId}` : ""}</Typography>
      <div className={classes.spacer}/>
      <AlbumDelegateList items={albums}/>
    </React.Fragment>
  );
}

export default AlbumList;
