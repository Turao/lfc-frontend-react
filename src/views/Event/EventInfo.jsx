import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import EventPropType from './proptype';

function EventInfo({ event }) {
  console.log(event);
  return (
    <Grid container direction="column" justify="center">

      <Typography variant="h3">
        { event.name }
      </Typography>

      <Typography variant="caption">
        { Date(event.date) }
      </Typography>

      <Typography variant="h5">
        { event.organization.name }
      </Typography>

      <Typography variant="caption">
        { `${event.moderators.length} moderators`}
      </Typography>

      <Typography variant="caption">
        { `${event.statements.length} statements` }
      </Typography>

    </Grid>
  );
}

EventInfo.propTypes = {
  event: EventPropType.isRequired,
};

export default EventInfo;
