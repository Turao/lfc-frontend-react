import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function Event(props) {
  const { data: event } = props;
  const { name, organization } = event;
  return (
    <React.Fragment>
      <h1>
        { name }
      </h1>
      { organization.name }
    </React.Fragment>
  );
}

Event.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    organization: PropTypes.object.isRequired,
  }).isRequired,
};

export default loadModelData(Event, 'event');
