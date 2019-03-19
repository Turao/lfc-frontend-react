import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

function Home() {
  return (
    <React.Fragment>
      <Button component={Link} to="/events"> events </Button>
      <Button component={Link} to="/factchecks"> factchecks </Button>
      <Button component={Link} to="/organizations"> organizations </Button>
      <Button component={Link} to="/parties"> parties </Button>
      <Button component={Link} to="/statements"> statements </Button>
      <Button component={Link} to="/users"> users </Button>
    </React.Fragment>
  );
}

export default Home;
