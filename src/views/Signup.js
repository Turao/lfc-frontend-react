import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid'

import SignupForm from './components/Signup/SignupForm';

const styles = {
};



class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  };

  onSignup() {
    console.log('succesfully signed up');
    this.setState({redirect: true});
  };

  onFailedSignup() {
    console.log('failed to sign up');
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

        <SignupForm
          onSignup={this.onSignup.bind(this)}
          onFailedSignup={this.onFailedSignup.bind(this)}/>

          { this.state.redirect ? <Redirect to='/login'/> : null }

      </Grid>
    );
  }
}

export default withStyles(styles)(Signup);
