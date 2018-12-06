import React, { Component } from 'react';
import loadModelData from '../components/ModelLoader';

class Checker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
  };


  render() {
    return (
      <div>
        <h1> {this.state.fullName} </h1>
        <p> {this.state.email} </p>
      </div>
    );
  }
}

export default loadModelData(Checker, 'checker');
