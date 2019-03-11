import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import DataFetcher from '../../dataFetcher';

class OrganizationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = prop => (event) => {
    this.setState({
      [prop]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name } = this.state;
    const { onSuccess, onFailure } = this.props;

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
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={this.handleChange('name')}
        />

        <Button type="submit"> Create Organization </Button>
      </form>
    );
  }
}

OrganizationForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default OrganizationForm;
