import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import DataFetcher from '../../dataFetcher';

class PartyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      abbreviation: '',
    };
  }

  handleChange = prop => (event) => {
    this.setState({
      [prop]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, abbreviation } = this.state;
    const { onSuccess, onFailure } = this.props;

    const data = {
      party: {
        name,
        abbreviation,
      },
    };

    try {
      const party = await DataFetcher.sendDataToAPI('party', data);
      onSuccess(party);
    } catch (error) {
      onFailure(error);
    }
  }

  render() {
    const { name, abbreviation } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={this.handleChange('name')}
        />

        <TextField
          id="abbreviation"
          label="Abbreviation"
          value={abbreviation}
          onChange={this.handleChange('abbreviation')}
        />
        <Button type="submit"> Create Party </Button>
      </form>
    );
  }
}

PartyForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default PartyForm;
