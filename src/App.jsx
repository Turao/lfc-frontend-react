import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import { Grid } from '@material-ui/core';
import MenuAppBar from './views/components/MenuAppBar';

import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import Account from './views/Account';

import Events from './views/Models/Event/Events';
import Event from './views/Models/Event/Event';

import User from './views/Models/User/User';

// debug only
import Checker from './views/Models/Checker/Checker';
import Checkers from './views/Models/Checker/Checkers';

import FactCheck from './views/Models/FactCheck/FactCheck';
import FactChecks from './views/Models/FactCheck/FactChecks';

import Moderator from './views/Models/Moderator/Moderator';
import Moderators from './views/Models/Moderator/Moderators';

import Organization from './views/Models/Organization/Organization';
import Organizations from './views/Models/Organization/Organizations';

import Party from './views/Models/Party/Party';
import Parties from './views/Models/Party/Parties';

import Politician from './views/Models/Politician/Politician';
import Politicians from './views/Models/Politician/Politicians';

import Source from './views/Models/Source/Source';
import Sources from './views/Models/Source/Sources';

import Statement from './views/Models/Statement/Statement';
import Statements from './views/Models/Statement/Statements';


const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>

      <MenuAppBar title="LFC" />

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >

        <Route exact path="/" component={Home} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        <Route path="/me" component={Account} />

        <Route path="/events" component={Events} />
        <Route path="/event/:id" component={Event} />

        <Route path="/user/:id" component={User} />


        {/* debug only */}
        <Route path="/checkers/" component={Checkers} />
        <Route path="/checker/:id" component={Checker} />

        <Route path="/factchecks/" component={FactChecks} />
        <Route path="/factcheck/:id" component={FactCheck} />

        <Route path="/moderators/" component={Moderators} />
        <Route path="/moderator/:id" component={Moderator} />

        <Route path="/organizations/" component={Organizations} />
        <Route path="/organization/:id" component={Organization} />

        <Route path="/parties/" component={Parties} />
        <Route path="/party/:id" component={Party} />

        <Route path="/politicians/" component={Politicians} />
        <Route path="/politician/:id" component={Politician} />

        <Route path="/sources/" component={Sources} />
        <Route path="/source/:id" component={Source} />

        <Route path="/statements/" component={Statements} />
        <Route path="/statement/:id" component={Statement} />

      </Grid>

    </MuiThemeProvider>
  );
}

export default App;
