import React, { Component } from 'react';

import DataFetcher from '../../dataFetcher';
import PartyInfo from './PartyInfo';

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
    const party = await DataFetcher.getDataFromAPI(`party/${id}`);
    this.setState({ party });
  }

  renderParty() {
    const { party } = this.state;
    return <PartyInfo party={party} />;
  }

  render() {
    const { party } = this.state;
    return party ? this.renderParty() : null;
  }
}

export default Party;
