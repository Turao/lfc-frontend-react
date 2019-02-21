import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataFetcher from '../../../dataFetcher';
import UserPropType from './proptype';
import UserInfo from './UserInfo';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      user: null,
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  async fetchUserData() {
    const { id } = this.state;
    const user = await DataFetcher.fetchData(`user/${id}`);
    this.setState({ user });
  }

  renderUser() {
    const { user } = this.state;
    return (
      <UserInfo user={user} />
    );
  }

  render() {
    const { user } = this.state;
    return user ? this.renderUser() : null;
  }
}

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  }),
};

export default User;
