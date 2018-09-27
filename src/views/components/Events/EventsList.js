import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import SimpleList from '../SimpleList';

const styles = {
};

// let events = [
//   { primary: 'Evento', secondary: 'A' },
//   { primary: 'Evento', secondary: 'B' },
//   { primary: 'Evento', secondary: 'C' },
//   { primary: 'Evento', secondary: 'D' },
//   { primary: 'Evento', secondary: 'E' },
//   { primary: 'Evento', secondary: 'F' },
// ]

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  };

  componentDidMount() {
    this.fetchLatestEvents();
  };

  async fetchLatestEvents() {
    let response = await fetch('http://localhost:3001/api/events/latest', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (response.ok && response.body) {
      let events = await response.json().then(json => json.events);
      events = events.map( event => { return {
        primary: event.name,
        secondary: event.organization.name
      }})

      this.setState({events: events});
    }
  };

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value,
    });
  };

  render() {
    return (
      <SimpleList items={this.state.events}></SimpleList>
    );
  }
}

export default withStyles(styles)(EventList);
