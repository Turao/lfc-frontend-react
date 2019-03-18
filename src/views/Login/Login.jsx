import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Normal Login Strategy
import LoginForm from './LoginForm';


function Login() {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    setLogged(sessionStorage.getItem('logged'));
  }, []);

  const onSuccess = (user, token) => {
    console.log('Logged in as', user);

    console.log('user token:', token);
    sessionStorage.setItem('userToken', token);
    sessionStorage.setItem('user.id', user.id);
    sessionStorage.setItem('logged', true);
    setLogged(true);
  };

  const onFailure = (error) => {
    console.error('Failed to log in', error);
  };

  return (
    <React.Fragment>
      <LoginForm
        onSuccess={onSuccess}
        onFailure={onFailure}
      />

      { logged ? <Redirect to="/" /> : null }
    </React.Fragment>
  );
}

export default Login;
