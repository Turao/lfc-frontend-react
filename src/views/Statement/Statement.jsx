import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataFetcher from '../../dataFetcher';
import StatementInfo from './StatementInfo';

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
    const statement = await DataFetcher.getDataFromAPI(`statement/${id}`);
    this.setState({ statement });
  }

  renderStatement() {
    const { statement } = this.state;
    return <StatementInfo statement={statement} />;
  }

  render() {
    const { statement } = this.state;
    return statement ? this.renderStatement() : null;
  }
}

Statement.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  }),
};

export default Statement;
