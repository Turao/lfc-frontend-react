import React, { Component } from 'react';

import DataFetcher from '../../dataFetcher';
import OrganizationInfo from './OrganizationInfo';

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      organization: null,
    };
  }

  componentDidMount() {
    this.fetchOrganizationData();
  }

  async fetchOrganizationData() {
    const { id } = this.state;
    const organization = await DataFetcher.fetchData(`organization/${id}`);
    this.setState({ organization });
  }

  renderOrganization() {
    const { organization } = this.state;
    return <OrganizationInfo organization={organization} />;
  }

  render() {
    const { organization } = this.state;
    return organization ? this.renderOrganization() : null;
  }
}

export default Organization;
