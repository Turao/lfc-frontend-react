import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <Button component={Link} to="/checkers"> checkers </Button>
        <Button component={Link} to="/events"> events </Button>
        <Button component={Link} to="/factChecks"> factChecks </Button>
        <Button component={Link} to="/moderators"> moderators </Button>
        <Button component={Link} to="/organizations"> organizations </Button>
        <Button component={Link} to="/parties"> parties </Button>
        <Button component={Link} to="/politicians"> politicians </Button>
        <Button component={Link} to="/sources"> sources </Button>
        <Button component={Link} to="/statements"> statements </Button>
        <Button component={Link} to="/users"> users </Button>
      </React.Fragment>
    );
  }
}

export default Home;
