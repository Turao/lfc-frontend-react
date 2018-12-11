import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';

// Name Input
import TextField from '@material-ui/core/TextField';
// Radio Buttons
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
// Submit Button
import Button from '@material-ui/core/Button';

import DataFetcher from '../../../dataFetcher';


class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      selectedOrganization: null,
      organizations: [],
    };
  }

  componentDidMount() {
    this.fetchOrganizations();
  }

  handleChange = prop => (event) => {
    this.setState({
      [prop]: event.target.value,
    });
  }

  handleSubmit = async () => {
    const { name, selectedOrganization } = this.state;
    const { onSuccess, onFailure } = this.props;

    const data = {
      event: {
        name,
        organization: { _id: selectedOrganization },
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

  async fetchOrganizations() {
    const organizations = await DataFetcher.fetchData('organizations', null);
    this.setState({ organizations });
  }

  renderOrganizationRadioGroup() {
    const { organizations, selectedOrganization } = this.state;
    return (
      <RadioGroup
        aria-label="Organization"
        name="organizationRadioButton"
        value={selectedOrganization}
        onChange={this.handleChange('selectedOrganization')}
      >
        {organizations.map(organization => (
          <FormControlLabel
            // eslint-disable-next-line no-underscore-dangle
            value={organization._id}
            control={<Radio />}
            label={organization.name}
          />
        ))}
      </RadioGroup>
    );
  }

  render() {
    const { name } = this.state;
    return (
      <form noValidate autoComplete="on">
        <FormGroup>

          <TextField
            id="name"
            label="EventName"
            value={name}
            onChange={this.handleChange('name')}
          />

          { this.renderOrganizationRadioGroup() }

          <Button onClick={this.handleSubmit}> Create Event </Button>

        </FormGroup>
      </form>
    );
  }
}

export default EventForm;
