import React, { useState, useEffect, useRef } from 'react';
import {useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import PhotoDelegate from './PhotoDelegate.js'
import ToList from '../ToList.js'
import WithLoading from '../WithLoading.js'

import { getPhotos } from '../appService.js'

const useStyles = makeStyles((theme) => ({
  pageFlex: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(2)
  }
}));

const PhotoDelegateList = ToList(PhotoDelegate)
const PhotoDelegateListWithLoading = WithLoading(PhotoDelegateList)

function PhotoList() {

  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  //const [prevY, setPrevY] = useState(0)
  //const [observedNode, setObservedNode] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errored, setErrored] = useState(false)

  const classes = useStyles();

  const {albumId} = useParams()

  const titleText = albumId ? `Photos of album ${albumId}, page ${page}` : `Photos, page ${page}`

  const changePage = (newPage) => {
    if (newPage > 0)
      setPage(newPage)
  }

  useEffect(async () => {
    setLoading(true)
    try {
      const result = await getPhotos(albumId, page)
      if (result.status >= 400 && result.status < 600)
        throw new Error()
      const resultJson = await result.json()
      setPhotos(resultJson);
    }
    catch(e) {
      setErrored(true)
    }
    finally {
      setLoading(false)
    }
  }, [albumId, page]);

  /*useEffect(async () => {
    getAndSetPhotos(currentPage)
  }, [albumId]);

  const observer = useRef(null)

  const handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y
    if (prevY > y) {
      const lastPhoto = photos[photos.length - 1]
      const curPage = lastPhoto.albumId
      getAndSetPhotos(curPage)
      setCurrentPage(curPage)
    }
    setPrevY(y)
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };

  useEffect(() => {
    if (observer.current)
      observer.current.disconnect()
    observer.current = new window.IntersectionObserver(handleObserver,options)
    const { current: currentObserver } = observer
    if (observedNode) currentObserver.observe(observedNode)
    return () => currentObserver.disconnect()
  }, [observedNode])*/

  return (
    <React.Fragment>
      <PhotoDelegateListWithLoading loading={loading} errored={errored} titleText={titleText} items={photos}/>
      <div className={classes.pageFlex}>
        <Button variant="outlined" onClick={() => changePage(page-1)}>Previous</Button>
        <Typography>{page}</Typography>
        <Button variant="outlined" onClick={() => changePage(page+1)}>Next</Button>
      </div>
    </React.Fragment>

  );
}

export default PhotoList;
