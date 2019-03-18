import React, { useState } from 'react';
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


function SignupForm({ onSuccess, onFailure }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

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
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>

        <TextField
          id="username"
          label="Userame"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />

        <TextField
          id="email"
          label="Email"
          // className={classes.textField}
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <TextField
          id="firstName"
          label="First Name"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />

        <TextField
          id="lastName"
          label="Last Name"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />

        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={event => setPassword(event.target.value)}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={toggleShowPassword}
                >
                  { showPassword ? <VisibilityOff /> : <Visibility /> }
                </IconButton>
              </InputAdornment>
            )}
          />
        </FormControl>

        <Button type="submit"> Sign Up </Button>

      </FormGroup>
    </form>
  );
}

SignupForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default SignupForm;
