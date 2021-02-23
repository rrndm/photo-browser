import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom'

import Home from './Home.js'
import UserList from './User/UserList.js'
import UserView from './User/UserView.js'
import AlbumList from './Album/AlbumList.js'
import PhotoList from './Photo/PhotoList.js'
import PhotoView from './Photo/PhotoView.js'
import NotFoundView from './NotFoundView.js'


const useStyles = makeStyles((theme) => ({
}));

function Main() {
  const classes = useStyles();

  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users' component={UserList}/>
        <Route exact path='/users/:userId' component={UserView}/>
        <Route exact path='/users/:userId/albums' component={AlbumList}/>
        <Route exact path='/albums' component={AlbumList}/>
        <Route exact path='/albums/:albumId/photos' component={PhotoList}/>
        <Route exact path='/photos' component={PhotoList}/>
        <Route exact path='/photos/:photoId' component={PhotoView}/>
        <Route component={NotFoundView}/>
      </Switch>
    </main>
  );
}

export default Main;
