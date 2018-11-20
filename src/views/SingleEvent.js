import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import MenuAppBar from './components/MenuAppBar';

const styles = {
};



class SingleEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: props.match.params.id,
    };
  };


  componentDidMount() {
    this.fetchEvent();
  };

  async fetchEvent() {
    let response = await fetch('http://localhost:3001/api/events/'+this.state.eventId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (response.ok && response.body) {
      let evt = await response.json().then(json => json.events);
      this.setState({content: evt});
    }
  };

  render() {
    return (
      <div>
        <MenuAppBar/>
      </div>
    );
  }
}

export default withStyles(styles)(SingleEvent);
