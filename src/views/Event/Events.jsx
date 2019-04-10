import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  List,
  ListItem,
} from '@material-ui/core';

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

  const renderEventInfo = event => (
    <ListItem button component={Link} to={`event/${event.id}`}>
      <EventInfo event={event} />
    </ListItem>
  );

  return (
    <React.Fragment>
      <Button href="/event/new" variant="text">
        <AddIcon />
        Add Event
      </Button>

      <List>
        { events.map(event => renderEventInfo(event)) }
      </List>

    </React.Fragment>
  );
}

export default Events;
