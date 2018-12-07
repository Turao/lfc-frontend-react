import React, { Component } from 'react';

import FormGroup from '@material-ui/core/FormGroup';

// Name Input
import TextField from '@material-ui/core/TextField';

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

  static onSuccess() {
    console.log('event created!');
  }

  static onFailure() {
    console.log('coulnt create the event');
  }

  async handleSubmit() {
    const { name, selectedOrganization } = this.state;
    const data = {
      event: {
        name,
        organization: selectedOrganization,
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
      this.onSuccess();
    } else {
      this.onFailure();
    }
  }

  async fetchOrganizations() {
    const organizations = await DataFetcher.fetchData('organizations', null);
    this.setState({ organizations });
  }

  handleChange(prop, event) {
    this.setState({
      [prop]: event.target.value,
    });
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

          <Button onClick={this.handleSubmit.bind(this)}> Create Event </Button>

        </FormGroup>
      </form>
    );
  }
}

export default EventForm;
