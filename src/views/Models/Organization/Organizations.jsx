import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OrganizationList from './OrganizationList';
import loadModelData from '../ModelLoader';


class Organizations extends Component {
  constructor(props) {
    super(props);
    const { organizations } = props.data;
    this.state = {
      organizations,
    };
  }

  render() {
    const { organizations } = this.state;
    return (
      <React.Fragment>
        <OrganizationList organizations={organizations} />
      </React.Fragment>
    );
  }
}

Organizations.propTypes = {
  data: PropTypes.shape({
    organizations: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default loadModelData(Organizations, 'organizations');
