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
import DataFetcher from '../../dataFetcher';


class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
    };
  }

  handleSubmit = async () => {
    const {
      username, email,
      firstName, lastName,
      password,
    } = this.state;
    const { onSuccess, onFailure } = this.props;

    const data = {
      user: {
        username,
        email,
        password,
        firstName,
        lastName,
      },
    };

    try {
      const response = await DataFetcher.sendDataToAPI('signup', data);
      const { user } = response;
      onSuccess(user);
    } catch (error) {
      onFailure(error);
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
    const {
      username, email,
      firstName, lastName,
      password, showPassword,
    } = this.state;

    return (
      <form noValidate autoComplete="off">
        <FormGroup>

          <TextField
            id="username"
            label="Userame"
            value={username}
            onChange={this.handleChange('username')}
          />

          <TextField
            id="email"
            label="Email"
            // className={classes.textField}
            value={email}
            onChange={this.handleChange('email')}
          />

          <TextField
            id="firstName"
            label="First Name"
            value={firstName}
            onChange={this.handleChange('firstName')}
          />

          <TextField
            id="lastName"
            label="Last Name"
            value={lastName}
            onChange={this.handleChange('lastName')}
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
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default SignupForm;
