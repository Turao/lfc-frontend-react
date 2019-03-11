import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import EventForm from './EventForm';


class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

  onSuccess = (event) => {
    this.setState({ redirect: event });
  }

  onFailure = (error) => {
    // flash error
    console.error('Unable to create event:', error.message);
  }

  render() {
    const { redirect } = this.state;
    return (
      redirect
        ? <Redirect to={`/event/${redirect.id}`} />
        : <EventForm onSuccess={this.onSuccess} onFailure={this.onFailure} />
    );
  }
}

export default NewEvent;
