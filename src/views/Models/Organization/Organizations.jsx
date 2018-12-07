import React, { Component } from 'react';

import OrganizationList from './OrganizationList';
import loadModelData from '../ModelLoader';


class Organizations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
  };

  render() {
    return (
      <div>
        <OrganizationList organizations={this.state.organizations}/>
      </div>
    );
  }
}

export default loadModelData(Organizations, 'organizations');
