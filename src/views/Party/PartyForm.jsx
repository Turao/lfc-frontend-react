import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import DataFetcher from '../../dataFetcher';

function PartyForm({ onSuccess, onFailure }) {
  const [name, setName] = useState('');
  const [abbreviation, setAbbreviation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      party: {
        name,
        abbreviation,
      },
    };

    try {
      const party = await DataFetcher.post('party', data);
      onSuccess(party);
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

      <TextField
        id="abbreviation"
        label="Abbreviation"
        value={abbreviation}
        onChange={event => setAbbreviation(event.target.value)}
      />
      <Button type="submit"> Create Party </Button>
    </form>
  );
}

PartyForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default PartyForm;
