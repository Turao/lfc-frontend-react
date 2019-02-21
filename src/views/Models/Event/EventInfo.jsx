import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import EventPropType from './proptype';


class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: props.event,
    };
  }

  render() {
    const { event } = this.state;
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
}

EventInfo.propTypes = {
  event: EventPropType.isRequired,
};

export default EventInfo;
