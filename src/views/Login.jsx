import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Normal Login Strategy
import LoginForm from './components/Login/LoginForm';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: sessionStorage.getItem('logged'),
    };
  }

  onLogin = token => {
    console.log('logged in');

    console.log('user token:', token);
    sessionStorage.setItem('userToken', token);

    sessionStorage.setItem('logged', true);
    this.setState({ logged: true });
  }

  onFailedLogin = () => {
    console.log('failed to log in');
  }

  render() {
    const { logged } = this.state;
    return (
      <div>
        <LoginForm
          onLogin={this.onLogin}
          onFailedLogin={this.onFailedLogin}
        />

        { logged ? <Redirect to="/" /> : null }
      </div>
    );
  }
}

export default Login;
