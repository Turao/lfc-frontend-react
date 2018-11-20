import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import Account from './views/Account'
import Events from './views/Events'
import SingleEvent from './views/SingleEvent'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}></Route>
        
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
        
        <Route path='/me' component={Account}></Route>
        
        <Route path='/events' component={Events}></Route>
        <Route path='/event/:id' component={SingleEvent}></Route>
      </div>
    );
  }
}

export default App