import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


class Statements extends Component {
  constructor(props) {
    super(props);
    const { statements } = props.data;
    this.state = {
      statements,
    };
  }

  render() {
    const { statements } = this.state;
    return (
      <React.Fragment>
        {/* <EventList events={events} /> */}
      </React.Fragment>
    );
  }
}

Statements.propTypes = {
  data: PropTypes.shape({
    // user: PropTypes.object,
  }).isRequired,
};

export default loadModelData(Statements, 'statements');
