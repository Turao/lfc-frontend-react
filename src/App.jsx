import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import MenuAppBar from './views/components/MenuAppBar';
import { Grid } from '@material-ui/core';

import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import Account from './views/Account'

import Events from './views/Models/Event/Events'
import Event from './views/Models/Event/Event'

import User from './views/Models/User/User'

// debug only
import Checker from './views/Models/Checker/Checker'
import FactCheck from './views/Models/FactCheck/FactCheck'
import Moderator from './views/Models/Moderator/Moderator'

import Organization from './views/Models/Organization/Organization'
import Organizations from './views/Models/Organization/Organizations'

import Party from './views/Models/Party/Party'
import Politician from './views/Models/Politician/Politician'
import Source from './views/Models/Source/Source'
import Statement from './views/Models/Statement/Statement'



const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>

        <MenuAppBar title="LFC"/>

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >

          <Route exact path='/' component={Home}/>
          
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          
          <Route path='/me' component={Account}/>
          
          <Route path='/events' component={Events}/>
          <Route path='/event/:id' component={Event}/>

          <Route path='/user/:id' component={User}/>


          {/* debug only */}
          <Route path='/checker/:id' component={Checker}/>
          <Route path='/factcheck/:id' component={FactCheck}/>
          <Route path='/moderator/:id' component={Moderator}/>

          <Route path='/organization/:id' component={Organization}/>
          <Route path='/organizations/' component={Organizations}/>

          <Route path='/party/:id' component={Party}/>
          <Route path='/politician/:id' component={Politician}/>
          <Route path='/source/:id' component={Source}/>
          <Route path='/statement/:id' component={Statement}/>
        
        </Grid>

      </MuiThemeProvider>
    );
  }
}

export default App