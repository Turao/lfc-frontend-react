import React, { useState, useEffect } from 'react';

import DataFetcher from '../../dataFetcher';
import UserInfo from '../User/UserInfo';

function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const id = sessionStorage.getItem('user.id');
      const data = await DataFetcher.getDataFromAPI(`user/${id}`);
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <React.Fragment>
      { user ? <UserInfo user={user} /> : null }
    </React.Fragment>
  );
}

export default Account;
