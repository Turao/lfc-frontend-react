import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

// Normal Login Strategy
import LoginForm from './components/Login/LoginForm';

const styles = {
};



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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

        <LoginForm></LoginForm>

      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
