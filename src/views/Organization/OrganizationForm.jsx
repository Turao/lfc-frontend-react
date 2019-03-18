import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import DataFetcher from '../../dataFetcher';

function OrganizationForm({ onSuccess, onFailure }) {
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      organization: {
        name,
      },
    };

    try {
      const organization = await DataFetcher.sendDataToAPI('organization', data);
      onSuccess(organization);
    } catch (error) {
      onFailure(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <Button type="submit"> Create Organization </Button>
    </form>
  );
}

OrganizationForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default OrganizationForm;
