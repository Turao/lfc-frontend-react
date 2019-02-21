import React, { Component } from 'react';

import DataFetcher from '../../../dataFetcher';
import PropTypes from 'prop-types';
import StatementInfo from './StatementInfo';

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
    return (
      <React.Fragment>
        {
          statements.map(statement => <StatementInfo statement={statement} key={statement.id} />)
        }
      </React.Fragment>
    );
  }

  render() {
    const { statements } = this.state;
    return statements ? this.renderStatements() : null;
  }
}

export default Statements;
