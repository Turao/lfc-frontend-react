import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import SignupForm from './components/Signup/SignupForm';

const styles = {
};



class Signup extends Component {
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

        <SignupForm></SignupForm>

      </Grid>
    );
  }
}

export default withStyles(styles)(Signup);
