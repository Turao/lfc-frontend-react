import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import UserPropType from './proptype';


class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
    };
  }

  render() {
    const { user } = this.state;
    return (
      <Card>
        <CardContent>
          <Typography variant="h5">
            { user.username }
          </Typography>

          <Typography variant="subtitle2">
            { `${user.firstName} ${user.lastName}` }
          </Typography>

          <Typography variant="overline">
            { user.email }
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

UserInfo.propTypes = {
  user: UserPropType.isRequired,
};

export default UserInfo;
