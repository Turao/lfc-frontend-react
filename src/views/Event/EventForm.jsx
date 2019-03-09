import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import MUIDataTable from 'mui-datatables';

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

  async fetchOrganizations(params) {
    const organizations = await DataFetcher.getDataFromAPI('organizations');
    this.setState({ organizations });
  }

  async fetchModerators(params) {
    const moderators = await DataFetcher.getDataFromAPI('users');
    this.setState({ moderators });
  }

  renderModeratorsDataTable() {
    const { moderators } = this.state;
    const columns = [{
      name: 'id',
      label: 'id',
      options: { display: 'excluded' },
    },
    {
      name: 'username',
      label: 'Username',
    },
    {
      name: 'firstName',
      label: 'First Name',
    },
    {
      name: 'lastName',
      label: 'Last Name',
    }];

    const options = {
      filterType: 'dropdown',
      selectableRows: false,
      filter: false,
      print: false,
      download: false,
      onRowClick: (data, meta) => console.log(data, meta),
    };

    return (
      <MUIDataTable
        title="Moderators"
        data={moderators}
        columns={columns}
        options={options}
      />
    );
  }


  renderOrganizationsDataTable() {
    const { organizations } = this.state;
    const columns = [{
      name: 'id',
      label: 'id',
      options: { display: 'excluded' },
    },
    {
      name: 'name',
      label: 'Name',
    }];

    const options = {
      filterType: 'dropdown',
      selectableRows: false,
      filter: false,
      print: false,
      download: false,
      onRowClick: (data, meta) => console.log(data, meta),
    };

    return (
      <MUIDataTable
        title="Organizations"
        data={organizations}
        columns={columns}
        options={options}
      />
    );
  }

  render() {
    const {
      name,
      organizations, selectedOrganization,
      moderators, selectedModerators,
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

          { moderators ? this.renderModeratorsDataTable() : null }
          { organizations ? this.renderOrganizationsDataTable() : null }

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
