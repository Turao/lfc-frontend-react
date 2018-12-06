import React, { Component } from 'react';
import loadModelData from '../components/ModelLoader';

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
  };


  render() {
    return (
      <div>
        <h1> { this.state.name } </h1>
      </div>
    );
  }
}

export default loadModelData(Organization, 'organization');
