import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


class Politicians extends Component {
  constructor(props) {
    super(props);
    const { politicians } = props.data;
    this.state = {
      politicians,
    };
  }

  render() {
    const { politicians } = this.state;
    return (
      <React.Fragment>
        {/* <EventList events={events} /> */}
      </React.Fragment>
    );
  }
}

Politicians.propTypes = {
  data: PropTypes.shape({
    // user: PropTypes.object,
  }).isRequired,
};

export default loadModelData(Politicians, 'politicians');
