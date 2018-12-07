import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import DataFetcher from '../../dataFetcher';

export default function loadModelData(WrappedComponent, endpoint) {
  class ModelLoader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        _id: props.match.params.id,
        data: null,
      };
    }

    componentDidMount() {
      this.fetchData();
    }

    async fetchData() {
      const { _id } = this.state;
      const data = await DataFetcher.fetchData(endpoint, _id);
      this.setState({ data });
    }

    renderData() {
      const { data } = this.state;
      // delegate rendering
      return <WrappedComponent data={data} {...this.props} />;
    }

    static renderLoading() {
      return <CircularProgress />;
    }

    render() {
      const { data } = this.state;
      return data ? this.renderData() : ModelLoader.renderLoading();
    }
  }

  // eslint-disable-next-line no-use-before-define
  ModelLoader.displayName = `ModelLoader(${getDisplayName(WrappedComponent)})`;
  return ModelLoader;
}


function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
