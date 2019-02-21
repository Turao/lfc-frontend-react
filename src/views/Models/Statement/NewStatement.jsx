import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import StatementForm from './StatementForm';


class NewStatement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failedToCreate: false,
    };
  }

  onStatementCreated = () => {
    const { refresh } = this.props;
    refresh();
  }

  onStatementCreationFailure = () => {
    console.error('failed to create event');
    this.setState({ failedToCreate: true });
  }

  render() {
    const { redirectToEvent, failedToCreate } = this.state;
    const { eventId } = this.props;

    return (
      <React.Fragment>
        <StatementForm
          onSuccess={this.onStatementCreated}
          onFailure={this.onStatementCreationFailure}
          eventId={eventId}
        />
        {
          redirectToEvent
            ? <Redirect to={`/events/${eventId}}`} />
            : null
        }
      </React.Fragment>
    );
  }
}

NewStatement.propTypes = {
  eventId: PropTypes.string.isRequired,
  refresh: PropTypes.func.isRequired,
};

export default NewStatement;
