import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Login from './views/Login'
import Signup from './views/Signup'
import Events from './views/Events'

class App extends Component {
  render() {
    return (
      <div>

        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/events' component={Events}></Route>
      </div>
    );
  }
}

export default App