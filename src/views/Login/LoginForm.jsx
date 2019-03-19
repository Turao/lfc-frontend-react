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


function LoginForm({ onSuccess, onFailure }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      user: {
        email,
        password,
      },
    };

    try {
      const response = await DataFetcher.post('login', data);
      const { user, token } = response;
      onSuccess(user, token);
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
          id="email"
          label="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
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

        <Button type="submit"> Login </Button>

      </FormGroup>
    </form>
  );
}

LoginForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default LoginForm;
