import React, { Component } from 'react';

import DataFetcher from '../../dataFetcher';
import FactCheckInfo from './FactCheckInfo';


class FactChecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factchecks: null,
    };
  }

  componentDidMount() {
    this.fetchFactChecksData();
  }

  async fetchFactChecksData() {
    const factchecks = await DataFetcher.fetchData('factchecks');
    this.setState({ factchecks });
  }

  renderFactChecks() {
    const { factchecks } = this.state;
    return (
      factchecks.map(factcheck => (
        <FactCheckInfo factcheck={factcheck} key={factcheck.id} />
      ))
    );
  }

  render() {
    const { factchecks } = this.state;
    return factchecks ? this.renderFactChecks() : null;
  }
}

export default FactChecks;
