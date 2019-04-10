import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

import OrganizationPropType from './proptype';


function OrganizationInfo({ organization }) {
  console.log(organization);
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

OrganizationInfo.propTypes = {
  organization: OrganizationPropType.isRequired,
};

export default OrganizationInfo;
