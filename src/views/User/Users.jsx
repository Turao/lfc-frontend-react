import React, { Component } from 'react';

import DataFetcher from '../../dataFetcher';
import UserInfo from './UserInfo';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    this.fetchUsersData();
  }

  async fetchUsersData() {
    const users = await DataFetcher.fetchData('users');
    this.setState({ users });
  }

  renderUsers() {
    const { users } = this.state;
    return (
      <React.Fragment>
        {
          users.map(user => <UserInfo user={user} key={user.id} />)
        }
      </React.Fragment>
    );
  }

  render() {
    const { users } = this.state;
    return users ? this.renderUsers() : null;
  }
}

export default Users;
