import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataFetcher from '../../../dataFetcher';
import FactCheckPropType from './proptype';


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
    return null;
  }

  render() {
    const { factchecks } = this.state;
    return factchecks ? this.renderFactChecks() : null;
  }
}

FactChecks.propTypes = {
  factchecks: PropTypes.arrayOf(FactCheckPropType),
};

export default FactChecks;
