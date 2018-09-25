import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// debug toggler
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

// app bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// bar content
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import Button from '@material-ui/core/Button';



const styles = {
};

class MenuAppBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      auth: false,
      drawerOpen: false,
    };
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  
  toggleDrawer = open => () => {
    this.setState({
      drawerOpen: open,
    });
  };


  render() {

    const drawerList = (
      null
    );

    const drawer = (
      <Drawer 
        open={this.state.drawerOpen} 
        onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyLeft={this.toggleDrawer(false)}
            onKeyRight={this.toggleDrawer(true)} >
              { drawerList }
          </div>
      </Drawer>
    );

    const renderLoginSignup = (
      <div>
        <Button component={Link} to='/login'> Log In </Button>
        <Button component={Link} to='/signup'> Sign Up </Button>
      </div>
    );

    const debugToggler = (
      <FormGroup>
        <FormControlLabel control={
            <Switch checked={this.state.auth} onChange={this.handleChange}/>
          }
          label={this.state.auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
    );

    return (
      <div>
        { debugToggler }
        



        <AppBar position="static">
          <Toolbar>
            
            <IconButton onClick={this.toggleDrawer(true)}>
              <MenuIcon/>
            </IconButton>
            { drawer }
            
            <Typography 
              variant="title">
              { this.props.title }
            </Typography>
            
            {this.state.auth ? null : renderLoginSignup }

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);