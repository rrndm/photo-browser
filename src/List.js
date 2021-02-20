import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { getUsers, getAlbums, getPhotos } from './appService.js'
import User from './User.js'

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: theme.spacing(3)
  }
}));

function List() {
  const [users, setUsers] = useState([])
  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])

  const classes = useStyles();

  if (users.length === 0) {
    getUsers()
    .then((res) => res.json())
    .then((jsonRes) => setUsers(jsonRes))
 }

  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid item key={user} xs={12} sm={6} md={3}>
          <User {...user}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default List;
