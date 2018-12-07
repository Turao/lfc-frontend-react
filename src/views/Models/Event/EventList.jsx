import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import Event from './Event';
import SimpleList from '../../components/SimpleList';

class EventList extends Component {
  constructor(props) {
    super(props);
    const { events } = props;
    this.state = {
      events: this.toSimpleListItem(events),
      redirectTo: null,
    };
  }

  toSimpleListItem(evts) {
    return evts.map(e => ({
      primary: e.name,
      secondary: e.organization.name,
      // eslint-disable-next-line no-underscore-dangle
      eventId: e._id,
      onClick: this.handleClick,
    }));
  }

  handleClick = event => {
    console.log(event);
    this.setState({ redirectTo: event });
  }

  render() {
    const { events, redirectTo } = this.state;

    return (
      <div>
        <SimpleList items={events} />
        {
          redirectTo
            ? <Redirect to={`/event/${redirectTo.eventId}`} />
            : null
        }
      </div>

    );
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(Event.proptypes).isRequired,
};

export default EventList;
