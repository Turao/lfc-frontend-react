import React, { Component } from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

class Organization extends Component {
  constructor(props) {
    super(props);
    const { name } = props.data;
    this.state = {
      name,
    };
  }


  render() {
    const { name } = this.state;
    return (
      <h1>
        { name }
      </h1>
    );
  }
}

Organization.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default loadModelData(Organization, 'organization');
