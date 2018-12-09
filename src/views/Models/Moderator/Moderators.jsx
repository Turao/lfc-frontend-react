import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


class Moderators extends Component {
  constructor(props) {
    super(props);
    const { moderators } = props.data;
    this.state = {
      moderators,
    };
  }

  render() {
    const { moderators } = this.state;
    return (
      <React.Fragment>
        {/* <EventList events={events} /> */}
      </React.Fragment>
    );
  }
}

Moderators.propTypes = {
  data: PropTypes.shape({
    // user: PropTypes.object,
  }).isRequired,
};

export default loadModelData(Moderators, 'moderators');
