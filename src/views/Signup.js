import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import SignupForm from './components/Signup/SignupForm';


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

  render() {
    return (
      <div>
        <SignupForm
          onSignup={this.onSignup.bind(this)}
          onFailedSignup={this.onFailedSignup.bind(this)}/>

          { this.state.redirect ? <Redirect to='/login'/> : null }
      </div>
    );
  }
}

export default Signup;
