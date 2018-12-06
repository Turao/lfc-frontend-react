import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import SimpleList from '../components/SimpleList';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.toSimpleListItem(this.props.events),
      redirectTo: null,
    };
  };

  toSimpleListItem(evts) {
    return evts.map(e => {
      return {
        primary: e.name,
        secondary: e.organization.name,
        eventId: e._id,
        onClick: this.handleClick.bind(this),
      }
    })
  }

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

export default EventList;
