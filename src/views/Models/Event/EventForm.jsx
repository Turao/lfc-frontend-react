import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// Name Input
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


// Submit Button
import Button from '@material-ui/core/Button';

import DataFetcher from '../../../dataFetcher';
import ListWithChips from '../../../components/ListWithChips';


class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',

      organizationName: '',
      organizations: [],
      selectedOrganizations: null,

      username: '',
      users: [],
      selectedUsers: null,
    };
  }

  handleChange = prop => (event) => {
    this.setState({
      [prop]: event.target.value,
    });
  }

  update = prop => (value) => {
    this.setState({
      [prop]: value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, selectedOrganizations, selectedUsers } = this.state;
    const { onSuccess, onFailure } = this.props;

    if (!name || name.length === 0 
      || !selectedOrganizations || selectedOrganizations.length === 0
      || !selectedUsers || selectedUsers.length === 0) {
      onFailure();
      return;
    }

    const data = {
      event: {
        name,
        // eslint-disable-next-line no-underscore-dangle
        organizations: selectedOrganizations.map(organization => ({ _id: organization._id })),
        // eslint-disable-next-line no-underscore-dangle
        moderators: selectedUsers.map(user => ({ _id: user._id })),
      },
    };

    console.log('creating event...', data);

    const response = await fetch('http://localhost:3001/api/event/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: sessionStorage.getItem('userToken'),
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      onSuccess();
    } else {
      onFailure();
    }
  }

  searchOrganization = () => {
    const { organizationName } = this.state;
    if (organizationName) {
      this.fetchOrganizations(organizationName);
    } else {
      this.setState({ organizations: [] });
    }
  }

  searchUser = () => {
    const { username } = this.state;
    if (username) {
      this.fetchUsers(username);
    } else {
      this.setState({ users: [] });
    }
  }

  async fetchOrganizations(name) {
    try {
      const { organizations } = await DataFetcher.fetchData('organizations/searchByName', name);
      this.setState({ organizations });
    } catch (err) {
      console.error(err);
    }
  }

  async fetchUsers(name) {
    try {
      const { users } = await DataFetcher.fetchData('users/searchByName', name);
      this.setState({ users });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const {
      name, organizationName, username,
      organizations, users,
    } = this.state;

    const organizationComponents = (
      <Grid>
        <TextField
          id="organization"
          label="Organization Name"
          placeholder="Organization Name"
          value={organizationName}
          onChange={this.handleChange('organizationName')}
        />
        <IconButton onClick={this.searchOrganization}>
          <SearchIcon />
        </IconButton>
        <ListWithChips
          items={organizations}
          itemLabel="name"
          onChange={this.update('selectedOrganizations')}
        />
      </Grid>
    );

    const userComponents = (
      <Grid>
        <TextField
          id="user"
          label="Username"
          placeholder="Username"
          value={username}
          onChange={this.handleChange('username')}
        />
        <IconButton onClick={this.searchUser}>
          <SearchIcon />
        </IconButton>
        <ListWithChips
          items={users}
          itemLabel="name"
          onChange={this.update('selectedUsers')}
        />
      </Grid>
    );

    return (
      <form>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <TextField
            id="name"
            label="Event Name"
            placeholder="Event Name"
            value={name}
            onChange={this.handleChange('name')}
          />

          { organizationComponents }
          { userComponents }

          <Button onClick={this.handleSubmit}> Create Event </Button>
        </Grid>
      </form>
    );
  }
}

export default EventForm;
