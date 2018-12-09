import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


class Checkers extends Component {
  constructor(props) {
    super(props);
    const { checkers } = props.data;
    this.state = {
      checkers,
    };
  }

  render() {
    const { checkers } = this.state;
    return (
      <React.Fragment>
        {/* <EventList events={events} /> */}
      </React.Fragment>
    );
  }
}

Checkers.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
};

export default loadModelData(Checkers, 'checkers');
