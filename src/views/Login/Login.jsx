import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Normal Login Strategy
import LoginForm from './LoginForm';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: sessionStorage.getItem('logged'),
    };
  }

  onSuccess = (user, token) => {
    console.log('logged in');

    console.log('user token:', token);
    sessionStorage.setItem('userToken', token);
    // eslint-disable-next-line no-underscore-dangle
    sessionStorage.setItem('user.id', user.id);
    sessionStorage.setItem('logged', true);
    this.setState({ logged: true });
  }

  onFailure = () => {
    console.log('failed to log in');
  }

  render() {
    const { logged } = this.state;
    return (
      <React.Fragment>
        <LoginForm
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
        />

        { logged ? <Redirect to="/" /> : null }
      </React.Fragment>
    );
  }
}

export default Login;
