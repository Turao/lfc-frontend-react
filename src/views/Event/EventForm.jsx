import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

// Submit Button
import Button from '@material-ui/core/Button';
import DataFetcher from '../../dataFetcher';


class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      selectedOrganization: null,
      selectedModerators: [],

      organizations: [],
      moderators: [],

      moderatorFilter: '',
      organizationFilter: '',
    };
  }

  componentDidMount() {
    this.fetchOrganizations();
    this.fetchModerators();
  }

  handleSubmit = async () => {
    const {
      name,
      selectedOrganization,
      selectedModerators,
    } = this.state;
    const { onSuccess, onFailure } = this.props;

    const data = {
      event: {
        name,
        organization: selectedOrganization,
        moderators: selectedModerators,
      },
    };

    try {
      const response = await DataFetcher.sendDataToAPI('event', data);
      const { event } = response;
      onSuccess(event);
    } catch (error) {
      onFailure(error);
    }
  }

  handleChange = prop => (event) => {
    this.setState({
      [prop]: event.target.value,
    });
  }

  handleModeratorFilterChange = (event) => {
    this.handleChange('moderatorFilter')(event);
    const queryParams = { username: event.target.value };
    this.fetchModerators(queryParams);
  }

  handleOrganizationFilterChange = (event) => {
    this.handleChange('organizationFilter')(event);
    const queryParams = { name: event.target.value };
    this.fetchOrganizations(queryParams);
  }

  async fetchOrganizations(params) {
    const organizations = await DataFetcher.getDataFromAPI('organizations');
    this.setState({ organizations });
  }

  async fetchModerators(params) {
    const moderators = await DataFetcher.getDataFromAPI('users');
    this.setState({ moderators });
  }

  render() {
    const {
      name,
      organizations, selectedOrganization,
      moderators, selectedModerators,
      moderatorFilter, organizationFilter,
    } = this.state;

    return (
      <form noValidate autoComplete="off">
        <FormGroup>

          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={this.handleChange('name')}
          />

          <TextField
            id="organizationFilter"
            label="Filter organizations by name"
            value={organizationFilter}
            onChange={this.handleOrganizationFilterChange}
          />

          <TextField
            id="moderatorFilter"
            label="Filter moderators by name"
            value={moderatorFilter}
            onChange={this.handleModeratorFilterChange}
          />

          <Button onClick={this.handleSubmit}> Create Event </Button>

        </FormGroup>
      </form>
    );
  }
}

EventForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default EventForm;
