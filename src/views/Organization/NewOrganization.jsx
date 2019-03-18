import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import OrganizationForm from './OrganizationForm';

function NewOrganization() {
  const [redirect, setRedirect] = useState(null);
  const onSuccess = (organization) => { setRedirect(organization); };
  const onFailure = (error) => {
    // flash error
    console.error('Unable to create organization:', error.message);
  };

  return (
    redirect
      ? <Redirect to={`/organization/${redirect.id}`} />
      : <OrganizationForm onSuccess={onSuccess} onFailure={onFailure} />
  );
}

export default NewOrganization;
