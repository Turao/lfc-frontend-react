import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


class Sources extends Component {
  constructor(props) {
    super(props);
    const { sources } = props.data;
    this.state = {
      sources,
    };
  }

  render() {
    const { sources } = this.state;
    return (
      <React.Fragment>
        {/* <EventList events={events} /> */}
      </React.Fragment>
    );
  }
}

Sources.propTypes = {
  data: PropTypes.shape({
    // user: PropTypes.object,
  }).isRequired,
};

export default loadModelData(Sources, 'source');
