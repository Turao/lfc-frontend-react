import React, { Component } from 'react';

import DataFetcher from '../../dataFetcher';
import OrganizationInfo from './OrganizationInfo';


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
    return (
      organizations.map(organization => (
        <OrganizationInfo organization={organization} key={organization.id} />
      ))
    );
  }

  render() {
    const { organizations } = this.state;
    return organizations ? this.renderOrganizations() : null;
  }
}

export default Organizations;
