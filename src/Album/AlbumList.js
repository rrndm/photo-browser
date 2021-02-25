import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import AlbumDelegate from './AlbumDelegate.js'
import ToList from '../ToList.js'
import WithLoading from '../WithLoading.js'

import { getAlbums } from '../appService.js'

const AlbumDelegateList = ToList(AlbumDelegate)
const AlbumDelegateListWithLoading = WithLoading(AlbumDelegateList)

const AlbumList = () => {

  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [errored, setErrored] = useState(false)

  const {userId} = useParams()

  const titleText = userId ? `Albums of user ${userId}` : "Albums"

  useEffect(async () => {
    setLoading(true)
    try {
      const result = await getAlbums(userId)
      if (result.status >= 400 && result.status < 600)
        throw new Error()
      const resultJson = await result.json()
      setAlbums(resultJson);
    }
    catch(e) {
      setErrored(true)
    }
    finally {
      setLoading(false)
    }
  }, [userId]);

  return (
    <AlbumDelegateListWithLoading loading={loading} errored={errored} titleText={titleText} items={albums}/>
  );
}

export default AlbumList;
