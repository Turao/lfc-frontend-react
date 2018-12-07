import React, { Component } from 'react';

import EventList from './EventList';
import loadModelData from '../ModelLoader';

import EventModal from './EventModal'


class Events extends Component {
  constructor(props) {
    super(props);
    const { events } = props.data;
    this.state = {
      events,
    };
  };

  render() {
    const { events } = this.state;
    return (
      <div>
        <EventModal/>
        <EventList events={events}/>
      </div>
    );
  }
}


export default loadModelData(Events, 'events');
