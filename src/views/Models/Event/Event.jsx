import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { List, ListSubheader, Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

import Button from '@material-ui/core/Button';

import NewStatement from '../Statement/NewStatement';
import DataFetcher from '../../../dataFetcher';
import EventPropType from './proptype';


class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      event: null,
    };
  }

  componentDidMount() {
    this.fetchEventData();
  }

  async fetchEventData() {
    const { id } = this.state;
    const event = await DataFetcher.fetchData(`event/${id}`);
    this.setState({ event });
  }

  renderEvent() {
    const { event } = this.state;
    return (
      <Grid>
        <Typography variant="h2">
          { event.name }
        </Typography>
  
        <List subheader={<ListSubheader>Moderators</ListSubheader>}>
          {event.moderators.map(m => (
            <Chip label={m.name} />))}
        </List>
  
      </Grid>
    );
  }

  render() {
    const { event } = this.state;
    return event ? this.renderEvent() : null;
  }
}

Event.propTypes = {
  event: EventPropType,
  // refresh: proptypes.refresh.isRequired,
};

export default Event;
