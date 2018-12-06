import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

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


const styles = {
};



class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: '',
      password: '',
    };
  };


  async handleSubmit() {
    console.log('logging in...');
    console.log('email', this.state.email);
    console.log('password', this.state.password);
    
    let data = {
      user: {
        email: this.state.email,
        password: this.state.password,
      },
    };

    let response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      try {
        let token = await response.json().then(json => json.token);
        this.props.onLogin(token);
      } 
      catch (error) {
        this.props.onFailedLogin();
      }
    }
    else {
      this.props.onFailedLogin();
    }

  }

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value,
    });
  };

  handleClickShowPassword() {
    this.setState({showPassword: !this.state.showPassword});
  };

  render() {
    return (
      <form noValidate autoComplete="off">
        <FormGroup>
        
        <TextField
          id="email"
          label="Email"
          // className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
        />
        
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            id="password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password').bind(this)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword.bind(this)}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button onClick={this.handleSubmit.bind(this)}> Login </Button>
        
        </FormGroup>
      </form>
    );

  }
}

export default withStyles(styles)(LoginForm);