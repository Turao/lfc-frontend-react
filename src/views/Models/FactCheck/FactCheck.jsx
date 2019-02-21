import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataFetcher from '../../../dataFetcher';
import FactCheckPropType from './proptype';


class FactCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      factcheck: null,
    };
  }

  componentDidMount() {
    this.fetchFactCheckData();
  }

  async fetchFactCheckData() {
    const { id } = this.state;
    const factcheck = await DataFetcher.fetchData(`factcheck/${id}`);
    this.setState({ factcheck });
  }

  renderFactCheck() {
    const { factcheck } = this.state;
    return null;
  }

  render() {
    const { factcheck } = this.state;
    return factcheck ? this.renderFactCheck() : null;
  }
}

FactCheck.propTypes = {
  factcheck: FactCheckPropType,
};

export default FactCheck;
