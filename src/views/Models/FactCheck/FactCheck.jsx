import React, { Component } from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

class FactCheck extends Component {
  constructor(props) {
    super(props);
    const { something } = props.data;
    this.state = {
      something,
    };
  }


  render() {
    const { something } = this.state;
    return (
      <React.Fragment>
        { something }
      </React.Fragment>
    );
  }
}

FactCheck.propTypes = {
  data: PropTypes.shape({
    something: PropTypes.string.isRequired,
  }).isRequired,
};

export default loadModelData(FactCheck, 'factCheck');
