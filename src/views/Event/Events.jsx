import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import DataFetcher from '../../dataFetcher';
import EventInfo from './EventInfo';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(async () => {
    const data = await DataFetcher.getDataFromAPI('events');
    setEvents(data);
    console.log(data, events);
  }, []);

  return (
    <React.Fragment>
      { events.map(event => <EventInfo event={event} key={event.id} />) }

      <Button href="/event/new">
        <AddIcon />
        Add Event
      </Button>
    </React.Fragment>
  );
}

export default Events;
