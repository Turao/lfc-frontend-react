import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import OrganizationPropType from './proptype';


class OrganizationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: props.organization,
    };
  }

  render() {
    const { organization } = this.state;
    return (
      <Card>
        <CardContent>
          <Typography variant="h5">
            { organization.name }
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

OrganizationInfo.propTypes = {
  organization: OrganizationPropType.isRequired,
};

export default OrganizationInfo;
