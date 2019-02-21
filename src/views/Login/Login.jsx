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

  onLogin = (token, user) => {
    console.log('logged in');

    console.log('user token:', token);
    sessionStorage.setItem('userToken', token);
    // eslint-disable-next-line no-underscore-dangle
    sessionStorage.setItem('user.id', user._id);
    sessionStorage.setItem('logged', true);
    this.setState({ logged: true });
  }

  onFailedLogin = () => {
    console.log('failed to log in');
  }

  render() {
    const { logged } = this.state;
    return (
      <React.Fragment>
        <LoginForm
          onLogin={this.onLogin}
          onFailedLogin={this.onFailedLogin}
        />

        { logged ? <Redirect to="/" /> : null }
      </React.Fragment>
    );
  }
}

export default Login;
