import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import DataFetcher from '../../dataFetcher';
import EventInfo from './EventInfo';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await DataFetcher.get('events');
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <React.Fragment>
      { events.map(event => (
        <Link to={`/event/${event.id}`} key={event.id}>
          <EventInfo event={event} key={event.id} />
        </Link>
      )) }

      <Button href="/event/new">
        <AddIcon />
        Add Event
      </Button>
    </React.Fragment>
  );
}

export default Events;
