import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import SimpleList from '../../../components/SimpleList';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null,
    };
  }

  handleClick = (event) => {
    console.log(event);
    this.setState({ redirectTo: event });
  }

  toSimpleListItem(events) {
    return events.map(e => ({
      primary: e.name,
      secondary: e.organizations.map(o => o.name).join(', '),
      // eslint-disable-next-line no-underscore-dangle
      eventId: e._id,
      onClick: this.handleClick,
    }));
  }

  render() {
    const { title } = this.props;
    let { events } = this.props;
    events = this.toSimpleListItem(events);
    const { redirectTo } = this.state;

    return (
      <React.Fragment>
        <SimpleList title={title} items={events} />
        {
          redirectTo
            ? <Redirect to={`/event/${redirectTo.eventId}`} />
            : null
        }
      </React.Fragment>

    );
  }
}

EventList.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventList;
