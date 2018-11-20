import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import EventsList from './components/Events/EventsList';
import MenuAppBar from './components/MenuAppBar';

const styles = {
};



class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div>
        <MenuAppBar/>
        <EventsList></EventsList>
      </div>
    );
  }
}

export default withStyles(styles)(Events);
