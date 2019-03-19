import React, { useState, useEffect } from 'react';

import DataFetcher from '../../dataFetcher';
import EventInfo from './EventInfo';

function Event(props) {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const data = await DataFetcher.get(`event/${props.match.params.id}`);
      setEvent(data);
    };

    fetchEvent();
  }, []);

  return event ? <EventInfo event={event} /> : null;
}

export default Event;
