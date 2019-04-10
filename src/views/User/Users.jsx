import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
} from '@material-ui/core';

import DataFetcher from '../../dataFetcher';
import UserInfo from './UserInfo';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await DataFetcher.get('users');
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const renderUserInfo = user => (
    <ListItem button component={Link} to={`user/${user.id}`}>
      <UserInfo user={user} />
    </ListItem>
  );

  return (
    <List>
      { users.map(user => renderUserInfo(user)) }
    </List>
  );
}

export default Users;
