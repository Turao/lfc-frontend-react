import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleList from '../../components/SimpleList';
import loadModelData from '../ModelLoader';

class Event extends Component {
  constructor(props) {
    super(props);

    const {
      name, organization,
      moderators, statements,
    } = props.data;

    this.state = {
      name,
      organization,
      moderators,
      statements,
    };
  }

  renderModerators() {
    const { moderators } = this.state;
    return (
      <React.Fragment>
        <h2> Moderators </h2>
        {
          moderators.map(moderator => moderator.name)
        }
      </React.Fragment>
    );
  }

  renderStatements() {
    const { statements } = this.state;
    return (
      <SimpleList items={statements} />
    );
  }

  render() {
    const { name, organization } = this.state;
    return (
      <React.Fragment>
        <h1>
          { name }
        </h1>

        <h2>
          { organization.name }
        </h2>

        { this.renderModerators() }
        { this.renderStatements() }
      </React.Fragment>
    );
  }
}

Event.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    organization: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    moderators: PropTypes.arrayOf(PropTypes.object).isRequired,
    statements: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default loadModelData(Event, 'event');
