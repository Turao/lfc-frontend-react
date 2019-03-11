import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import OrganizationForm from './OrganizationForm';


class NewOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

  onSuccess = (organization) => {
    this.setState({ redirect: organization });
  }

  onFailure = (error) => {
    // flash error
    console.error('Unable to create organization:', error.message);
  }

  render() {
    const { redirect } = this.state;
    return (
      redirect
        ? <Redirect to={`/organization/${redirect.id}`} />
        : <OrganizationForm onSuccess={this.onSuccess} onFailure={this.onFailure} />
    );
  }
}

export default NewOrganization;
