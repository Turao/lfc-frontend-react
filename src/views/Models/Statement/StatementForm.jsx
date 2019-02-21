import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// Name Input
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


// Submit Button
import Button from '@material-ui/core/Button';

import DataFetcher from '../../../dataFetcher';
import ListWithChips from '../../../components/ListWithChips';


class StatementForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',

      politicianUsername: '',
      politicians: [],
      selectedPolitician: null,
    };
  }

  handleChange = prop => (event) => {
    this.setState({
      [prop]: event.target.value,
    });
  }

  update = prop => (value) => {
    this.setState({
      [prop]: value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { content, selectedPolitician } = this.state;
    const { onSuccess, onFailure, eventId } = this.props;

    const data = {
      event: {
        content,
        event: { _id: eventId },
        // eslint-disable-next-line no-underscore-dangle
        politician: { _id: selectedPolitician._id },
      },
    };

    console.log('creating event...', data);

    const response = await fetch('http://localhost:3001/api/statement/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: sessionStorage.getItem('userToken'),
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      onSuccess();
    } else {
      onFailure();
    }
  }

  searchPolitician = () => {
    const { politicianUsername } = this.state;
    if (politicianUsername) {
      this.fetchPoliticians(politicianUsername);
    } else {
      this.setState({ politicians: [] });
    }
  }

  async fetchPoliticians(name) {
    try {
      const { users } = await DataFetcher.fetchData('users/searchByName', name);
      this.setState({ politicians: users });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const {
      content,
      politicianUsername, politicians,
    } = this.state;

    const userComponents = (
      <Grid>
        <TextField
          id="user"
          label="Politician"
          placeholder="Politician"
          value={politicianUsername}
          onChange={this.handleChange('politicianUsername')}
        />
        <IconButton onClick={this.searchPolitician}>
          <SearchIcon />
        </IconButton>
        <ListWithChips
          items={politicians}
          itemLabel="name"
          onChange={this.update('selectedPolitician')}
          limit={1}
        />
      </Grid>
    );

    return (
      <form>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <TextField
            id="content"
            label="Content"
            placeholder="Content"
            value={content}
            onChange={this.handleChange('content')}
          />

          { userComponents }

          <Button onClick={this.handleSubmit}> Create Statement </Button>
        </Grid>
      </form>
    );
  }
}

export default StatementForm;
