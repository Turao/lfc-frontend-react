import React from 'react';
import PropTypes from 'prop-types';

import EventList from './EventList';
import LatestEvents from './LatestEvents';

import loadModelData from '../ModelLoader';

import EventModal from './EventModal';


function Events(props) {
  const { data: events } = props;
  const { refresh } = props;
  return (
    <React.Fragment>
      <LatestEvents events={events} />
      <EventModal refresh={refresh} />
      <EventList events={events} />
    </React.Fragment>
  );
}

Events.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  refresh: PropTypes.func.isRequired,
};

export default loadModelData(Events, 'events');
