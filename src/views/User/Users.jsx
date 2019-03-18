import React, { useState, useEffect } from 'react';

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
        <UserInfo user={user} key={user.id} />
      ))}

    </React.Fragment>
  );
}

export default Users;
