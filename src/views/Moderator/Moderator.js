import React, { Component } from 'react';
import loadModelData from '../components/ModelLoader';

class Moderator extends Component {
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

export default loadModelData(Moderator, 'moderator');
