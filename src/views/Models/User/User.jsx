import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

import DataFetcher from '../../../dataFetcher';
import UserPropType from './proptype';
import { CardContent, Typography } from '@material-ui/core';


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
      <Card>
        <CardContent>
          <Typography> { user.username } </Typography>
          <Typography> { user.lastName + ' ' + user.firstName } </Typography>
          <Typography> { user.email } </Typography>
        </CardContent>
      </Card>
    );
  }

  render() {
    const { user } = this.state;
    return user ? this.renderUser() : null;
  }
}

User.propTypes = {
  user: UserPropType,
};

export default User;
