import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DataFetcher from '../../dataFetcher';
import UserInfo from './UserInfo';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await DataFetcher.getDataFromAPI('users');
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <React.Fragment>

      {users.map(user => (
        <Link to={`/user/${user.id}`}>
          <UserInfo user={user} key={user.id} />
        </Link>
      ))}

    </React.Fragment>
  );
}

export default Users;
