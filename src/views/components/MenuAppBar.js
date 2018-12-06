import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// app bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// bar content
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



class MenuAppBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loggedIn: sessionStorage.getItem('logged'),
    };

  }


  componentDidUpdate() {
    this.hasLoggedInStatusChanged()
  }

  hasLoggedInStatusChanged() {
    if(this.state.loggedIn !== Boolean(sessionStorage.getItem('logged'))) {
      this.setState({loggedIn: !this.state.loggedIn})
    }
  }

  logout = () => {
    sessionStorage.removeItem('logged');
    sessionStorage.removeItem('userToken');
    this.setState({'loggedIn': false});
  }
  
  render() {

    const renderNotLoggedInContent = (
      <div>
        <Button component={Link} to='/login'> Log In </Button>
        <Button component={Link} to='/signup'> Sign Up </Button>
      </div>
    );

    const renderLoggedInContent = (
      <div>
        <Button component={Link} to='/events'> Events </Button>
        <Button component={Link} to='/account'> Me </Button>
        <Button component={Link} onClick={this.logout} to='/'> Log Out </Button>
      </div>
    );

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
             
            <Typography 
              variant="title">
              { this.props.title }
            </Typography>
            
            { this.state.loggedIn ? renderLoggedInContent : renderNotLoggedInContent }

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default MenuAppBar;