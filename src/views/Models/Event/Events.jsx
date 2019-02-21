import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import DataFetcher from '../../../dataFetcher';
import EventList from './EventList';


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
    const latestEvents = await DataFetcher.fetchData('events/latest');
    this.setState({ latestEvents });
  }

  async fetchAllEvents() {
    const allEvents = await DataFetcher.fetchData('events');
    this.setState({ allEvents });
  }

  renderLatestEvents() {
    const { latestEvents } = this.state;
    return (
      <Grid item xs={3}>
        <EventList title="Latest Events" events={latestEvents} />
      </Grid>
    );
  }

  renderAllEvents() {
    const { allEvents } = this.state;
    return (
      <Grid container item xs={4}>
        <EventList title="All Events" events={allEvents} />

        <Fab
          color="primary"
          component={Link}
          to="/events/new"
        >
          <AddIcon />
        </Fab>

      </Grid>
    );
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
