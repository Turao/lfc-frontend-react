import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Select from 'react-select';

import DataFetcher from '../../dataFetcher';


function EventForm({ onSuccess, onFailure }) {
  const [name, setName] = useState('');
  const [selectedOrganization, setSelectedOrganization] = useState(null);


  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
    const fetchOrganizations = async (params) => {
      const data = await DataFetcher.get('organizations');
      setOrganizations(data);
    };

    fetchOrganizations();
  }, []);


  const handleSubmit = async (_event) => {
    _event.preventDefault();

    const data = {
      event: {
        name,
        organizationId: selectedOrganization.value.id,
      },
    };

    try {
      const event = await DataFetcher.post('event', data);
      onSuccess(event);
    } catch (error) {
      onFailure(error);
    }
  };

  const renderOrganizationsSelector = () => {
    const options = organizations.map(o => ({
      value: o,
      label: o.name,
    }));

    return (
      <Select
        label="Organization"
        value={selectedOrganization}
        options={options}
        onChange={setSelectedOrganization}
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
          onChange={event => setName(event.target.value)}
        />

        { renderOrganizationsSelector() }

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
