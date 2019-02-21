import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataFetcher from '../../../dataFetcher';
import UserPropType from './proptype';


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

  async fetchUserskData() {
    const users = await DataFetcher.fetchData('users');
    this.setState({ users });
  }

  renderUsers() {
    const { users } = this.state;
    return null;
  }

  render() {
    const { users } = this.state;
    return users ? this.renderUsers() : null;
  }
}

Users.propTypes = {
  users: PropTypes.arrayOf(UserPropType),
};

export default Users;
