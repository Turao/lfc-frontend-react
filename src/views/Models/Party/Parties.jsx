import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataFetcher from '../../../dataFetcher';
import PartyPropType from './proptype';


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

  async fetchPartieskData() {
    const parties = await DataFetcher.fetchData('parties');
    this.setState({ parties });
  }

  renderParties() {
    const { parties } = this.state;
    return null;
  }

  render() {
    const { parties } = this.state;
    return parties ? this.renderParties() : null;
  }
}

Parties.propTypes = {
  parties: PropTypes.arrayOf(PartyPropType),
};

export default Parties;
