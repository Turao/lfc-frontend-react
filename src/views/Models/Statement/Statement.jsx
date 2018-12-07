import React, { Component } from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

class Statement extends Component {
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
      <div>
        { something }
      </div>
    );
  }
}

Statement.propTypes = {
  data: PropTypes.shape({
    something: PropTypes.string.isRequired,
  }).isRequired,
};

export default loadModelData(Statement, 'statement');
