import React, { Component } from 'react';

import DataFetcher from '../../dataFetcher';
import EventInfo from './EventInfo';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: null,
      latestEvents: null,
    };
  }

  componentDidMount() {
    this.fetchLatestEvents();
    this.fetchAllEvents();
  }

  async fetchLatestEvents() {
    const latestEvents = await DataFetcher.getDataFromAPI('events/latest');
    this.setState({ latestEvents });
  }

  async fetchAllEvents() {
    const allEvents = await DataFetcher.getDataFromAPI('events');
    this.setState({ allEvents });
  }

  renderLatestEvents() {
    const { latestEvents } = this.state;
    return latestEvents.map(event => <EventInfo event={event} key={event.id} />);
  }

  renderAllEvents() {
    const { allEvents } = this.state;
    return allEvents.map(event => <EventInfo event={event} key={event.id} />);
  }

  render() {
    const { latestEvents, allEvents } = this.state;
    return (
      <React.Fragment>
        { latestEvents ? this.renderLatestEvents() : null }
        { allEvents ? this.renderAllEvents() : null }
      </React.Fragment>
    );
  }
}

export default Events;
