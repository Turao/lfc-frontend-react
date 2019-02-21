import React, { Component } from 'react';

import DataFetcher from '../../dataFetcher';
import EventInfo from './EventInfo';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      event: null,
    };
  }

  componentDidMount() {
    this.fetchEventData();
  }

  async fetchEventData() {
    const { id } = this.state;
    const event = await DataFetcher.getDataFromAPI(`event/${id}`);
    this.setState({ event });
  }

  renderEvent() {
    const { event } = this.state;
    return <EventInfo event={event} />;
  }

  render() {
    const { event } = this.state;
    return event ? this.renderEvent() : null;
  }
}

export default Event;
