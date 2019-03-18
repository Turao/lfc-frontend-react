import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import EventPropType from './proptype';

function EventInfo(props) {
  const { event } = props;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          { event.name }
        </Typography>
      </CardContent>
    </Card>
  );
}

EventInfo.propTypes = {
  event: EventPropType.isRequired,
};

export default EventInfo;
