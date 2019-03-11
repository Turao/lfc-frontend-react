import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import SignupForm from './SignupForm';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  onSuccess = () => {
    console.log('succesfully signed up');
    this.setState({ redirect: true });
  }

  onFailure = () => {
    console.log('failed to sign up');
  }

  render() {
    const { redirect } = this.state;
    return (
      <React.Fragment>
        <SignupForm
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
        />

        { redirect ? <Redirect to="/login" /> : null }
      </React.Fragment>
    );
  }
}

export default Signup;
