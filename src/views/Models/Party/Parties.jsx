import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


class Parties extends Component {
  constructor(props) {
    super(props);
    const { parties } = props.data;
    this.state = {
      parties,
    };
  }

  render() {
    const { parties } = this.state;
    return (
      <React.Fragment>
        {/* <EventList events={events} /> */}
      </React.Fragment>
    );
  }
}

Parties.propTypes = {
  data: PropTypes.shape({
    // user: PropTypes.object,
  }).isRequired,
};

export default loadModelData(Parties, 'parties');
