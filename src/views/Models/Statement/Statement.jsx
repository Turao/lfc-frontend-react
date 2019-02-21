import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataFetcher from '../../../dataFetcher';
import StatementPropType from './proptype';


class Statement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      statement: null,
    };
  }

  componentDidMount() {
    this.fetchStatementData();
  }

  async fetchStatementData() {
    const { id } = this.state;
    const statement = await DataFetcher.fetchData(`statement/${id}`);
    this.setState({ statement });
  }

  renderStatement() {
    const { statement } = this.state;
    return null;
  }

  render() {
    const { statement } = this.state;
    return statement ? this.renderStatement() : null;
  }
}

Statement.propTypes = {
  statement: StatementPropType,
};

export default Statement;
