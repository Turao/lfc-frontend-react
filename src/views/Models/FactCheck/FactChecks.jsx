import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


class FactChecks extends Component {
  constructor(props) {
    super(props);
    const { factChecks } = props.data;
    this.state = {
      factChecks,
    };
  }

  render() {
    const { factChecks } = this.state;
    return (
      <React.Fragment>
        {/* <EventList events={events} /> */}
      </React.Fragment>
    );
  }
}

FactChecks.propTypes = {
  data: PropTypes.shape({
    // user: PropTypes.object,
  }).isRequired,
};

export default loadModelData(FactChecks, 'factChecks');
