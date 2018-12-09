import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EventList from './EventList';
import LatestEvents from './LatestEvents';

import loadModelData from '../ModelLoader';

import EventModal from './EventModal';


class Events extends Component {
  constructor(props) {
    super(props);
    const { events } = props.data;
    this.state = {
      events,
    };
  }

  render() {
    const { events } = this.state;
    return (
      <React.Fragment>
        <LatestEvents events={events} />
        <EventList events={events} />
      </React.Fragment>
    );
  }
}

Events.propTypes = {
  data: PropTypes.shape({
    events: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default loadModelData(Events, 'events');
