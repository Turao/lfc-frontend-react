import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import MenuAppBar from './components/MenuAppBar';

const styles = {
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div>
        <MenuAppBar title='LFC'></MenuAppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Home)