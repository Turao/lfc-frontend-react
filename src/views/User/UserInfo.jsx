import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

import UserPropType from './proptype';

function UserInfo({ user }) {
  console.log(user);
  return (
    <Card>
      <CardContent>
        <Avatar>
          { user.username[0] }
        </Avatar>
        
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

UserInfo.propTypes = {
  user: UserPropType.isRequired,
};

export default UserInfo;
