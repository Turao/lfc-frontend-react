import React, { useState, useEffect } from 'react';

import DataFetcher from '../../dataFetcher';
import EventInfo from './EventInfo';

function Event(props) {
  const [event, setEvent] = useState([]);

  useEffect(async () => {
    const data = await DataFetcher.getDataFromAPI(`event/${props.match.params.id}`);
    setEvent(data);
  }, []);

  return <EventInfo event={event} />;
}

export default Event;
