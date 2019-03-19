import React, { useState, useEffect } from 'react';

import DataFetcher from '../../dataFetcher';
import UserInfo from './UserInfo';

function User(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await DataFetcher.getDataFromAPI(`user/${props.match.params.id}`);
      setUser(data);
    };

    fetchUser();
  }, []);

  return user ? <UserInfo user={user} /> : null;
}

export default User;
