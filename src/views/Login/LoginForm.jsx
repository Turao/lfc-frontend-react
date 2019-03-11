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


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: '',
      password: '',
    };
  }


  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const { onSuccess, onFailure } = this.props;

    const data = {
      user: {
        email,
        password,
      },
    };

    try {
      const response = await DataFetcher.sendDataToAPI('login', data);
      const { user, token } = response;
      onSuccess(user, token);
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
    const { email, password, showPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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

          <Button type="submit"> Login </Button>

        </FormGroup>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default LoginForm;
