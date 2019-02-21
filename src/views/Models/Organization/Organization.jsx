import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataFetcher from '../../../dataFetcher';
import OrganizationPropType from './proptype';


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
    return null;
  }

  render() {
    const { organization } = this.state;
    return organization ? this.renderOrganization() : null;
  }
}

Organization.propTypes = {
  organization: OrganizationPropType,
};

export default Organization;
