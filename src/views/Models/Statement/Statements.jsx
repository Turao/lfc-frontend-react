import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataFetcher from '../../../dataFetcher';
import StatementPropType from './proptype';


class Statements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statements: null,
    };
  }

  componentDidMount() {
    this.fetchStatementsData();
  }

  async fetchStatementsData() {
    const statements = await DataFetcher.fetchData('statements');
    this.setState({ statements });
  }

  renderStatements() {
    const { statements } = this.state;
    return null;
  }

  render() {
    const { statements } = this.state;
    return statements ? this.renderStatements() : null;
  }
}

Statements.propTypes = {
  statements: PropTypes.arrayOf(StatementPropType),
};

export default Statements;
