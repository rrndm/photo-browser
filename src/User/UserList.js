import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import UserDelegate from './UserDelegate.js'
import ToList from '../ToList.js'

import { getUsers } from '../appService.js'

const UserDelegateList = ToList(UserDelegate)

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: theme.spacing(2)
  }
}));

const UserList = () => {

  const classes = useStyles();

  const [users, setUsers] = useState([])

  useEffect(async () => {
    const result = await getUsers()
    const resultJson = await result.json()

    setUsers(resultJson);
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h4">Users</Typography>
      <div className={classes.spacer}/>
      <UserDelegateList items={users}/>
    </React.Fragment>
  );
}

export default UserList;
