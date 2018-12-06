import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

import SimpleList from '../components/SimpleList';

const styles = {
};

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      redirectTo: null,
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
        secondary: event.organization.name,
        eventId: event._id,
        onClick: this.handleClick.bind(this),
      }})

      this.setState({events: events});
    }
  };

  handleClick(evt) {
    console.log(evt);
    this.setState({redirectTo: evt});
  };

  render() {
    return (
      <div>
        <SimpleList items={this.state.events}></SimpleList>
        { 
          this.state.redirectTo ? 
            <Redirect to={'/event/' + this.state.redirectTo.eventId}/> 
            : null 
        }
      </div>

    );
  }
}

export default withStyles(styles)(EventList);
