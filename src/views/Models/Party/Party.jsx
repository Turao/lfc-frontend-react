import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataFetcher from '../../../dataFetcher';
import PartyPropType from './proptype';


class Party extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      party: null,
    };
  }

  componentDidMount() {
    this.fetchPartyData();
  }

  async fetchPartyData() {
    const { id } = this.state;
    const party = await DataFetcher.fetchData(`party/${id}`);
    this.setState({ party });
  }

  renderParty() {
    const { party } = this.state;
    return null;
  }

  render() {
    const { party } = this.state;
    return party ? this.renderParty() : null;
  }
}

Party.propTypes = {
  party: PartyPropType,
};

export default Party;
