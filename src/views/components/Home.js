import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom'

import MenuAppBar from '../MenuAppBar';
import Login from '../Login'
import Signup from '../Signup'

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
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
      </div>
    );
  }
}

export default withStyles(styles)(Home)