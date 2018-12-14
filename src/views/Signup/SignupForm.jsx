import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';

// Email Input
import TextField from '@material-ui/core/TextField';

// Password Input
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Submit Button
import Button from '@material-ui/core/Button';


class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: '',
      password: '',
      name: '',
    };
  }

  handleSubmit = async () => {
    const { name, email, password } = this.state;
    const { onSignup, onFailedSignup } = this.props;

    const data = {
      user: {
        name,
        email,
        password,
      },
    };

    console.log('signing up...', data);

    const response = await fetch('http://localhost:3001/api/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      onSignup();
    } else {
      onFailedSignup();
    }
  }

  handleChange = prop => (event) => {
    this.setState({
      [prop]: event.target.value,
    });
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  }

  render() {
    const { name, email } = this.state;
    const { password, showPassword } = this.state;

    return (
      <form noValidate autoComplete="off">
        <FormGroup>

          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={this.handleChange('name')}
          />

          <TextField
            id="email"
            label="Email"
            // className={classes.textField}
            value={email}
            onChange={this.handleChange('email')}
          />

          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={this.handleChange('password')}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    { showPassword ? <VisibilityOff /> : <Visibility /> }
                  </IconButton>
                </InputAdornment>
              )}
            />
          </FormControl>

          <Button onClick={this.handleSubmit}> Sign Up </Button>

        </FormGroup>
      </form>
    );
  }
}

SignupForm.propTypes = {
  onSignup: PropTypes.func.isRequired,
  onFailedSignup: PropTypes.func.isRequired,
};

export default SignupForm;
