import React, { Component } from 'react';

import DataFetcher from '../../dataFetcher';
import PartyInfo from './PartyInfo';

class Parties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: null,
    };
  }

  componentDidMount() {
    this.fetchPartiesData();
  }

  async fetchPartiesData() {
    const parties = await DataFetcher.getDataFromAPI('parties');
    this.setState({ parties });
  }

  renderParties() {
    const { parties } = this.state;
    return parties.map(party => <PartyInfo party={party} key={party.id} />);
  }

  render() {
    const { parties } = this.state;
    return parties ? this.renderParties() : null;
  }
}

export default Parties;
