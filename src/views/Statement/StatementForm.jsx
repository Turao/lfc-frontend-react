import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import DataFetcher from '../../dataFetcher';

function StatementForm({ onSuccess, onFailure }) {
  // const [name, setName] = useState('');
  // const [abbreviation, setAbbreviation] = useState('');

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const data = {
  //     statement: {
  //       name,
  //       abbreviation,
  //     },
  //   };

  //   try {
  //     const statement = await DataFetcher.sendDataToAPI('statement', data);
  //     onSuccess(statement);
  //   } catch (error) {
  //     onFailure(error);
  //   }
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <TextField
  //       id="name"
  //       label="Name"
  //       value={name}
  //       onChange={event => setName(event.target.value)}
  //     />

  //     <TextField
  //       id="abbreviation"
  //       label="Abbreviation"
  //       value={abbreviation}
  //       onChange={event => setAbbreviation(event.target.value)}
  //     />
  //     <Button type="submit"> Create Statement </Button>
  //   </form>
  // );
}

StatementForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default StatementForm;
