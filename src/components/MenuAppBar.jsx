import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    this.hasLoggedInStatusChanged();
  }

  hasLoggedInStatusChanged() {
    const { loggedIn } = this.state;
    if (loggedIn !== Boolean(sessionStorage.getItem('logged'))) {
      this.setState({ loggedIn: !loggedIn });
    }
  }

  logout() {
    sessionStorage.removeItem('logged');
    sessionStorage.removeItem('userToken');
    this.setState({ loggedIn: false });
  }

  render() {
    const renderNotLoggedInContent = (
      <div>
        <Button component={Link} to="/login"> Log In </Button>
        <Button component={Link} to="/signup"> Sign Up </Button>
      </div>
    );

    const renderLoggedInContent = (
      <React.Fragment>
        <Button component={Link} to="/events"> Events </Button>
        <Button component={Link} to="/account"> Me </Button>
        <Button component={Link} onClick={this.logout} to="/"> Log Out </Button>
      </React.Fragment>
    );

    const { title } = this.props;
    const { loggedIn } = this.state;
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6">
              <Button component={Link} to="/">
                { title }
              </Button>
            </Typography>

            { loggedIn ? renderLoggedInContent : renderNotLoggedInContent }

          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

MenuAppBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuAppBar;
