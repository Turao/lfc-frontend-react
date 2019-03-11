import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PartyForm from './PartyForm';


class NewParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

  onSuccess = (party) => {
    this.setState({ redirect: party });
  }

  onFailure = (error) => {
    // flash error
    console.error('Unable to create party:', error.message);
  }

  render() {
    const { redirect } = this.state;
    return (
      redirect
        ? <Redirect to={`/party/${redirect.id}`} />
        : <PartyForm onSuccess={this.onSuccess} onFailure={this.onFailure} />
    );
  }
}

export default NewParty;
