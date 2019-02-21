import React, { Component } from 'react';

import DataFetcher from '../../dataFetcher';
import UserInfo from '../User/UserInfo';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  async fetchUserData() {
    const id = sessionStorage.getItem('user.id');
    const user = await DataFetcher.getDataFromAPI(`user/${id}`);
    this.setState({ user });
  }

  renderAccount() {
    const { user } = this.state;
    return <UserInfo user={user} />;
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        { user ? this.renderAccount() : null }

      </React.Fragment>
    );
  }
}

export default Account;
