import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import PartyForm from './PartyForm';

function NewParty() {
  const [redirect, setRedirect] = useState(null);
  const onSuccess = (party) => { setRedirect(party); };
  const onFailure = (error) => {
    // flash error
    console.error('Unable to create party:', error.message);
  };

  return (
    redirect
      ? <Redirect to={`/party/${redirect.id}`} />
      : <PartyForm onSuccess={onSuccess} onFailure={onFailure} />
  );
}

export default NewParty;
