import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import { Paper, Avatar, Typography } from '@material-ui/core';

import DataFetcher from '../../dataFetcher';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  async fetchUserData() {
    const id = sessionStorage.getItem('user.id');
    const { user } = await DataFetcher.fetchData('user', id);
    this.setState({ user });
  }

  renderAccount() {
    const { user } = this.state;

    const userInfo = (
      <Paper>
        <Avatar>{user.name[0]}</Avatar>
        <Typography color="textPrimary" variant="title">
          { user.username }
        </Typography>
        <Typography color="textSecondary" variant="subtitle1">
          { user.email }
        </Typography>
        <Typography color="textSecondary" variant="caption">
          { user.id }
        </Typography>
      </Paper>
    );

    return (
      <Grid>
        <Grid>
          { userInfo }
        </Grid>

        <Grid>
          ahoy
        </Grid>
      </Grid>
    );
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        { user ? this.renderAccount() : null }

      </React.Fragment>
    );
  }
}

export default Account;
