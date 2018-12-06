import React, { Component } from 'react';
import loadModelData from '../components/ModelLoader';

class Statement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
  };


  render() {
    return (
      <div>
        <h1> Full Name: {this.state.fullName} </h1>
        <p> E-mail: {this.state.email} </p>
      </div>
    );
  }
}

export default loadModelData(Statement, 'statement');
