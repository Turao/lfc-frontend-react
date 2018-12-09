import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import SignupForm from './components/Signup/SignupForm';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  onSignup = () => {
    console.log('succesfully signed up');
    this.setState({ redirect: true });
  }

  onFailedSignup = () => {
    console.log('failed to sign up');
  }

  render() {
    const { redirect } = this.state;
    return (
      <React.Fragment>
        <SignupForm
          onSignup={this.onSignup}
          onFailedSignup={this.onFailedSignup}
        />

        { redirect ? <Redirect to="/login" /> : null }
      </React.Fragment>
    );
  }
}

export default Signup;
