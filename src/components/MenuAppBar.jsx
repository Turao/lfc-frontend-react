import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// app bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// bar content
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function MenuAppBar({ title }) {
  const [logged, setLogged] = useState(false);
  useEffect(() => setLogged(sessionStorage.getItem('logged')),
    [sessionStorage.getItem('logged')]);

  const logout = () => {
    sessionStorage.removeItem('logged');
    sessionStorage.removeItem('userToken');
    setLogged(false);
  };

  const renderNotLoggedInContent = () => (
    <div>
      <Button component={Link} to="/login"> Log In </Button>
      <Button component={Link} to="/signup"> Sign Up </Button>
    </div>
  );

  const renderLoggedInContent = () => (
    <React.Fragment>
      <Button component={Link} to="/events"> Events </Button>
      <Button component={Link} to="/account"> Me </Button>
      <Button component={Link} onClick={logout} to="/"> Log Out </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6">
            <Button component={Link} to="/">
              { title }
            </Button>
          </Typography>

          { logged ? renderLoggedInContent() : renderNotLoggedInContent() }

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

MenuAppBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuAppBar;
