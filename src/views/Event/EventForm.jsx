import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MUIDataTable from 'mui-datatables';

import DataFetcher from '../../dataFetcher';


function EventForm(props) {
  const [name, setName] = useState('');
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [selectedModerators, setSelectedModerators] = useState([]);


  const [organizations, setOrganizations] = useState([]);
  const fetchOrganizations = async (params) => {
    const data = await DataFetcher.getDataFromAPI('organizations');
    setOrganizations(data);
  };

  const [moderators, setModerators] = useState([]);
  const fetchModerators = async (params) => {
    const data = await DataFetcher.getDataFromAPI('users');
    setModerators(data);
  };

  useEffect(() => {
    fetchOrganizations();
    fetchModerators();
  }, []);


  const handleSubmit = async (_event) => {
    _event.preventDefault();

    const { onSuccess, onFailure } = props;

    const data = {
      event: {
        name,
        organization: selectedOrganization,
        moderators: selectedModerators,
      },
    };

    try {
      const event = await DataFetcher.sendDataToAPI('event', data);
      onSuccess(event);
    } catch (error) {
      onFailure(error);
    }
  };


  const renderModeratorsDataTable = () => {
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
      selectableRows: true,
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


  const renderOrganizationsDataTable = () => {
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
      selectableRows: true,
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>

        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={event => setName(event.value)}
        />

        <Grid container alignItems="flex-start">
          { renderModeratorsDataTable() }
          { renderOrganizationsDataTable() }
        </Grid>

        <Button type="submit"> Create Event </Button>

      </FormGroup>
    </form>
  );
}

EventForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default EventForm;
