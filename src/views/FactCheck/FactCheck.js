import React, { Component } from 'react';
import loadModelData from '../components/ModelLoader';

class FactCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
  };


  render() {
    return (
      <div>
      </div>
    );
  }
}

export default loadModelData(FactCheck, 'factCheck');
