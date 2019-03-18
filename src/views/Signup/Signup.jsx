import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import SignupForm from './SignupForm';

function Signup() {
  const [redirect, setRedirect] = useState(false);
  const onSuccess = () => {
    console.log('Succesfully signed up.');
    setRedirect(true);
  };

  const onFailure = (error) => {
    console.log('Failed to sign up.', error);
  };

  return (
    <React.Fragment>
      <SignupForm
        onSuccess={onSuccess}
        onFailure={onFailure}
      />

      { redirect ? <Redirect to="/login" /> : null }
    </React.Fragment>
  );
}

export default Signup;
