import React, { Component } from 'react';

import DataFetcher from '../../../dataFetcher';
import FactCheckInfo from './FactCheckInfo';

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
    return <FactCheckInfo factcheck={factcheck} />;
  }

  render() {
    const { factcheck } = this.state;
    return factcheck ? this.renderFactCheck() : null;
  }
}

export default FactCheck;
