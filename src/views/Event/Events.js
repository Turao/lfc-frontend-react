import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import EventList from './EventList';
import MenuAppBar from '../components/MenuAppBar';

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
        <EventList></EventList>
      </div>
    );
  }
}

export default withStyles(styles)(Events);
