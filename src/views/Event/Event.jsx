import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
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


  const [redirectToEvents, setRedirectToEvents] = useState(false);
  const deleteEvent = async () => {
    DataFetcher.del(`event/${props.match.params.id}`);
    setEvent(null);
    setRedirectToEvents(true);
  };

  if (redirectToEvents) {
    return <Redirect to="/events/" />;
  }

  if (event) {
    return (
      <React.Fragment>
        <EventInfo event={event} />
        <Button onClick={deleteEvent}> Delete Event </Button>
      </React.Fragment>
    );
  }

  return null;
}

export default Event;
