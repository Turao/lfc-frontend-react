import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataFetcher from '../../../dataFetcher';
import OrganizationPropType from './proptype';


class Organizations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizations: null,
    };
  }

  componentDidMount() {
    this.fetchOrganizationsData();
  }

  async fetchOrganizationsData() {
    const organizations = await DataFetcher.fetchData('organizations');
    this.setState({ organizations });
  }

  renderOrganizations() {
    const { organizations } = this.state;
    return null;
  }

  render() {
    const { organizations } = this.state;
    return organizations ? this.renderOrganizations() : null;
  }
}

Organizations.propTypes = {
  organizations: PropTypes.arrayOf(OrganizationPropType),
};

export default Organizations;
