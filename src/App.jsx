import React from 'react';
import { Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import { Grid } from '@material-ui/core';
import MenuAppBar from './components/MenuAppBar';

import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Account from './views/Account/Account';

import Events from './views/Models/Event/Events';
import Event from './views/Models/Event/Event';
import NewEvent from './views/Models/Event/NewEvent';

import User from './views/Models/User/User';
import Users from './views/Models/User/Users';

// debug only

import FactCheck from './views/Models/FactCheck/FactCheck';
import FactChecks from './views/Models/FactCheck/FactChecks';

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

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Route exact path="/me" component={Account} />

        <Route exact path="/events" component={Events} />
        <Route exact path="/events/new" component={NewEvent} />
        <Route exact path="/event/:id" component={Event} />

        <Route exact path="/user/:id" component={User} />
        <Route exact path="/users/" component={Users} />


        {/* debug only */}
        <Route exact path="/factchecks/" component={FactChecks} />
        <Route exact path="/factcheck/:id" component={FactCheck} />

        <Route exact path="/organizations/" component={Organizations} />
        <Route exact path="/organization/:id" component={Organization} />

        <Route exact path="/parties/" component={Parties} />
        <Route exact path="/party/:id" component={Party} />

        <Route exact path="/politicians/" component={Politicians} />
        <Route exact path="/politician/:id" component={Politician} />

        <Route exact path="/sources/" component={Sources} />
        <Route exact path="/source/:id" component={Source} />

        <Route exact path="/statements/" component={Statements} />
        <Route exact path="/statement/:id" component={Statement} />

      </Grid>

    </MuiThemeProvider>
  );
}

export default App;
