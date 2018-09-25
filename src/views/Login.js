import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid'

// Normal Login Strategy
import LoginForm from './components/Login/LoginForm';

const styles = {
};



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: sessionStorage.getItem('logged'),
    };
  };

  onLogin = token => {
    console.log('logged in');

    console.log('user token:', token);
    localStorage.setItem('userToken', token);

    sessionStorage.setItem('logged', true);
    this.setState({logged: true});
  };

  onFailedLogin() {
    console.log('failed to log in');
  };


  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value,
    });
  };

  render() {
    return (
      <Grid 
        container 
        direction='column'
        alignContent='center'
        alignItems='center'>

        <LoginForm 
          onLogin={this.onLogin.bind(this)}
          onFailedLogin={this.onFailedLogin.bind(this)}/>


        { this.state.logged ? <Redirect to='/me'/> : null }
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
