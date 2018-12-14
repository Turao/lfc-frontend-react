import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';

// Name Input
import TextField from '@material-ui/core/TextField';

// Organization and User selection
import {
  RadioGroup, FormControlLabel, Radio,
  List, ListItem, ListItemText, Chip,
} from '@material-ui/core';

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

  searchOrganization = (event) => {
    this.handleChange('organizationName')(event);
    // avoid to get value from state, since state is asynchronous
    const organizationName = event.target.value;
    if (organizationName) {
      this.fetchOrganizations(organizationName);
    } else {
      this.setState({ organizations: [] });
    }
  }

  searchUser = (event) => {
    this.handleChange('username')(event);
    // avoid to get value from state, since state is asynchronous
    const username = event.target.value;
    if (username) {
      this.fetchUsers(username);
    } else {
      this.setState({ users: [] });
    }
  }

  async fetchOrganizations(name) {
    const { organizations } = await DataFetcher.fetchData('organizations/searchByName', name);
    this.setState({ organizations });
  }

  async fetchUsers(name) {
    const { users } = await DataFetcher.fetchData('users/searchByName', name);
    this.setState({ users });
  }

  render() {
    const {
      name, organizationName, username,
      organizations, selectedOrganizations,
      users, selectedUsers,
    } = this.state;

    return (
      <form
        noValidate
        autoComplete="on"
      >
        <FormGroup>

          <TextField
            id="name"
            label="Event Name"
            placeholder="Event Name"
            value={name}
            onChange={this.handleChange('name')}
          />

          <TextField
            id="organization"
            label="Organization Name"
            placeholder="Organization Name"
            value={organizationName}
            onChange={this.searchOrganization}
          />
          <ListWithChips
            items={organizations}
            itemLabel="name"
            onChange={this.update('selectedOrganizations')}
          />

          <TextField
            id="user"
            label="Username"
            placeholder="Username"
            value={username}
            onChange={this.searchUser}
          />
          <ListWithChips
            items={users}
            itemLabel="name"
            onChange={this.update('selectedUsers')}
          />

          <Button onClick={this.handleSubmit}> Create Event </Button>

        </FormGroup>


      </form>
    );
  }
}

export default EventForm;
