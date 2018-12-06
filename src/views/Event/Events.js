import React, { Component } from 'react';

import EventList from './EventList';
import loadModelData from '../components/ModelLoader';



class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
  };

  render() {
    return (
      <div>
        <EventList events={this.state.events}></EventList>
      </div>
    );
  }
}

export default loadModelData(Events, 'events');
