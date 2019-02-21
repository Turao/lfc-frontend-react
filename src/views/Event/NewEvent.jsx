import React, { Component } from 'react';

import EventForm from './EventForm';


class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToEvent: null,
    };
  }

  onSuccess = (event) => {
    this.setState({ redirectToEvent: event });
  }

  onFailure = (error) => {
    // flash error
    console.error('Unable to create event:', error.message);
  }

  render() {
    const { redirectToEvent } = this.state;
    return (
      redirectToEvent ? null : <EventForm onSuccess={this.onSuccess} onFailure={this.onFailure} />
    );
  }
}

export default NewEvent;
