import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import MenuAppBar from './components/MenuAppBar';

const styles = {
};



class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div>
        <MenuAppBar/>
      </div>
    );
  }
}

export default withStyles(styles)(Account);
