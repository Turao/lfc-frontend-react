import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import EventsList from './components/Events/EventsList';

const styles = {
};



class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value,
    });
  };

  render() {
    return (
      <EventsList></EventsList>
    );
  }
}

export default withStyles(styles)(Events);
