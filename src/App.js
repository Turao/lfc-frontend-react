import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import Account from './views/Account'

import Events from './views/Event/Events'
import Event from './views/Event/Event'

import User from './views/User/User'

// debug only
import Checker from './views/Checker/Checker'
import FactCheck from './views/FactCheck/FactCheck'
import Moderator from './views/Moderator/Moderator'
import Organization from './views/Organization/Organization'
import Party from './views/Party/Party'
import Politician from './views/Politician/Politician'
import Source from './views/Source/Source'
import Statement from './views/Statement/Statement'


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}></Route>
        
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
        
        <Route path='/me' component={Account}></Route>
        
        <Route path='/events' component={Events}></Route>
        <Route path='/event/:id' component={Event}></Route>

        <Route path='/user/:id' component={User}></Route>



        {/* debug only */}
        <Route path='/checker/:id' component={Checker}></Route>
        <Route path='/factcheck/:id' component={FactCheck}></Route>
        <Route path='/moderator/:id' component={Moderator}></Route>
        <Route path='/organization/:id' component={Organization}></Route>
        <Route path='/party/:id' component={Party}></Route>
        <Route path='/politician/:id' component={Politician}></Route>
        <Route path='/source/:id' component={Source}></Route>
        <Route path='/statement/:id' component={Statement}></Route>
      </div>
    );
  }
}

export default App