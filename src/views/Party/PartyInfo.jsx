import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import PartyPropType from './proptype';

function PartyInfo({ party }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          { party.abbreviation }
        </Typography>
        <Typography>
          { party.name }
        </Typography>
      </CardContent>
    </Card>
  );
}

PartyInfo.propTypes = {
  party: PartyPropType.isRequired,
};

export default PartyInfo;
