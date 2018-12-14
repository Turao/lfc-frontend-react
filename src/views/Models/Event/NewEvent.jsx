import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import EventForm from './EventForm';


const styles = theme => ({
  paper: {
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
  },
});


class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToEvents: false,
      failedToCreate: false,
    }
  }

  redirectToEvents = () => {
    this.setState({ redirectToEvents: true });
  }

  onEventCreationFailure = () => {
    console.error('failed to create event');
    this.setState({ failedToCreate: true });
  }

  render() {
    const { redirectToEvents, failedToCreate } = this.state;
    return (
      <React.Fragment>
        <EventForm
          onSuccess={this.redirectToEvents}
          onFailure={this.onEventCreationFailure}
        />
        {
          redirectToEvents
            ? <Redirect to="/events" />
            : null
        }
      </React.Fragment>
    );
  }
}

NewEvent.propTypes = {
};

export default withStyles(styles)(NewEvent);
