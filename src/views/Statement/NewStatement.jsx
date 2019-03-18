import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import StatementForm from './StatementForm';

function NewStatement() {
  const [redirect, setRedirect] = useState(null);
  const onSuccess = (statement) => { setRedirect(statement); };
  const onFailure = (error) => {
    // flash error
    console.error('Unable to create statement:', error.message);
  };

  return (
    redirect
      ? <Redirect to={`/statement/${redirect.id}`} />
      : <StatementForm onSuccess={onSuccess} onFailure={onFailure} />
  );
}

export default NewStatement;
