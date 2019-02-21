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


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: '',
      password: '',
    };
  }


  handleSubmit = async () => {
    const { email, password } = this.state;
    const { onLogin, onFailedLogin } = this.props;
    console.log(onLogin, onFailedLogin);

    console.log('logging in...');
    console.log('email', email);
    console.log('password', password);

    const data = {
      user: {
        email,
        password,
      },
    };

    const response = await fetch('http://api.localhost:3001/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      try {
        const { token, user } = await response.json();
        onLogin(token, user);
      } catch (error) {
        onFailedLogin();
      }
    } else {
      onFailedLogin();
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
    const { email, password, showPassword } = this.state;

    return (
      <form noValidate autoComplete="off">
        <FormGroup>

          <TextField
            id="email"
            label="Email"
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

          <Button onClick={this.handleSubmit}> Login </Button>

        </FormGroup>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onFailedLogin: PropTypes.func.isRequired,
};

export default LoginForm;
