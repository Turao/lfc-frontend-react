import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import Event from './Event';
import Card from '@material-ui/core/Card';
import { CardContent, Grid, Typography } from '@material-ui/core';

class LatestEvents extends Component {
  constructor(props) {
    super(props);
    const { events } = props;
    this.state = {
      events: this.toCardMetadata(events),
      redirectTo: null,
    };
  }

  handleClick = (event) => {
    console.log(event);
    this.setState({ redirectTo: event });
  }

  toCardMetadata(events) {
    return events.map(e => ({
      primary: e.name,
      secondary: e.organization.name,
      // eslint-disable-next-line no-underscore-dangle
      eventId: e._id,
      onClick: this.handleClick,
    }));
  }

  render() {
    const { events, redirectTo } = this.state;

    return (
      <Grid container direction="col">

        {events.map(event => (
          <Card onClick={() => event.onClick(event)}>
            <CardContent>
              <Typography variant="h6">
                { event.primary }
              </Typography>

              <Typography variant="caption">
                { event.secondary }
              </Typography>
            </CardContent>
          </Card>
        ))}

        {
          redirectTo
            ? <Redirect to={`/event/${redirectTo.eventId}`} />
            : null
        }
      </Grid>

    );
  }
}

LatestEvents.propTypes = {
  events: PropTypes.arrayOf(Event.proptypes).isRequired,
};

export default LatestEvents;
