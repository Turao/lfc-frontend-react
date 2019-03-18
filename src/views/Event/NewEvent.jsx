import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import EventForm from './EventForm';

function NewEvent() {
  const [redirect, setRedirect] = useState(null);
  const onSuccess = (event) => { setRedirect(event); };
  const onFailure = (error) => {
    // flash error
    console.error('Unable to create event:', error.message);
  };

  return (
    redirect
      ? <Redirect to={`/event/${redirect.id}`} />
      : <EventForm onSuccess={onSuccess} onFailure={onFailure} />
  );
}

export default NewEvent;
