import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import UserDelegate from './UserDelegate.js'
import ToList from '../ToList.js'
import WithLoading from '../WithLoading.js'

import { getUsers } from '../appService.js'

const UserDelegateList = ToList(UserDelegate)
const UserDelegateListWithLoading = WithLoading(UserDelegateList)

const UserList = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [errored, setErrored] = useState(false)

  const titleText="Users"

  useEffect(async () => {
    setLoading(true)
    try {
      const result = await getUsers()
      if (result.status >= 400 && result.status < 600)
        throw new Error()
      const resultJson = await result.json()
      setUsers(resultJson);
    }
    catch(e) {
      setErrored(true)
    }
    finally {
      setLoading(false)
    }
  }, []);

  return (
    <UserDelegateListWithLoading loading={loading} errored={errored} titleText={titleText} items={users}/>
  );
}

export default UserList;
